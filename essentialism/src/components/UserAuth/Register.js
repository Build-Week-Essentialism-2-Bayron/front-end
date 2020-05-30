import React, { useState } from 'react'

import { userRegister } from '../../redux/actions/auth'

import { connect } from 'react-redux'

import { useHistory } from 'react-router-dom'

const Register = props => {
	// Hook into history object to push once form submitted
	const history = useHistory()

	// save newUser object to local state to send off to API
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
		return newUser
	}

	const handleSubmit = e => {
		props.userRegister(newUser)
		console.log('User register in Register component: ', newUser)
		history.push(`/`)
	}

	const handleClick = () => {
		history.push('/login')
	}

	return (
		<div className='auth-form-wrapper'>
			<form onSubmit={handleSubmit} className='auth-form'>
				{/* Create semantic labels and field names for the values needed to register a new newUser */}

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
					type='password'
					value={newUser.password}
					placeholder='password'
					onChange={handleChange}
				/>

				<input type='submit' className='auth-button'>
					Sign Up
				</input>
			</form>
		</div>
	)
}

export default connect(null, { userRegister })(Register)
