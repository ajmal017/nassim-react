import {
	REQUEST_STOCK_DATA,
	RECEIVE_STOCK_DATA
} from '../actions/stock-action';

const initialState = {
	reducerStockData: [],
	isFetched: false
}

export const stockReducer = (state=initialState, action) => {
	switch(action.type) {
		case RECEIVE_STOCK_DATA:
			return Object.assign({}, state, {
				isFetched: true,
				reducerStockData: action.payload
			});
		default:
			return state;
	}
}