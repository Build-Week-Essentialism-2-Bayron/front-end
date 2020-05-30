import {
	USER_REGISTER_START,
	USER_REGISTER_SUCCESS,
	USER_LOGIN_START,
	USER_LOGIN_SUCCESS,
	USER_FAILURE,
} from '../actions/auth'

export const initialState = {
	isLoading: false,

	message: '',

	values: [],

	projects: [],
}

export const rootReducer = (state = initialState, action) => {
	console.log('From the reducer: ', action.type, action.payload)

	switch (action.type) {
		case USER_REGISTER_START:
			return {
				...state,
				message: 'BEGINNING API CALL...',
				isLoading: true,
			}

		case USER_REGISTER_SUCCESS:
			localStorage.setItem('ID', action.payload.id)
			return {
				...state,
				message: `USER SAVED, WELCOME SEEKER ${action.payload.name}`,
				isLoading: false,
				user: action.payload,
			}

		case USER_LOGIN_START:
			return {
				...state,
				message: 'LOGGING IN',
				isLoading: true,
			}

		case USER_LOGIN_SUCCESS:
			return {
				...state,
				message: `USER LOGGED IN, WELCOME USER ${action.payload.name}`,
				isLoading: false,
			}

		case USER_FAILURE:
			return {
				...state,
				isLoading: false,
				message: `Error: ${action.payload.err}`,
			}

		default:
			return state
	}
}
