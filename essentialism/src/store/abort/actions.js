// keeping action types in a single object

import axios from 'axios'

export const USER_REGISTER_START = 'USER_REGISTER_START'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export const registerUser = newUser => dispatch => {
	console.log('newUser at teh userReg action creator: ', newUser)
	dispatch({
		type: USER_REGISTER_START,
		newUser,
	})
	axios
		.post(`${BASE_URL}/register, newuser`)
		.then(res => {
			localStorage.setItem('userId', res.data.id)
			dispatch({
				type: USER_REGISTER_SUCCESS,
				payload: res.data,
			})
			console.log('result of user registration: ', res.data)
		})
		.catch(err => {
			console.log('Registration Error: ', err.message)
			dispatch({
				type: USER_FAILURE,
				payload: err.message,
			})
		})
}
