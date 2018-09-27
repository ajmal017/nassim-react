//??? Container / Presentation component

import React from 'react';
import PropTypes from 'prop-types'
import axios from 'axios';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { executeBuyTransaction, executeSellTransaction } from '../../actions/transaction-actions';

/*
Stock.propTypes = {
	symbol: PropTypes.string.isRequired
}
*/

class Stock extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
		this.handleChange = this.handleChange.bind(this);
		this.handleBuy = this.handleBuy.bind(this);
		this.handleSell = this.handleSell.bind(this);

		const currentDate = new Date();
		this.state = {
			date: currentDate.toString(),
			transactionType: '',
			symbol: props.match.params.symbol, // TODO: should receive this value from Search component
			name: '',
			price: '', // TODO: display 2-decimal-point float in render
			quantity: '',
			totalValue: ''
		}

		const self = this; // for using constructor `this` in different context
		// GET specific stock
		// call IEX
		// render symbol, name, price with response data
		axios.get(`https://api.iextrading.com/1.0/stock/${self.state.symbol}/quote`)
			.then(response => {
				console.log(response.data.latestPrice);
				self.setState({
					price: response.data.latestPrice,
					name: response.data.companyName
				});
				return;
			})
			.catch(error => {
				console.log(error);
				return
			});
	}

	handleChange(e) {
		this.setState({
			quantity: e.target.value,
			totalValue: (this.state.price * e.target.value)
		});
	}

	handleSell(e) {
		e.preventDefault();
		//alert(`Sell ${this.state.quantity} shares of ${this.state.symbol}`);
		const sellRequestData = {
			date: this.state.date,
			type: 'sell',
			symbol: this.state.symbol,
			name: this.state.name,
			price: this.state.price,
			quantity: this.state.quantity,
			totalValue: this.state.totalValue
		}
		this.props.executeSellTransaction(sellRequestData);
	}

	handleBuy(e) {
		e.preventDefault();
		const buyRequestData = {
			date: this.state.date,
			type: 'buy',
			symbol: this.state.symbol,
			name: this.state.name,
			price: this.state.price,
			quantity: this.state.quantity,
			totalValue: this.state.totalValue
		}
		this.props.executeBuyTransaction(buyRequestData); // calling Action
		/*
		alert(`Buy ${this.state.quantity} shares of ${this.state.symbol}`);
		// post Transaction
		axios.post('http://localhost:8080/transaction/all', {
			date: this.state.date,
			type: 'buy',
			symbol: this.state.symbol,
			name: this.state.name,
			price: this.state.price,
			quantity: this.state.quantity,
			totalValue: this.state.totalValue
		})
			.then(response => console.log(response))
			.catch(error => console.log(error));
		// post to Portfolio
		// if portfolio doesn't exist: create
		// if portfolio exists: update
		axios.post('http://localhost:8080/portfolio', {
			date: this.state.date,
			symbol: this.state.symbol,
			name: this.state.name,
			quantity: this.state.quantity,
			totalValue: this.state.totalValue
		})
			.then(response => console.log(response))
			.catch(error => console.log(error));
			*/
	}

	render() {

		return (
			<div>
				<h1>Stock</h1>
				<p>Symbol: {this.state.symbol}</p>
				<p>Name: {this.state.name}</p>
				<p>Price: ${this.state.price} (currency format)</p>
				<p>Current Date: {this.state.date}</p>
				<form>
					<FormGroup>
						<FormControl
							type="text"
							value={this.state.quantity}
							placeholder=""
							onChange={this.handleChange}
						/>
					</FormGroup>
					<Button className="sell" type="submit" onClick={this.handleSell}>Sell</Button>
					<Button className="buy" type="submit" onClick={this.handleBuy}>Buy</Button>
				</form>
			</div>
		)
	}
}
// ??? Why do we need both mapStateToProps and connect()?
const mapStateToProps = (state) => {
	return {
		// ??? Are these statements correct?
		 // state.transaction is from rootReducer in store.js
		 // store.js is connected to this script through Provider
		 // Provider encapsulates this Component
		 // the key can be named anything
		transaction: state.transactionReducer
	}
}


const mapDispatchToProps = () => {}
// connect(mapStateToProps) connects redux state to component

// connect reducer and action with component
// this.props.executeBuyTransaction will be usable by this component
export default connect(mapStateToProps, { executeBuyTransaction, executeSellTransaction })(Stock) 
// store’s dispatch method is automatically provided as a prop
// `dispatch` connects redux actions to component
// data transformation occurs in Action