import React from 'react'
import ReactDOM from 'react-dom'

import { createStore, applyMiddleware } from 'redux'

import { composeWithDevTools } from 'redux-devtools-extension'
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux'

import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

import { rootReducer } from 'redux/reducers/index'
import Routes from './Routes'

const actionsLogger = ({ getState }) => next => action => {
	console.log('Current State : ', getState())
	next(action)
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, actionsLogger)))
console.log('Store inside index.js: ', store)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Routes />
		</Router>
	</Provider>,
	document.getElementById('root'),
)
