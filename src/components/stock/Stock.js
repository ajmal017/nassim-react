import React from 'react';

export default class Stock extends React.Component {
	constructor(props) {
		super(props)
		const currentDate = new Date();
		this.state = {
			date: currentDate.toString(),
			price: 230.00 // TODO: display 2-decimal-point float in render
		}
	}
	// IEX API call here

	render() {
		return (
			<div>
				<h1>Stock</h1>
				<p>Price: ${this.state.price}</p>
				<p>Current Date: {this.state.date}</p>
				<p></p>
			</div>
		)
	}
}