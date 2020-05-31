import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { logout } from '../../redux/actions/auth'
import { deleteUser } from '../../redux/actions/user'
import ValuesList from '../../components/Values/ValuesList'

const UserMain = ({ logout, deleteUser }) => {
	let history = useHistory()

	const handleClick = e => {
		e.preventDefault()
		let token = localStorage.getItem('token')
		let ID = localStorage.getItem('userId')
		console.log('userI var in handleClick: ', ID)
		deleteUser(ID, token)
		history.replace('/')
	}

	return (
		<div className='user-profile-container'>
			<nav>
				<div className='user-links'>
					<Link to='/values'>Add A Project</Link>
					<button type='button' className='auth-button' onClick={e => handleClick(e)}>
						Delete Profile
					</button>
					<Link to='/' onClick={logout}>
						Log Out
					</Link>
				</div>
			</nav>

			<div className='user-profile'>
				<h5>Your Profile</h5>
				<ValuesList />
			</div>
		</div>
	)
}

export default connect(null, { logout, deleteUser })(UserMain)
