import { createStore, combineReducers, applyMiddleware } from 'redux';
// Import Reducers
import { transactionReducer } from './reducers/transaction-reducer';
import { stockReducer } from './reducers/stock-reducer';
import { searchReducer } from './reducers/search-reducer';
import thunkMiddleware from 'redux-thunk';

// Create Store and combine all Reducers
const rootReducer = combineReducers({
	//accountReducer: accountReducer,
	searchReducer: searchReducer,
	//stockReducer: stockReducer,
	transactionReducer: transactionReducer
});

// Store States of Reducers
// Set up middleware
const Store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// store.getState() returns current State
// store.dispatch() dispatches Action and trigger Reducers
// Allows Component to access anything in Store by store.transaction, store.account, store.stock, etc.

// Export Store for use
export default Store;