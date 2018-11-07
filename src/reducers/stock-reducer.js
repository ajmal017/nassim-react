import {
	REQUEST_STOCK_DATA,
	RECEIVE_STOCK_DATA
} from '../actions/stock-action';

const initialState = {
	reducerStockData: [],
	fetching: false,
	isFetched: false
}

export const stockReducer = (state=initialState, action) => {
	switch(action.type) {
		case REQUEST_STOCK_DATA:
			return Object.assign({}, state, {
				fetching: true,
				isFetched: false,
				reducerRequestStockData: action.payload
			})
		case RECEIVE_STOCK_DATA:
			return Object.assign({}, state, {
				fetching: false,
				isFetched: true,
				reducerStockData: action.payload
			});
		default:
			return state;
	}
}