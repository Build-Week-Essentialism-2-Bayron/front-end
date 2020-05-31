import axios from 'axios'

// action type for deleting a user

export const DELETE_USER_START = 'DELETE_USER_START'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'

const BASE_URL = 'https://essential2us.herokuapp.com'

export const deleteUser = (ID, token) => dispatch => {
	console.log('userID variable in actions: ', ID)
	console.log('token variable in actions: ', token)
	dispatch({
		type: DELETE_USER_START,
	})
	axios
		.delete(`${BASE_URL}/users/${ID}`, { headers: { Authorization: `Bearer ${token}` } })
		.then(res => {
			dispatch({
				type: DELETE_USER_SUCCESS,
				payload: `Success, ${res.data} user deleted`,
			})
		})
		.catch(err => {
			console.log('DELETION ERROR: ', err)
		})
}
