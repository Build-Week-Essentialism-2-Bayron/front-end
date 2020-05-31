import { axiosWithAuth } from '../../components/utils/axiosWithAuth'

// action types for manipulating values list

export const FETCH_VALUES_START = 'FETCH_VALUES_START'
export const FETCH_VALUES_SUCCESS = 'FETCH_VALUES_SUCCESS'
export const FETCH_FAILURE = 'FETCH_FAILURE'

const BASE_URL = 'https://essential2us.herokuapp.com'

// action creator function for fetching a list of values to be displayed when a user selects a drop-down

export const fetchValues = () => dispatch => {
	dispatch({
		type: FETCH_VALUES_START,
	})
	axiosWithAuth()
		.get(`${BASE_URL}/values`)
		.then(res => {
			console.log(res)
			dispatch({
				type: FETCH_VALUES_SUCCESS,
				payload: res.data,
			})
		})
		.catch(err => console.log('Error: ', err))
}
