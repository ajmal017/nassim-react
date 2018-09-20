import { createStore, combineReducers } from 'redux';
import { transactionReducer } from './reducers/transaction-reducer';

// Create the store and combine all the reducers
const rootReducer = combineReducers({
	//account: accountReducer,
	//stock: stockReducer,
	transaction: transactionReducer
});
// stores states of reducers
const store = createStore(rootReducer);

export default store;