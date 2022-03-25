import React, { useReducer } from 'react'

// this file holds stuff so we don't have to rewrite it 
// everytime we want to create a new context for some other idea
// idea or grouping of tasks

// but what is really going on here is a bit mysterious
// it creates Context and Provider
// it helps modify state
// BlogContext uses this to do all it does

// App.js uses this to wrap up the whole app
// so everyone can have access to the app

export default (reducer, actions, intialState) => {
	const Context = React.createContext()

	const Provider = ({ children }) => {
		const [state, dispatch] = useReducer(reducer, intialState)

		// actions === { addBlogPost: (dispatch) => { return () => {} }
		const boundActions = {}
		for (let key in actions) {
			// key === 'addBlogPost'
			boundActions[key] = actions[key](dispatch)
		}

		return (
			<Context.Provider value={{ state: state, ...boundActions }}>
				{children}
			</Context.Provider>
		)
	}

	// what is the difference between Context and Provider?
	return { Context, Provider }
}
