import React from 'react';
import Transaction from '../transaction/Transaction';

export default class TransactionContainer extends React.Component {
	render() {
		return (
			<div>
				<h1>Transaction History</h1>
				<Transaction />
				<Transaction />
				<Transaction />
			</div>
		)
	}
}