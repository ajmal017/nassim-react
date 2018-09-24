// ??? What's the difference between the behavior of each of the following actions?
// First one is declared as a function assigned to a constant
// Second one is declared as an object
// Third one is declared as a function

export const REQUEST_TRANSACTIONS = 'REQUEST_TRANSACTIONS';
export const requestTransactions = (data) => ({
	type: REQUEST_TRANSACTIONS,
	payload: data
});

export const RECEIVE_TRANSACTIONS = 'RECEIVE_TRANSACTIONS';
export const receiveTransactions = {
	type: RECEIVE_TRANSACTIONS,
	payload: 'DATA'
}

// ??? This actually occurs in Stock.js
// Should I put this action in stock-actions.js?
export const POST_TRANSACTION = 'POST_TRANSACTION';
export function postTransaction(data) {
	return {
		type: POST_TRANSACTION,
		payload: data
	}
}