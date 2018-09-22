// Import Actions
import { GET_ALL_TRANSACTIONS, CREATE_TRANSACTION } from "../actions/transaction-actions";

// Define initial State
const initialState = {
	transactions: []
}
// Wrapp all Actions in Reducer
export const transactionReducer = (state=initialState, action) => { // Define State before entering Reducer
	switch(action.type) {
		case GET_ALL_TRANSACTIONS:
			// axios.get('http://localhost:8080/transaction/all')
			// store data in payload
			console.log(action.payload);
			return state, action.payload;
		case CREATE_TRANSACTION:
			// axios.post('http://localhost:8080/transaction/all')
			console.log(action.payload);
			return state, action.payload;
		default: // if no actions are taken
			return state;
	}
}
// export default transactionReducer;
// ??? Why does it not work when exporting at the end?
// ??? only works when doing `export const transactionReducer`