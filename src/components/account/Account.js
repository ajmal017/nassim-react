// Container component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import axios from 'axios';

export default class Account extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: 'alice@wonderland.com',
			password: '12345678',
			cash: 100000,
			assets: 200000
		}
		// (note 1) http request to backend account.controller
		// GET always call backend route
		axios.get('http://localhost:8080/account/auth/google')
  		.then(response => {
			// handle success
				//window.location.href = 'http://localhost'
    		console.log(response);
  		})
  		.catch(error => {
    	// handle error
    		console.log(error);
  		})
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