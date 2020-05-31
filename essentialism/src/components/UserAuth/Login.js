import React, { useState } from 'react'

import { userLogin } from '../../redux/actions/auth'

import { useHistory } from 'react-router-dom'

import { connect } from 'react-redux'

const Login = ({ userLogin }) => {
	let history = useHistory()

	const [ credentials, setCredentials ] = useState({})

	const handleChange = e => {
		setCredentials({
			...credentials,
			[e.target.name]: e.target.value,
		})
		console.log('This is credentials in the Login.js handleChange: ', credentials)
	}

	const handleSubmit = () => {
		console.log('This is credentials in the Login.js handleSubmit: ', credentials)
		userLogin(credentials)
		history.push('/Main')
	}

	return (
		<div className='auth-form-wrapper'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<label htmlFor='username'>
					Enter Username
					<input name='username' type='text' placeholder='username' onChange={handleChange} />
				</label>

				<label htmlFor='password'>
					Enter Password
					<input name='password' type='password' placeholder='password' onChange={handleChange} />
				</label>
				<button className='auth-button'>Log In</button>
			</form>
		</div>
	)
}

export default connect(null, { userLogin })(Login)
