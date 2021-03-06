import axios from 'axios';
import thunk from 'redux-thunk';

// define actions
// make post request
export const MAKE_REGISTER_POST_REQUEST = 'MAKE_REGISTER_POST_REQUEST';
export function makeRegisterPostRequest(registerRequestData) {
	return function (dispatch) {
    axios.post('https://nassim.herokuapp.com/auth/register', registerRequestData)
    .then(res => {
      console.log(JSON.stringify(res.data.message));
      // dispatch response to reducer
      dispatch({
        type: RECEIVE_RESPONSE_FROM_REGISTER_POST_REQUEST,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
  }
}

// receive response
export const RECEIVE_RESPONSE_FROM_REGISTER_POST_REQUEST = 'RECEIVE_RESPONSE_FROM_REGISTER_POST_REQUEST';

/*
// isn't necessary because it is dispatched in the request function
export function receiveResponseFromRegisterPostRequest(registrationData) {
  return {
    type: RECEIVE_RESPONSE_FROM_REGISTER_POST_REQUEST,
    payload: registrationData
  }
}
*/