import React, { useState, useEffect } from 'react'

import axios from 'axios'

import { useHistory } from 'react-router-dom'

const Register = props => {
	const BASE_URL = 'https://essential2us.herokuapp.com/'

	const history = useHistory()

	const [ newUser, setNewUser ] = useState({
		username: '',
		password: '',
	})

	const handleChange = e => {
		e.preventDefault()
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		})
		console.log('newUser in handleChange: ', newUser)
	}

	const handleSubmit = () => {
		axios
			.post(`${BASE_URL}/register`, newUser)
			.then(res => {
				setNewUser(res.data)
				console.log('Response from API: ', res)
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
				<input
					name='username'
					type='text'
					value={newUser.name}
					placeholder='username'
					onChange={handleChange}
				/>

				<label htmlFor='password'>Enter Password: </label>
				<input
					name='password'
					type='text'
					value={newUser.password}
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
