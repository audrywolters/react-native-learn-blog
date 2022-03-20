import React from 'react'

const BlogContext = React.createContext()

export const BlogProvider = ({ children }) => {
	// AUDRY - keep an eye on 'value'
	// tutorial hasn't gotten to it yet. gulp. could be outdated
	return <BlogContext.Provider value="Blog">{children}</BlogContext.Provider>
}
