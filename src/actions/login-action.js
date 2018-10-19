import axios from 'axios';
import ReduxThunk from 'redux-thunk';

// define actions
const MAKE_LOGIN_POST_REQUEST = 'MAKE_LOGIN_POST_REQUEST';
// export action function
export function makeLoginPostRequest(loginRequestData) {
	return function (dispatch) {
		axios.post('http://localhost:8080/auth/login', loginRequestData)
		.then(res => {
			dispatch({
				type: RECEIVE_RESPONSE_FROM_LOGIN_POST_REQUEST,
				payload: res.data
			})
		})
		.catch(err => console.log(err));
	}
}

export const RECEIVE_RESPONSE_FROM_LOGIN_POST_REQUEST = 'RECEIVE_RESPONSE_FROM_LOGIN_POST_REQUEST';
export function receiveResponseFromLoginPostRequest(loginRequestData) {
	return {
		type: RECEIVE_RESPONSE_FROM_LOGIN_POST_REQUEST,
		payload: loginRequestData
	}
}