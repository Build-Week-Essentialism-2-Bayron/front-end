import React from 'react'

import { Route, Switch } from 'react-router-dom'
import ProtectedRoute from './components/utils/ProtectedRoute'
import LandingPage from './components/MainUI/LandingPage'
import UserMain from './components/MainUI/UserMain'
import UserProfile from './components/Profile/UserProfile'
import Register from './components/UserAuth/Register'
import NoMatch from './components/NoMatch'
import './styles/App.css'

// The Routes component will handle all of the routing/ navigation for the app. It's sole purpose is to set the URL paths and render components based upon given URLs

// The ProtectedRoute component handles client-side authentication via JSON Web Token.
const Routes = () => {
	return (
		<div className='App'>
			<Switch>
				<Route exact path='/'>
					<LandingPage />
				</Route>

				<ProtectedRoute exact path='mainUI' component={UserMain} />

				<ProtectedRoute exact path='user-profile' component={UserProfile} />

				<Route exact path='/register'>
					<Register />
				</Route>

				<Route component={NoMatch} />
			</Switch>
		</div>
	)
}

export default Routes
