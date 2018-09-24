import { BUY_STOCK, SELL_STOCK } from '../actions/stock-actions';

const initialState = {}
export const stockReducer = (state=initialState, action) => {
	switch(action.type) {
		case BUY_STOCK:
			// do something
			return Object.assign({}, state, {});
		case SELL_STOCK:
			// do something
			return Object.assign({}, state, {});
		default:
			return state;
	}
}