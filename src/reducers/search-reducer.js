import { GET_SYMBOLS_LIST, GO_TO_STOCK } from '../actions/search-actions';

const initialState = {}

export const searchReducer = (state=initialState, action) => {
	switch(action.type) {
		case GET_SYMBOLS_LIST:
			// do something
			return Object.assign({}, state, {});
		case GO_TO_STOCK:
			// do something
			return Object.assign({}, state, {});
		default:
			return state;
	}
}