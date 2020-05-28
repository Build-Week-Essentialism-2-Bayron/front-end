import match from 'conditional-expression'
import axios from 'axios'
import { types } from './reducer'

const BASE_URL = 'https://essential2us.herokuapp.com/'

export const applyMiddleware = dispatch => action =>
	dispatch(action) ||
	match(action.type)
		.equals(types.TRIGGER_ACTION)
		.then(() => {
			axios
				.get(`${BASE_URL}`)
				.then(res => {
					dispatch({
						type: types.DIFFERENT_ACTION,
						payload: res.data.response,
					})
				})
				.catch(err => console.log('ERROR: ', err))
		})
		.else(null)
