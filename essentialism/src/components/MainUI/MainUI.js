import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'

import Register from '../UserAuth/Register'

const MainUI = ({ user , logout}) => {
	let state = false
    let prevState = false 

	const [ hideLinks, setHideLinks ] = useState(state)
	

	const handleClick = () => {
	state = !state
	setHideLinks(state)
	}

	const handleLogout = () => {
		logout()
		state = prevState
		setHideLinks(state)
	}


	return (
		<>
			<h1>ESSENTIALISM</h1>

			{hideLinks ? (
				<>
				<div className='main-ui'>
						<Link to='/' onClick={handleLogout}>Log Out</Link>
						<Link to='/login'>Log In</Link>
					<Register />
				</div>
					<h4 onClick={handleClick}>Back</h4>
					</>
			) : (
				<h4 onClick={handleClick}>Click Here to Start</h4>
			)}
		</>
	)
}

// const mapStateToProps = state => {
// 	return {
// 		user: state.user
// 	}
// }

export default connect(null, { logout })(MainUI)
