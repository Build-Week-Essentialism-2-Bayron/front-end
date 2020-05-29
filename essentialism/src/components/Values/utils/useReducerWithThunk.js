import { useReducer, useMemo, useEffect } from 'react'

let stores = {}
let subscribers = {}

const REDUX_DEVTOOL_SET_STATE = 'REDUX_DEVTOOL_SET_STATE'

const withDevTools = name => {
	return (
		name &&
		process.env.NODE_ENV === 'development' &&
		typeof window !== 'undefined' &&
		window.__REDUX_DEVTOOLS_EXTENSION__
	)
}

// reducer to handle devtools actions.
const devToolReducer = reducer => (state, action) => {
	if (action.type === REDUX_DEVTOOL_SET_STATE) {
		return action.state
	} else {
		return reducer(state, action)
	}
}

function useReducerWithThunk(reducer, initState) {
	const [ state, dispatch ] = useReducer(reducer, initState)

	let customDispatch = action => {
		if (typeof action === 'function') {
			action(customDispatch)
		} else {
			dispatch(action)
		}
	}
	return [ state, customDispatch ]
}
export default useReducerWithThunk
