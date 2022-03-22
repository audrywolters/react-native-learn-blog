import createDataContext from '../context/createDataContext'

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
		default:
			return state
	}
}

const addBlogPost = (dispatch) => {
	return (title, content, callback) => {
		// leaving commented lines for reference - in case i want to copy if using a backend/api
		// don't forget aysnc keyword

		// try {
		// 	await axios.post('asdfjkl;', title, content)
			dispatch({ type: 'add_blogPost', payload: { title, content } })
			callback()
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

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
)
