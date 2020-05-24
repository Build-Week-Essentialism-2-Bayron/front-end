import React, { useState } from 'react'

import Spinner from '../Spinner'

import { useHistory } from 'react-router-dom'

const Login = () => {
	let history = useHistory()

	const [ newUser, setNewUser ] = useState({
		id: '',
		name: '',
		password: '',
		type: '',
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

		history.replace(`/${newUser.type}UI`)
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

				<label htmlFor='type'>Select User Type</label>
				<select name='type' value={newUser.type} className='select-dropdown' onChange={handleChange}>
					<option id='placeholder'>Login As...</option>
					<option>seeker</option>
					<option>company</option>
				</select>
				<button onClick={handleSubmit} className='submit-button'>
					Log In
				</button>
			</form>
			{/* <Spinner /> */}
		</div>
	)
}

export default Login
