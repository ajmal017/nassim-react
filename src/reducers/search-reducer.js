import { 
	REQUEST_SYMBOLS_LIST,
	RECEIVE_SYMBOLS_LIST,
	REDIRECT_TO_STOCK_SYMBOL 
} from '../actions/search-action';

const initialState = {
	reducerSymbolsList: [],
	isFetching: false
}

export const searchReducer = (state=initialState, action) => {
	switch(action.type) {
		case REQUEST_SYMBOLS_LIST:
			console.log('Execute `receiveSymbolsList` in Action.')
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_SYMBOLS_LIST:
			return Object.assign({}, state, {
				isFetching: false,
				reducerSymbolsList: action.payload
			});
		case REDIRECT_TO_STOCK_SYMBOL:
			// do something
			return Object.assign({}, state, {});
		default:
			return state;
	}
}