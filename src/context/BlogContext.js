import React, { useReducer } from 'react'

const BlogContext = React.createContext()
const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [...state, { title: `Blogpost #${state.length + 1}` }]
		default:
			return state
	}
}

export const BlogProvider = ({ children }) => {
	// below is for learning stuff
	//const [blogPosts, setBlogPosts] = useState([])
	//    [state, dispatch]
	const [blogPosts, dispatch] = useReducer(blogReducer, [])

	const addBlogPost = () => {
		dispatch({ type: 'add_blogpost' })
	}

	// value is what is sent all around the app
	return (
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
			{children}
		</BlogContext.Provider>
	)
}

export default BlogContext
