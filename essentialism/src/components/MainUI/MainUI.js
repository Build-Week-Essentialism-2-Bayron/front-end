import React, { useState } from 'react'
import Register from '../UserAuth/Register'
import Login from '../UserAuth/Login'
import { Link } from 'react-router-dom'

const MainUI = () => {
	let state = false

	const [ hideLinks, setHideLinks ] = useState(state)

	const handleClick = () => {
		state = !state
		setHideLinks(state)
	}

	const token = localStorage.getItem('token')
	console.log('Auth Token in MainUI', token)

	return (
		<div className='landing-page'>
			<h1>ESSENTIALISM</h1>

			{hideLinks ? (
				<>
				<div className='main-ui'>
						<Link to='/mainUI'>Profile</Link>
						<Link to='/'>Log Out</Link>
					<Register />
					<Login />
				</div>
					<h4 onClick={handleClick}>Back</h4>
					</>
			) : (
				<h4 onClick={handleClick}>Click Here to Start</h4>
			)}
		</div>
	)
}

export default MainUI
