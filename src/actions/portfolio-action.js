// request past portfolio data
const REQUEST_PORTFOLIO_HISTORY = 'REQUEST_PORTFOLIO_HISTORY';
export function requestPortfolioHistory() {
	return function(dispatch) {
		const getPortfolioHistory = axios.get('')
			.then(response => {
				dispatch(receivePortfolioHistory(response.data));
			})
			.catch(error => console.log(error));
	}
}
// receive past portfolio data
const RECEIVE_PORTFOLIO_HISTORY = 'RECEIVE_PORTFOLIO_HISTORY';
export function receivePortfolioHistory(portfolioHistoryData) {
	return {
		type: RECEIVE_PORTFOLIO_HISTORY,
		payload: portfolioHistoryData
	}
}

const REQUEST_PORTFOLIO_UPDATE = 'REQUEST_PORTFOLIO_UPDATE'
export function requestPortfolioUpdate() {
	return function (dispatch) {
		const patchRequestPortfolioUpdate = axios.patch('')
			.then(response => {
				dispatch(announcePortfolioUpdateCompletion(response.data))
			})
			.catch(error => console.log(error));
	}
}

const ANNOUNCE_PORTFOLIO_UPDATE_COMPLETION = 'ANNOUNCE_PORTFOLIO_UPDATE_COMPLETION'
export function announcePortfolioUpdateCompletion(currentTransactionData) {
	return {
		type: ANNOUNCE_TRANSACTION_POST_TO_PORTFOLIO,
		payload: currentTransactionData
	}
}

const REQUEST_CURRENT_PORTFOLIO_DATA = 'REQUEST_CURRENT_PORTFOLIO_DATA';
export function requestCurrentPortfolioData() {
	return function (dispatch) {
		const getRequestCurrentPortfolioData = axios.get('')
			.then(response => {
				dispatch(receiveCurrentPortfolioData(response.data))
			})
			.catch(error => console.log(error));
	}
}

const RECEIVE_CURRENT_PORTFOLIO_DATA = 'RECEIVE_CURRENT_PORTFOLIO_DATA';
export function receiveCurrentPortfolioData(currentPortfolioData) {
	return {
		type: RECEIVE_CURRENT_PORTFOLIO_DATA,
		payload: currentPortfolioData
	}
}

const REQUEST_HISTORICAL_PORTFOLIO_STOCK_DATA = 'REQUEST_HISTORICAL_STOCK_DATA';
export function requestHistoricalPortfolioStockData() {}

const RECEIVE_HISTORICAL_PORTFOLIO_STOCK_DATA = 'RECEIVE_HISTORICAL_STOCK_DATA';
export function receiveHistoricalPortfolioStockData(historicalPortfolioStockData) {
	return function (dispatch) {
		
	}
}

const CALCULATE_PORTFOLIO_VALUE_CHANGE = 'CALCULATE_PORTFOLIO_VALUE_CHANGE';
export function calculatePortfolioValueChange() {}