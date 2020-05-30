import React, { useState } from 'react'

import { userRegister } from '../../redux/actions/auth'

import { connect } from 'react-redux'

import { useHistory } from 'react-router-dom'

const Register = ({ userRegister }) => {
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

	const handleSubmit = () => {
		userRegister(newUser)
		console.log('User register in Register component: ', newUser)
		history.replace(`/login`)
	}

	return (
		<div className='auth-form-wrapper'>
			<form onSubmit={handleSubmit} className='auth-form'>
				{/* Create semantic labels and field names for the values needed to register a new newUser */}

				<label htmlFor='username'>
					Enter Username:
					<input
						name='username'
						type='text'
						// value={newUser.name}
						placeholder='username'
						onChange={handleChange}
					/>
				</label>

				<label htmlFor='password'>
					Enter Password:
					<input
						name='password'
						type='password'
						// value={newUser.password}
						placeholder='password'
						onChange={handleChange}
					/>
				</label>

				<button className='auth-button' type='submit'>
					Sign Up
				</button>
			</form>
		</div>
	)
}

export default connect(null, { userRegister })(Register)
