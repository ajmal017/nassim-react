# Redux Notes
Based on this [tutorial](http://jakesidsmith.com/blog/post/2017-11-18-redux-and-react-an-introduction/).

## Recipe for Redux with Thunk
1. In `Reducer`:
    - Import `Action`s
    - Define `initialState`
    - Define `export` `Reducer` function as a series of `switch`/`case` `Action`s
    - Fill in `initialState` with whatever data `Action`s need to use
2. In `Store`:
    - Import `Reducer`s, `combineReducers`, `createStore`, `applyMiddleware`, `thunk`
    - `combineReducers()` all `Reducer`s
    - `createStore` with params `rootReducer` and `applyMiddleware(thunk)`
    - Export `Store`
3. In `Index`:
    - Import `Provider`
    - Stick `<Provider>`, with `store` attribute value `Store`, inside `ReactDOM.render`
4. In `Action`:
    - Define `ACTION` in upper case, with `type` and some stuffing
    - Define `export` function `actionFunction` under each `ACTION` with same name camel case
    - Inside `actionFunction`, return an anonymous function with `dispatch` as param
    - Inside anonymous function, make an async call
    - Inside the `then` promise of the async call, `dispatch` that `actionFunction`
5. In `Component`:
    - Import `actionFunction`, `connect`
    - `mapStateToProps()` the `rootReducer` state from `Store`
    - Return an object with whatever key and the `Store.rootReducer.Reducer`
    - `connect` `mapStateToProps` and `actionFunction` with `Component`

## Gory Details (without thunk)
### `Action`
1. Define **`Action`**
2. Export for use in **`Reducer`**
```javascript
// ./src/actions.js
export const GET_TRANSACTIONS = 'GET_TRANSACTIONS';
export const getTransactions = {
    type: GET_TRANSACTIONS,
    payload: []
};
```
### `Reducer`
1. Import **`Action`** definition
2. Define `state`
3. Define **`Reducer`** function
4. Transform `state` in **`Reducer`** function
5. Return `state` and any other data
6. Export **`Reducer`** for use in **`Store`**
```javascript
// ./src.reducers.js
import { GET_TRANSACTIONS } from './src/actions';

const initialState = {};
export const transactionReducer = (state=initialState, action) => {
    switch(action.type) {
        case GET_TRANSACTION:
            axios.get('/transactions')
            return state, action.payload
        default:
            return state
    }
};
```
### `Store`
1. Import **`Reducer`** s
2. Combine **`Reducer`** s
3. Create **`Store`** using the combined **`Reducer`** s
4. Export **`Store`** for use in **`<Provider>`**
```javascript
import { combineReducers, createStore } from 'redux';
import { transactionReducer } from './src/reducers';

const rootReducer = combineReducers({
    transaction: transactionReducer
    // ... other reducers
});
const store = createStore(rootReducer);
export default store;
```
### `Provider`
1. Import **`Provider`** from `react-redux` package
2. Import **`Store`**
3. Import React **`Component`**
4. Call **`Store`** in **`Provider`**; this makes **`Component`** aware of the **`Store`**
```javascript
// ./src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './src/store';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
<Provider store={store}>
	<BrowserRouter>
		<App />
	</BrowserRouter>
</Provider>, document.getElementById('root'));
```
### `Component`
1. Import **`Action`** into **`Component`**
2. Map `state` values and actions to **`Props`**
3. Export the connection
```javascript
import React from 'react';
import { connect } from 'react-redux';
import { getTransactions } from './src/actions';

class TransactionContainer extends React.Component {
    ...
}
// `state.transaction` is from `rootReducer` in store.js
// this component has access to store because it is encapsulated by Provider
const mapStateToProps = (state) => {
    return {
        transaction: state.transaction
        // other values or actions from state
    }
}
export default connect(mapStateToProps, getTransactions)(TransactionContainer);
```