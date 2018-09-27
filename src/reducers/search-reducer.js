import { GET_SYMBOLS_LIST, GO_TO_STOCK } from '../actions/search-actions';

const initialState = {
	symbolsList: ''
}

export const searchReducer = (state=initialState, action) => {
	switch(action.type) {
		case GET_SYMBOLS_LIST:
			console.log('Execute `getSymbolsList` in Action.')
			return Object.assign({}, state, {
				symbolsList: action.payload
			});
		case GO_TO_STOCK:
			// do something
			return Object.assign({}, state, {});
		default:
			return state;
	}
}