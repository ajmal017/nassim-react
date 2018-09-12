import React from 'react';

export default class Transaction extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			shares: 10,
			price: 232.55
		}
		// total = shares * price
	}
	render() {
		return(
			<div>
			<h1>Transaction</h1>
			<p>Today's date: 9/11/2018</p>
			<p>Buy</p>
			<p>Shares: {this.state.shares}</p>
			<p>Price: ${this.state.price}</p>
			<p>Total: ${this.state.shares * this.state.price}</p>
			</div>
		)
	}
}