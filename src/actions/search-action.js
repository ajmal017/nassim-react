import thunk from 'redux-thunk'
import axios from 'axios';

export const REQUEST_SYMBOLS_LIST = 'REQUEST_SYMBOLS_LIST';
export function requestSymbolsList() {
	return function (dispatch) {
		const getSymbolsList = axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
			.then(response => {
				dispatch(receiveSymbolsList(response.data));
			})
			.catch(error => console.log(error));
	}
}

export const RECEIVE_SYMBOLS_LIST = 'RECEIVE_SYMBOLS_LIST';
export function receiveSymbolsList(actionSymbolsList) {
	return {
		type: RECEIVE_SYMBOLS_LIST,
		payload: actionSymbolsList
	}
}

export const REDIRECT_TO_STOCK_SYMBOL = 'REDIRECT_TO_STOCK_SYMBOL';
export function redirectToStockSymbol() {
	
}