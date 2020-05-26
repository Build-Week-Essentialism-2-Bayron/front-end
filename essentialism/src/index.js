import React, { createContext } from 'react'
import ReactDOM from 'react-dom'
import Routes from './Routes'

import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

const UserContext = createContext()

UserContext.displayName = 'userContext'

const initState = {
	user: {
		projects: [],
		values: [],
	},
}

ReactDOM.render(
	<UserContext.Provider value={initState}>
		<Router>
			{console.log(initState)}
			<Routes />
		</Router>
	</UserContext.Provider>,
	document.getElementById('root'),
)
