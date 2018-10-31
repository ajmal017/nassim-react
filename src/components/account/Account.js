// Container component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import axios from 'axios';
import Portfolio from '../portfolio/Portfolio'

export default class Account extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			cash: 100000,
			assets: 200000
		}
	}

	// Once logged in:
	// get email
	// get password and mask password
	/*
	this.setState({
		email: email,
		password: passwordMasked
	})
	*/ 
	
	// Display email
	// Display password with mask
	// Provide option to change password
	// Provide option to change email

	render() {
		return (
			<div>
			<h1>My Account</h1>
			<p>Email: {this.state.email}</p>
			<p>Password: {this.state.password} (will be masked in production)</p>
			<p>Cash: ${this.state.cash} (currency format)</p>
			<p>Assets: ${this.state.assets} (currency format)</p>
			<Portfolio />
			</div>
		)
	}
}