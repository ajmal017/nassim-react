// import actions
import {
	MAKE_LOGIN_POST_REQUEST,
	RECEIVE_RESPONSE_FROM_LOGIN_POST_REQUEST
} from '../actions/login-action';
// define initial state
const initialState = {
	loginRequestData: [],
	isLoggedIn: false
}
// define export reducer function as switch/case actions
export const loginReducer = (state=initialState, action) => {
	switch(action.type) {
		case RECEIVE_RESPONSE_FROM_LOGIN_POST_REQUEST:
			return Object.assign({}, state, {
				isLoggedIn: true,
				loginRequestData: action.payload
			});
		default:
			return state;
	}
}
// fill in initial state with data that actions use