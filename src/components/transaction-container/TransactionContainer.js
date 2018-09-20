import React from 'react';
import Transaction from '../transaction/Transaction';
import axios from 'axios';
import { connect } from 'react-redux';
import { testFunction } from '/Users/Leo/nassim-react/src/actions/transaction-actions';

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
		 // state.transaction is from rootReducer in store.js
		 // the key can be named anything
		transaction: state.transaction
	}
}
// connect(mapStateToProps) connects redux state to component
// connect(mapDispatchToProps) connects redux actions to component
export default connect(mapStateToProps, null) (TransactionContainer)