import createDataContext from '../context/createDataContext'

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [
				...state,
				{
					title: `Blogpost #${state.length + 1}`,
					id: Math.floor(Math.random() * 99999)
				}
			]
		default:
			return state
	}
}

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: 'add_blogpost' })
	}
}

export const { Context, Provider } = createDataContext(
	blogReducer,
	{ addBlogPost },
	[]
)
