import React, { useState } from 'react'

import { userLogin } from '../../redux/actions/auth'

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'

import Spinner from '../Spinner'

const Login = ({ isLoading, userLogin }) => {
	let history = useHistory()

	const [ newUser, setNewUser ] = useState({
		username: '',
		password: '',
	})

	const handleChange = e => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		})
		console.log('This is newUser in the Login.js handleChange: ', newUser)
	}

	const handleSubmit = e => {
		e.preventDefault()
		console.log('This is newUser in the Login.js handleSubmit: ', newUser)
		userLogin(newUser)
		history.push('/Main')
	}

	return (
		<div className='auth-form-wrapper'>
			{isLoading ? (
				<form onSubmit={handleSubmit} className='auth-form'>
					<label htmlFor='username'>
						Enter Username
						<input name='name' value={newUser.name} placeholder='username' onChange={handleChange} />
					</label>

					<label htmlFor='password'>
						Enter Password
						<input
							name='password'
							value={newUser.password}
							placeholder='password'
							onChange={handleChange}
						/>
					</label>
					<button className='auth-button'>Log In</button>
				</form>
			) : (
				<Spinner />
			)}
		</div>
	)
}

const mapStateToProps = state => {
	return {
		isLoading: state.isLoading,
		user: state.user,
	}
}

export default connect(mapStateToProps, { userLogin })(Login)
