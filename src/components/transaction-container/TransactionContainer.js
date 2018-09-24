import React from 'react';
import axios from 'axios';
import Transaction from '../transaction/Transaction';
import { connect } from 'react-redux';
// ??? import Actions: is this necessary? Why?
import { getAllTransactions, createTransaction } from '/Users/Leo/nassim-react/src/actions/transaction-actions';

class TransactionContainer extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			transactions: []
		}
		axios.get('http://localhost:8080/transaction/all')
			.then(response => {
				this.setState({transactions: response.data});
				console.log('transactions: ', this.state.transactions);
			})
			.catch(error => {
				console.log(error);
			});
	}
	

	render() {
		const transactions = this.state.transactions.map((entry, index) => {
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
const mapStateToProps = (state) => {
	return {
		// ??? Are these statements correct?
		 // state.transaction is from rootReducer in store.js
		 // store.js is connected to this script through Provider
		 // Provider encapsulates this Component
		 // the key can be named anything
		transaction: state.transaction
	}
}
const mapDispatchToProps = () => {}
// connect(mapStateToProps) connects redux state to component
export default connect(mapStateToProps, null)(TransactionContainer) // null should be replaced by Action
// store’s dispatch method is automatically provided as a prop
// `dispatch` connects redux actions to component
// ??? where does the `dispatch` occur?
// ??? where does the action execute?
// ??? where is the function, used for transforming data, located?