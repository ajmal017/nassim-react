// import actions
import {
	MAKE_REGISTER_POST_REQUEST,
	RECEIVE_RESPONSE_FROM_REGISTER_POST_REQUEST
} from '../actions/register-action.js';

// define initial state
const initialState = {
	reducerRegisterData: [],
	isFetched: false
}
// how does `initialState` know what to put in `reducerRegisterData`?

// ??? what's going on in (state=initialState, action)?
// ??? how is reducer accessing Component `this`

export const registerReducer = (state=initialState, action) => {
	switch(action.type) {
		case RECEIVE_RESPONSE_FROM_REGISTER_POST_REQUEST:
		// this is where initialState gets tranformed
			return Object.assign({}, state, {
				isFetched: true,
				reducerRegisterData: action.payload
			})
		default:
			return state;
	}
}
// define initial state
// define and export reducer function as a series of switch/case actions
// fill in initial state with data that action needs to use