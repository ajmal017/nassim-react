// Presentation / Container component?
import React from 'react';
import axios from 'axios';
import Transaction from '../transaction/Transaction';
import { connect } from 'react-redux';
// ??? import Actions: is this necessary? Why?
import { requestTransactionHistory } from '/Users/Leo/nassim-react/src/actions/transaction-actions';

class TransactionContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			transactions: []
		}
	}
	
	componentDidMount() {
		this.props.requestTransactionHistory();
	}
	
	render() {
		debugger
		const transactions = this.props.transactionData.transactionHistoryData.map((entry, index) => {
			return (
			<div key={index}>
				<Transaction key={index} index={index} {...entry} />
			</div>
			)
		})
		return (
			<div>
				<h1>Transaction History</h1>
				<div>
				{transactions}
				</div>
			</div>
		)
	}
}
// Connects transactionReducer to `this`
const mapStateToProps = (state) => { // ??? is this the `state` or the `rootReducer`?
	return {
		// ??? Are these statements correct?
		// state.transaction is from rootReducer in store.js
		// store.js is connected to this script through Provider
		// Provider encapsulates this Component
		// the key can be named anything
		transactionData: state.transactionReducer
	}
}
// ??? why am I not using this?
const mapDispatchToProps = () => {}

// connect(mapStateToProps) connects redux state to component
export default connect(mapStateToProps, { requestTransactionHistory })(TransactionContainer) // null should be replaced by Action
// store’s dispatch method is automatically provided as a prop