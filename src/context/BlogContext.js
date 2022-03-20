import React from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
	// value is what is sent all around the app
	return <BlogContext.Provider value={15}>{children}</BlogContext.Provider>
}

export default BlogContext
