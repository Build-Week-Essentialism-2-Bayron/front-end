import { types } from './reducer'

export const useActions = (state, dispatch) => ({
	triggerAction: data => dispatch({ type: types.TRIGGER_ACTION, payload: data }),
})
