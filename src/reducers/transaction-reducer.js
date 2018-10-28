// Import Actions
import { 
	REQUEST_TRANSACTION_HISTORY,
	RECEIVE_TRANSACTION_HISTORY,
	// RECEIVE_TRANSACTION_REQUEST,
	// VALIDATE_TRANSACTION_REQUEST,
	EXECUTE_BUY_TRANSACTION,
	EXECUTE_SELL_TRANSACTION,
	ANNOUNCE_TRANSACTION_COMPLETION
	// ANNOUNCE_TRANSACTION_COMPLETION
} from "../actions/transaction-action";

// Define initial State
const initialState = {
	transactions: { // key name is arbitrary
		isFetching: false,
	},
	currentTransactionRequest: '',
	reducerTransactionData: []
}
// Wrap all Actions in Reducer
// https://redux.js.org/advanced/asyncactions
export const transactionReducer = (state=initialState, action) => { // Define State before entering Reducer
	switch(action.type) {
		case REQUEST_TRANSACTION_HISTORY:
			debugger
			return Object.assign({}, state, {
				isFetching: true
			});
		case RECEIVE_TRANSACTION_HISTORY:
			debugger
			return Object.assign({}, state, {
				isFetching: false,
				reducerTransactionData: action.payload
			});
		case ANNOUNCE_TRANSACTION_COMPLETION:
			//debugger
			return Object.assign({}, state, {
				currentTransactionRequest: action.payload
			});
		case EXECUTE_BUY_TRANSACTION:
			console.log('Execute `Buy` transaction inside Reducer.');
			return Object.assign({}, state, {
				currentTransactionRequest: action.payload
			})
		case EXECUTE_SELL_TRANSACTION:
			console.log('Execute `Sell` transaction inside Reducer.');
			return Object.assign({}, state, {
				currentTransactionRequest: action.payload
			})
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