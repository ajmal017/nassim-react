// Import Actions
import { REQUEST_TRANSACTIONS, RECEIVE_TRANSACTIONS, POST_TRANSACTION } from "../actions/transaction-actions";

// Define initial State
const initialState = {
	transactions: { // key name is arbitrary
		isFetching: false,
		items: []
	}
}
// Wrap all Actions in Reducer
// https://redux.js.org/advanced/asyncactions
export const transactionReducer = (state=initialState, action) => { // Define State before entering Reducer
	switch(action.type) {
		case REQUEST_TRANSACTIONS:
			// ??? Where does the API call occur?
			// axios.get('http://localhost:8080/transaction/all')
			// store data in payload
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_TRANSACTIONS:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.payload
			});
		case POST_TRANSACTION:
			// ??? Where does this API call occur?
			// axios.post('http://localhost:8080/transaction/all')
			console.log(action.payload);
			return {...state, ...action.payload};
		default: // if no actions are taken
			return state;
	}
}
// export default transactionReducer;
// ??? Why does it not work when exporting at the end?
// ??? Why does it only work when doing `export const transactionReducer`

// Dispatching Actions
// ??? Where do I `dispatch` these declarative actions?
// ??? Where do I place the functions that I use to actually perform these actions?
// ??? where does the data transformation actually occur?
// ??? Should I combine all Action Creators in a file? 
// 			See http://devguides.io/redux/actions and search for `Action creators`