import {
	REQUEST_STOCK_DATA,
	RECEIVE_STOCK_DATA
} from '../actions/stock-actions';

const initialState = {
	reducerStockData: [],
	isFetching: true,
	isFetched: false
}

export const stockReducer = (state=initialState, action) => {
	switch(action.type) {
		case REQUEST_STOCK_DATA:
			console.log('Execute `requestStockData` in Action.')
			return Object.assign({}, state, {
				isFetched: false,
				isFetching: true
			});
		case RECEIVE_STOCK_DATA:
			return Object.assign({}, state, {
				isFetching: false,
				isFetched: true,
				reducerStockData: action.payload
			});
		default:
			return state;
	}
}