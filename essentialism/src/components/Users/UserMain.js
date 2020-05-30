import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const UserMain = () => {
	// TODO: Re-Learn HOC
	// HOC usage need brush up on.

	return (
		<div className='user-profile-container'>
			<nav>
				<h3>Essentialism</h3>
				<div className='user-links'>
					<Link to='/user-values'>Matches</Link>
					<Link to='/mainUI'>My-Home</Link>
					<Link to='/'>Log Out</Link>
				</div>
			</nav>

			<div className='user-profile'>
				<h1>Your Profile</h1>

				<div className='user-profile-info' />
			</div>
		</div>
	)
}

export default UserMain
