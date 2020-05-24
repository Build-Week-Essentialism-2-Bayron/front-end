import React from 'react'
// import Spinner from '../Utility/Spinner'

import { Link } from 'react-router-dom'

const UserMain = () => {
	// const handleSave = e => {
	//   const ID = localStorage.getItem("userID");
	//   const id = e.target.value;
	//   console.log(
	//     "This is the value of the target of the event object in SeekerMain.js",
	//     e.target.value
	//   );
	//   const findJob = jobs.filter(job => job.id === id);
	//   setSavedJob(findJob);
	//   addSavedJob(ID, savedJob);
	// };

	// const handleDelete = e => {
	//   e.preventDefault();
	//   const id = e.target.value;
	//   const ID = localStorage.getItem("userID");
	//   const findJob = jobs.filter(job => job.id === id);
	//   const jobId = findJob.id;
	//   console.log(
	//     "This is the value of id in SeekerMain.js handleSave function: ",
	//     jobId
	//   );
	//   deleteJob(ID, jobId);
	// };

	const handleClick = () => {
		const ID = localStorage.getItem('userID')
	}

	return (
		<div className='main-ui-container'>
			<nav>
				<h3>Essentialism</h3>
				<div className='main-ui-nav'>
					<Link to='/user-profile' onClick={handleClick}>
						Profile
					</Link>
					<Link to='/seeker-matches' onClick={handleClick}>
						Matches
					</Link>
				</div>
			</nav>
			{/* {!isLoading ? ( */}
			<div className='main-ui'>
				<h1>Find Jobs</h1>
				<div className='jobs' />
			</div>
			{/* ) : ( */}
			{/* <Spinner /> */}
		</div>
	)
}

export default UserMain
