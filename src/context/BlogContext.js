import createDataContext from '../context/createDataContext'

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogPost':
			return [
				...state,
				{
					id: Math.floor(Math.random() * 99999),
					title: `Blogpost #${state.length + 1}`
				}
			]
		case 'delete_blogPost':
			return state.filter((blogPost) => blogPost.id !== action.payload)
		default:
			return state
	}
}

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: 'add_blogPost' })
	}
}

const deleteBlogPost = (dispatch) => {
	return (id) => {
		console.log('inside delete blog post')
		dispatch({ type: 'delete_blogPost', payload: id })
	}
}

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost, deleteBlogPost },
	[]
)
