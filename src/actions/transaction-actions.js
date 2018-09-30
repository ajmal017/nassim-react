import thunk from 'redux-thunk';
import axios from 'axios';

export const REQUEST_TRANSACTION_HISTORY = 'REQUEST_TRANSACTION_HISTORY';
export function requestTransactionHistory() {
	return function (dispatch) {
		const getTransactionHistoryRequest = axios.get(`http://localhost:8080/transaction/all`)
			.then(response => {
				dispatch(receiveTransactionHistory(response.data));
			})
			.catch(error => console.log(error));
	}
};

export const RECEIVE_TRANSACTION_HISTORY = 'RECEIVE_TRANSACTION_HISTORY';
export function receiveTransactionHistory(transactionData) {
	return {
		type: RECEIVE_TRANSACTION_HISTORY,
		payload: transactionData
	}
}

// Backend
// TODO in backend
// (2)buy -> reduce cash in Account
// 	-> add quantity and value in portfolio
// sell -> add to cash in account

// VALIDATE_BUY_REQUEST
function shouldExecuteBuy(buyRequestData, account) {
	// validate enough account.cash to buy totalValue
	const cash = account.cash
	if (buyRequestData.totalValue > account.cash) {
		return false
	} else {
		return true
	}
}

// VALIDATE_SELL_REQUEST
function shouldExecuteSell(sellRequestData, account) {
	// validate enough 
	// account.holding.symbol.quantity
	// OR
	// portfolio.symbol.quantity
	// to sell total quantity
	const stockHolding = account.portfolio.symbol.quantity
	if (stockHolding < sellRequestData.quantity) {
		return false
	} else {
		return true
	}
}

export const EXECUTE_BUY_TRANSACTION = 'EXECUTE_BUY_TRANSACTION';
export function executeBuyTransaction(buyRequestData) {
	console.log('Execute `Buy` transaction inside Action.');
	return function (dispatch) {
		const postBuyTransactionRequest = axios.post('http://localhost:8080/transaction/all', buyRequestData)
			.then(response => {
				dispatch(announceTransactionCompletion(response.data));
			})
			.catch(error => console.log(error))
	}
}

export const ANNOUNCE_TRANSACTION_COMPLETION = 'ANNOUNCE_TRANSACTION_COMPLETION';
export function announceTransactionCompletion(transactionData) {
	return {
		type: ANNOUNCE_TRANSACTION_COMPLETION,
		payload: transactionData
	}
}

export const EXECUTE_SELL_TRANSACTION = 'EXECUTE_SELL_TRANSACTION';
export function executeSellTransaction(sellRequestData) {
	console.log('Execute `Sell` transaction inside Action.')
	return function (dispatch) {
		const postSellTransactionRequest = axios.post('http://localhost:8080/transaction/all', sellRequestData)
		.then(response => {
			dispatch(announceTransactionCompletion(response.data))
		})
		.catch(error => console.log(error))
	}
}