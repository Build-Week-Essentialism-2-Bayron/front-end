import React from 'react'
import ReactDOM from 'react-dom'
import { StoreProvider } from './store/StoreContext'
import Routes from './Routes'

import { BrowserRouter as Router } from 'react-router-dom'

import './styles/index.css'

ReactDOM.render(
	<StoreProvider>
		<Router>
			<Routes />
		</Router>
	</StoreProvider>,
	document.getElementById('root'),
)
