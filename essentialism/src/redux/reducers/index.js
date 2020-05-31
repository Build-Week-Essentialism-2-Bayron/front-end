import { USER_REGISTER_SUCCESS, USER_LOGIN_SUCCESS, USER_FAILURE, USER_LOGOUT } from '../actions/auth'

export const initialState = {
	isLoading: false,

	isLoggedIn: false,

	user: {},

	message: '',

	values: [],

	projects: [],
}

export const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		case USER_REGISTER_SUCCESS:
			return {
				...state,
				message: action.payload.message,
				isLoading: false,
				user: {
					id: action.payload.id,
				},
			}

		case USER_LOGIN_SUCCESS:
			return {
				...state,
				message: action.payload.message,
				isLoading: false,
				isLoggedIn: true,
			}

		case USER_FAILURE:
			return {
				...state,
				isLoading: false,
				message: `Error: ${action.payload.err}`,
			}

		case USER_LOGOUT:
			return initialState

		default:
			return state
	}
}
