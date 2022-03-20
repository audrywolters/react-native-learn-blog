import React from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
	const blogPosts = [{ title: 'blog #1' }, { title: 'blog #2' }]

	// value is what is sent all around the app
	return <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
}

export default BlogContext
