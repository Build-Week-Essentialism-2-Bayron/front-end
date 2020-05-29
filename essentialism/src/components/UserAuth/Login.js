import React, { useState } from 'react'

// import Spinner from '../Spinner'

import axios from 'axios'

import { useHistory } from 'react-router-dom'

const Login = () => {
	const BASE_URL = 'https://essential2us.herokuapp.com/'

	let history = useHistory()

	const [ newUser, setNewUser ] = useState({
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

	const handleSubmit = (e, newUser) => {
		e.preventDefault()
		console.log('This is newUser in the Login.js handleSubmit: ', newUser)
		axios
		.post(`${BASE_URL}`)
		history.replace(`/mainUI/${newUser.id}`)
	}

	return (
		<div className='login-form-wrapper'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<label htmlFor='username'>
					Enter Username
					<input
						name='name'
						type='text'
						value={newUser.name}
						placeholder='username'
						onChange={handleChange}
					/>
				</label>

				<label htmlFor='password'>
					Enter Password
					<input
						name='password'
						type='text'
						value={newUser.password}
						placeholder='password'
						onChange={handleChange}
					/>
				</label>
				<button onClick={e => handleSubmit(e)} className='auth-button'>
					Log In
				</button>
			</form>
			s{' '}
		</div>
	)
}

export default Login
