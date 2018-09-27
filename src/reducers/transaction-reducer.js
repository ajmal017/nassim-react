// Import Actions
import { 
	REQUEST_TRANSACTION_HISTORY,
	RECEIVE_TRANSACTION_HISTORY,
	// RECEIVE_TRANSACTION_REQUEST,
	// VALIDATE_TRANSACTION_REQUEST,
	EXECUTE_BUY_TRANSACTION,
	EXECUTE_SELL_TRANSACTION
	// REQUEST_TRANSACTION_HISTORY
	// ANNOUNCE_TRANSACTION_COMPLETION
} from "../actions/transaction-actions";

// Define initial State
const initialState = {
	transactions: { // key name is arbitrary
		isFetching: false
	},
	currentTransactionRequest: ''
}
// Wrap all Actions in Reducer
// https://redux.js.org/advanced/asyncactions
export const transactionReducer = (state=initialState, action) => { // Define State before entering Reducer
	switch(action.type) {
		case REQUEST_TRANSACTION_HISTORY:
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_TRANSACTION_HISTORY:
			return Object.assign({}, state, {
				isFetching: false,
			});
		case EXECUTE_BUY_TRANSACTION:
			console.log('Execute `Buy` transaction inside Reducer.');
			return Object.assign({}, state, {
				currentTransactionRequest: action.payload
			});
		case EXECUTE_SELL_TRANSACTION:
			console.log('Execute `Sell` transaction inside Reducer.');
			return Object.assign({}, state, {
				currentTransactionRequest: action.payload
			})
		case RECORD_TRANSACTION_HISTORY:
			console.log(action.payload);
			return {...state, ...action.payload};
		default: // if no actions are taken
			return state;
	}
}

// Dispatching Actions
// ??? Where do I `dispatch` these declarative actions? in Actions using thunk
// ??? Where do I place the functions that I use to actually perform these actions? Actions
// ??? where does the data transformation actually occur? Actions
// ??? Should I combine all Action Creators in a file? yes
// 			See http://devguides.io/redux/actions and search for `Action creators`