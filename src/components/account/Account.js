import React from 'react';

export default class Account extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: 'alice@wonderland.com',
			password: '12345678',
			cash: 100000,
			assets: 200000
		}
	}
	render() {
		return (
			<div>
			<h1>My Account</h1>
			<p>Email: {this.state.email}</p>
			<p>Password: {this.state.password} (will be masked in production)</p>
			<p>Cash: ${this.state.cash} (currency format)</p>
			<p>Assets: ${this.state.assets} (currency format)</p>
			</div>
		)
	}
}