import ReduxThunk from 'redux-thunk';
import axios from 'axios';

// ??? What's the difference between the behavior of each of the following actions?
// First one is declared as a function assigned to a constant
// Second one is declared as an object
// Third one is declared as a function
export const REQUEST_TRANSACTION_HISTORY = 'REQUEST_TRANSACTION_HISTORY';
export const requestTransactionHistory = (data) => ({
	type: REQUEST_TRANSACTION_HISTORY,
	payload: data
});

export const RECEIVE_TRANSACTION_HISTORY = 'RECEIVE_TRANSACTION_HISTORY';
export const receiveTransactionHistory = {
	type: RECEIVE_TRANSACTION_HISTORY,
	payload: 'DATA'
}

// RECEIVE_TRANSACTION_REQUEST
// VALIDATE_TRANSACTION_REQUEST
// EXECUTE_BUY_TRANSACTION
// EXECUTE_SELL_TRANSACTION
// ANNOUNCE_TRANSACTION_COMPLETION

export const RECORD_TRANSACTION_IN_HISTORY = 'RECORD_TRANSACTION_IN_HISTORY';
export function postTransaction(data) {
	return {
		type: RECORD_TRANSACTION_IN_HISTORY,
		payload: data
	}
}

// https://redux.js.org/advanced/asyncactions
// ??? Why the extra third step in receiving data?
export function fetchTransactionHistory(param) {
	return function (dispatch) {
		dispatch(requestTransactionHistory(params))
		return axios.get('http://localhost:8080/transaction/all')
			.then(response => response.data)
			.catch(error => console.log(error))
			.then(data => dispatch(receiveTransactionHistory(data)))
	}
}
