import React, { useState } from 'react'

// import Spinner from '../Spinner'

import { useHistory } from 'react-router-dom'

const Login = () => {
	let history = useHistory()

	const [ newUser, setNewUser ] = useState({
		id: '',
		name: '',
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

		history.replace(`/mainUI/${newUser.id}`)
	}
	return (
		<div className='login-form-wrapper'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<label htmlFor='username'>Enter Username</label>
				<input name='name' type='text' value={newUser.name} placeholder='username' onChange={handleChange} />

				<label htmlFor='password'>Enter Password</label>
				<input
					name='password'
					type='text'
					value={newUser.password}
					placeholder='password'
					onChange={handleChange}
				/>
				<button onClick={handleSubmit} className='submit-button'>
					Log In
				</button>
			</form>
			s{' '}
		</div>
	)
}

export default Login
