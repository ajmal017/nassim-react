import axios from 'axios';
import thunk from 'redux-thunk';

// define actions
const MAKE_LOGIN_POST_REQUEST = 'MAKE_LOGIN_POST_REQUEST';
// export action function
export function makeLoginPostRequest(loginRequestData) {
	return function (dispatch) {
		axios.post('https://nassim.herokuapp.com/auth/login', loginRequestData)
		.then(res => {
			console.log(`${JSON.stringify(res.data.message)}: ${JSON.stringify(res.data.data.token)}`);
			window.localStorage.setItem('email', res.data.data.email);
			window.localStorage.setItem('userId', res.data.data.userId);
			window.localStorage.setItem('token', res.data.data.token);
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

export const LOGOUT = 'LOGOUT';
export function logOut() {
	debugger
	localStorage.removeItem('email');
	localStorage.removeItem('token');
	localStorage.removeItem('userId');
	return {
		type: LOGOUT
	}
}