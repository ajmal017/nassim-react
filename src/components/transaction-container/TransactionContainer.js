// Container component?
import React from 'react';
import './TransactionContainer.css';
import Transaction from '../transaction/Transaction';
import { connect } from 'react-redux';
import { requestTransactionHistory } from '/Users/Leo/nassim-react/src/actions/transaction-action';

class TransactionContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			transactions: [],
			account: localStorage.getItem('userId')
			// ??? is this being used at all?
		}
	}

	componentDidMount() {
		this.props.requestTransactionHistory();
	}
	
	render() {
		const transactions = this.props.transactionData.reducerTransactionData.map((entry, index) => {
			return (
			<div key={index}>
				<Transaction key={index} index={index} {...entry} />
			</div>
			)
		})
		return (
			<div>
				<h2>Transaction History</h2>
				<div className="container">
				{transactions}
				</div>
			</div>
		)
	}
}
// Connects transactionReducer to `this`
// rootReducerReduxState is the state that is created in App.js
// rootReducerReduxState is the `rootReducer` variable from store.js
// mapping Redux state to component props
const mapStateToProps = (rootReducerReduxState) => { // ??? is this the `state` or the `rootReducer`?
	return {
		// ??? Are these statements correct?
		// state.transaction is from rootReducer in store.js
		// store.js is connected to this script through Provider
		// Provider encapsulates this Component
		// the key can be named anything
		// transactionData is the state in this.props
		transactionData: rootReducerReduxState.transactionReducer
	}
}
// ??? why am I not using this?
// const mapDispatchToProps = () => {}

// connect(mapStateToProps) connects Redux state to component
// first param `mapStateToProps` connect "mapping of Redux state to component pros" to the `TransactionContainer` component
// second param `{requestTransactionHistory}` connect `requestTransactionHistory` action to `TransactionContainer` component
export default connect(mapStateToProps, { requestTransactionHistory })(TransactionContainer)
// store’s dispatch method is automatically provided as a prop
// `export` is exporting the component for use