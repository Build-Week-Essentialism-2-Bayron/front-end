import React, { useState } from 'react'

// import Spinner from '../Spinner'

import axios from 'axios'

import { useHistory } from 'react-router-dom'

const Login = () => {
	const BASE_URL = 'https://essential2us.herokuapp.com/'

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
		axios
			.post(`${BASE_URL}`, newUser)
			.then(res => {
				console.log('API response in Login: ', res)
				localStorage.setItem('token', res.data)
				history.replace('/')
			})
			.catch(err => console.log('Error: data not returned from api.', err))
	}

	return (
		<div className='auth-form-wrapper'>
			<form onSubmit={handleSubmit} className='auth-form'>
				<label htmlFor='username'>
					Enter Username
					<input name='name' value={newUser.name} placeholder='username' onChange={handleChange} />
				</label>

				<label htmlFor='password'>
					Enter Password
					<input name='password' value={newUser.password} placeholder='password' onChange={handleChange} />
				</label>
				<button className='auth-button'>Log In</button>
			</form>
		</div>
	)
}

export default Login
