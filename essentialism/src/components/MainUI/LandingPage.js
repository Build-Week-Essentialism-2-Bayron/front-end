import React, { useState } from 'react'
import Register from '../UserAuth/Register'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'

const LandingPage = () => {
	let state = false

	const [ hideLinks, setHideLinks ] = useState(state)

	const handleClick = () => {
		state = !state
		setHideLinks(state)
	}

	return (
		<div className='landing-page'>
			<h1>ESSENTIALISM</h1>

			{hideLinks ? (
				<>
					<Fade duration={500}>
				<div className='main-ui'>
						<Link to='/mainUI'>Profile</Link>
						<Link to='/'>Log Out</Link>
					<Register />
				</div>
					</Fade>
					<h4 onClick={handleClick}>Back</h4>
					</>
			) : (
				<h4 onClick={handleClick}>Click Here to Start</h4>
			)}
		</div>
	)
}

export default LandingPage
