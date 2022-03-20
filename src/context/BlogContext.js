import React, { useState } from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
	const [blogPosts, setBlogPosts] = useState([])

	const addBlogPost = () => {
		setBlogPosts([
			...blogPosts,
			{ title: `Blog Post #${blogPosts.length + 1}` }
		])
	}

	// value is what is sent all around the app
	return (
		<BlogContext.Provider value={{ data: blogPosts, addBlogPost: addBlogPost }}>
			{children}
		</BlogContext.Provider>
	)
}

export default BlogContext
