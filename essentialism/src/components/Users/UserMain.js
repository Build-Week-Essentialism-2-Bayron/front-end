import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'

const UserMain = ({ logout }) => {
	return (
		<div className='user-profile-container'>
			<nav>
				<h3>Essentialism</h3>
				<div className='user-links'>
					<Link to='/values'>Add A Project</Link>
					<Link to='/main'>My-Home</Link>
					<Link to='/' onClick={logout}>
						Log Out
					</Link>
				</div>
			</nav>

			<div className='user-profile'>
				<h1>Your Profile</h1>

				<div className='user-profile-info' />
			</div>
		</div>
	)
}

export default connect(null, { logout })(UserMain)
