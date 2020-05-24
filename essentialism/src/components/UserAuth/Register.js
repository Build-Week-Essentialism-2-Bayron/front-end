import React, { useState } from 'react'

import { useHistory, Link } from 'react-router-dom'

const Register = props => {
	const history = useHistory()

	const [ newUser, setNewUser ] = useState({
		id: null,
		name: '',
		password: '',
		type: '',
	})

	const handleChange = e => {
		setNewUser({
			...newUser,
			[e.target.name]: e.target.value,
		})
		console.log(newUser)
	}

	const handleSubmit = e => {
		e.preventDefault()

		history.push(`/`)
	}

	// const checkPrevState = (newUser, prevUser) => {
	//   setPrevUser(props.user);
	//   if (prevUser.username === newUser.username) {
	//     setMessage("User already exists in database");
	//   } else if (prevUser.password === newUser.password) {
	//     setMessage("Password already exists in database");
	//   } else return handleSubmit(newUser);
	// = () => {
	//   checkPrevState();
	// };

	return (
		<div className='auth-form-wrapper'>
			<h1>Essentialism</h1>
			<h2>Simplify Your Life</h2>
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
					<option id='placeholder'>Register As...</option>
					<option>seeker</option>
					<option>company</option>
				</select>

				<button onClick={handleSubmit} className='submit-button'>
					Sign Up
				</button>
				<Link to='/'>Back to login</Link>
			</form>
		</div>
	)
}

export default Register
