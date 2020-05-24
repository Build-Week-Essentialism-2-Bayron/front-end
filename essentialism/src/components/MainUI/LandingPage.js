import React, { useEffect, useState } from 'react'
// import Login from '../UserAuth/Login'
import { Link } from 'react-router-dom'

const LandingPage = () => {
	const [ updateForm, setUpdateForm ] = useState(false)

	return (
		<div className='landing-page'>
			<h1>ESSENTIALISM</h1>
			<div className={`form ${updateForm ? 'hidden' : ''}`}>
				<Link to='/mainUI'>Profile</Link>
				<Link to='/'>Log Out</Link>
			</div>
		</div>
	)
}

export default LandingPage
