import createDataContext from '../context/createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogPost':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: action.payload.title,
					content: action.payload.content
				}
			]
		case 'delete_blogPost':
			return state.filter((bP) => bP.id !== action.payload)
		case 'edit_blogPost':
			// create a new array for state
			// that has all exsisting blog posts
			// except the new one so we can keep the changes
			return state.map((bP) => {
				if (bP.id === action.payload.id) {
					return action.payload
				} else {
					return bP
				}

				// here is ternary if you like that instead
				// return bP.id === action.payload.id ? action.payload : bP
			})
		case 'get_blogPosts':
			// this will be coming from the api (json-server)
			return action.payload
		default:
			return state
	}
}

const addBlogPost = (dispatch) => {
	return (title, content, callback) => {
		// leaving commented lines for reference - in case i want to copy if using a backend/api
		// don't forget aysnc keyword

		// try {
		// 	await axios.post('asdfjkl', title, content)
		dispatch({ type: 'add_blogPost', payload: { title, content } })
		// callback() === navigation.navigate('Index') - for now
		if (callback) {
			callback()
		}
		// } catch (e) {
		// 	// do something useful
		// }
	}
}

const deleteBlogPost = (dispatch) => {
	return (id) => {
		dispatch({ type: 'delete_blogPost', payload: id })
	}
}

const editBlogPost = (dispatch) => {
	return (id, title, content, callback) => {
		dispatch({
			type: 'edit_blogPost',
			// can sugar-syntax this: (id, title, content)
			// but leaving it for reference
			payload: { id: id, title: title, content: content }
		})
		// callback === navigation.pop() - for now
		if (callback) {
			callback()
		}
	}
}

getBlogPosts = (dispatch) => {
	return async () => {
		// response.data === [{}, {}, {}]
		const response = await jsonServer.get('/blogPosts')

		dispatch({ type: 'get_blogPosts', payload: response.data })
	}
}

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
	[]
)
