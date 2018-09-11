import React from 'react';

export default class Transaction extends React.Component {
	render() {
		return(
			<div>
			<h1>Transaction</h1>
			<p>Today's date: 9/11/2018</p>
			<p>Buy</p>
			<p>Shares: 10</p>
			<p>Price: $232.55</p>
			<p>Total: $2325.50</p>
			</div>
		)
	}
}