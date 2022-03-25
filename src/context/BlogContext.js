import createDataContext from '../context/createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
	// reducer action.type is case sensitive
	switch (action.type) {
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
			})
		case 'get_blogPostList':
			// this will be coming from the api (json-server)
			return action.payload
		default:
			return state
	}
}

const addBlogPost = (dispatch) => {
	return async (title, content, callback) => {
		try {
			// add new to DB
			await jsonServer.post('/blogPostList', { title, content })

			// callback() === navigation.navigate('Index')
			if (callback) {
				callback()
			}
		} catch (e) {
			console.log(`couldn't add a new blog post! ${e}`)
		}
	}
}

const deleteBlogPost = (dispatch) => {
	return async (id) => {
		try {
			// delete from DB
			await jsonServer.delete(`/blogPostList/${id}`)
			// using frontend to refresh index page instead of server
			dispatch({ type: 'delete_blogPost', payload: id })
		} catch (e) {
			console.log(`couldn't delete blog post id:${id}! ${e}`)
		}
	}
}

const editBlogPost = (dispatch) => {
	return async (id, title, content, callback) => {
		try {
			// update in DB
			await jsonServer.put(`/blogPostList/${id}`, { title, content })

			// have to keep this to update Show Screen
			// otherwise index screen will refresh on navigating back
			dispatch({
				type: 'edit_blogPost',
				// can sugar-syntax this: (id, title, content)
				// but leaving it for reference
				payload: { id: id, title: title, content: content }
			})


			// callback === navigation.pop()
			if (callback) {
				callback()
			}
		} catch (e) {
			console.log(`couldn't update blog post id:${id}`)
		}

	}
}

const getBlogPostList = (dispatch) => {
	return async () => {
		try {
			// response.data === [{}, {}, {}]
			// server address isn't case sensitive - i'm just following my convention
			const response = await jsonServer.get('/blogPostList')
			// reducer IS case sensitive
			dispatch({ type: 'get_blogPostList', payload: response.data })
		} catch (e) {
			console.log(`couldn't get blogposts! error: ${e}`)
		}
	}
}

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost, editBlogPost, getBlogPostList },
	[]
)
