import React, { useState } from 'react'

import axios from 'axios'

import { useHistory } from 'react-router-dom'

const Register = props => {
	// set the base Auth URL for API calls
	const BASE_URL = 'https://essential2us.herokuapp.com/'

	// Hook into history object to push once form submitted
	const history = useHistory()

	// Saving JSON Web Token to local State
	const [ token, setToken ] = useState('')

	// save user object to local state to send off to API
	const [ user, setUser ] = useState({
		username: '',
		password: '',
	})

	const handleChange = e => {
		e.preventDefault()
		const userName = e.target.name.toString().toLowerCase()
		const pwd = e.target.value.toString().toLowerCase()
		setUser({
			username: userName,
			password: pwd,
		})
		console.log('user in handleChange: ', user)
		return user
	}

	const handleSubmit = () => {
		axios
			.post(`${BASE_URL}/register`, user)
			.then(res => {
				console.log('Response from API: ', res)
				setToken(localStorage.getItem('token'))
				console.log('JWT in Register handleSubmit: ', token)
			})
			.catch(err => console.log('ERROR: Data not returned from API ', err))
		history.push(`/`)
	}

	const handleClick = e => {
		e.preventDefault()
		history.push('/login')
	}

	return (
		<div className='auth-form-wrapper'>
			<form onSubmit={handleSubmit} className='auth-form'>
				{/* Create semantic labels and field names for the values needed to register a new user */}

				<label htmlFor='username'>Enter Username: </label>
				<input name='username' type='text' value={user.name} placeholder='username' onChange={handleChange} />

				<label htmlFor='password'>Enter Password: </label>
				<input
					name='password'
					type='text'
					value={user.password}
					placeholder='password'
					onChange={handleChange}
				/>

				<button onClick={handleSubmit} className='auth-button'>
					Sign Up
				</button>
				<button className='auth-button' onClick={e => handleClick(e)}>
					Back to login
				</button>
			</form>
		</div>
	)
}

export default Register
