import React, { createContext, useReducer } from 'react'
import { reducer, initState } from './reducer'
import { createActions } from './actions'
import { applyMiddleware } from './middleware'

const StoreContext = createContext(initState)

const StoreProvider = ({ children }) => {
	const [ state, dispatch ] = useReducer(reducer, initState)
	// attatch middleware to capture every dispatch
	const enhancedDispatch = applyMiddleware(dispatch)

	const actions = createActions(state, enhancedDispatch)

	return <StoreContext.Provider value={{ state, enhancedDispatch, actions }}>{children}</StoreContext.Provider>
}

export { StoreContext, StoreProvider }