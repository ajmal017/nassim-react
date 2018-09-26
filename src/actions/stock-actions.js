import axios from 'axios';
import ReduxThunk from 'redux-thunk';


// DISPLAY_DATA
// REQUEST_TRANSACTION_EXECUTION

export const BUY_STOCK = 'BUY_STOCK';
export function buyStock(symbol, buyRequest) {
	return {
		type: BUY_STOCK,
		symbol: buyRequest.symbol,
		name: buyRequest.name,
		price: buyRequest.price,
		quantity: buyRequest.quantity,
		totalValue: buyRequest.totalValue
	}
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

export function shouldExecuteBuy(buyRequest, account) {
	// validate enough account.cash to buy totalValue
	const cash = account.cash
	if (buyRequest.totalValue > account.cash) {
		return false
	} else {
		return true
	}
}
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

// Thunk
/*
export function executeBuyIfValidated(buyRequest) {
	if (shouldExecuteBuy(getState(), buyRequest)) {
		return dispatch(executeBuy(buyRequest))
	} else {
		return Promise.resolve()
	}
}
export function executeSellIfValidated() {}
*/