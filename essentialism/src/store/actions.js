// keeping action types in a single object
const types = {
	TRIGGER_ACTION: 'TRIGGER_ACTION',
}

export const registerUser = newUser => dispatch => ({
    console.log('newUser at the userRegister action creator: ', newUser),
    dispatch({
type: types.USER_REGISTER_START,
newUser
    })
    axios
})
