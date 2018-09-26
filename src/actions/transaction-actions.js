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
// EXECUTE_BUY_TRANSACTION -- buy
export function shouldExecuteBuy(buyRequest, account) {
	// validate enough account.cash to buy totalValue
	const cash = account.cash
	if (buyRequest.totalValue > account.cash) {
		return false
	} else {
		return true
	}
}
// EXECUTE_SELL_TRANSACTION -- sell
export function shouldExecuteSell(sellRequest, holdings) {
	// validate enough 
	// account.holding.symbol.quantity
	// OR
	// portfolio.symbol.quantity
	// to sell total quantity
	const stockHolding = holdings.symbol.quantity
	if (stockHolding < sellRequest.quantity) {
		return false
	} else {
		return true
	}
}
// ANNOUNCE_TRANSACTION_COMPLETION

export const EXECUTE_BUY_TRANSACTION = 'EXECUTE_BUY_TRANSACTION';
export function executeBuyTransaction(buyRequestData) {
	debugger
	console.log('Execute `Buy` transaction inside Action.');
	const postTransactionRequest = axios.post('http://localhost:8080/transaction/all', buyRequestData)
		.then(response => {
			return {
				type: EXECUTE_BUY_TRANSACTION,
				payload: response.data
			}
		})
		.catch(error => console.log(error))
	
}

export const SELL_STOCK = 'SELL_STOCK';
export function sellStock(symbol, sellRequest) {
	return {
		type: SELL_STOCK,
		symbol: sellRequest.symbol,
		name: sellRequest.name,
		price: sellRequest.price,
		quantity: sellRequest.quantity,
		totalValue: sellRequest.totalValue
	}
}

export function executeBuy(buyRequest, account) {
	axios.post('http://localhost:8080/transaction/all', {
			date: buyRequest.date,
			type: buyRequest.buy,
			symbol: buyRequest.symbol,
			name: buyRequest.name,
			price: buyRequest.price,
			quantity: buyRequest.quantity,
			totalValue: buyRequest.totalValue
		})
			.then(response => console.log(response))
			.catch(error => console.log(error));
}

export const RECORD_TRANSACTION_IN_HISTORY = 'RECORD_TRANSACTION_IN_HISTORY';
export function postTransaction(data) {
	return {
		type: RECORD_TRANSACTION_IN_HISTORY,
		payload: data
	}
}

// https://redux.js.org/advanced/asyncactions
// ??? Why the extra third step in receiving data?
export function fetchTransactionHistory(params) {
	return function (dispatch) {
		dispatch(requestTransactionHistory(params))
		return axios.get('http://localhost:8080/transaction/all')
			.then(response => response.data)
			.catch(error => console.log(error))
			.then(data => dispatch(receiveTransactionHistory(data)))
	}
}
// TODO
// do a thunk for execute buy transaction
// validation?
