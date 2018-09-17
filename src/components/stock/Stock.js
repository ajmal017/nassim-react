import React from 'react';
import axios from 'axios';
import { FormGroup, FormControl, Button } from 'react-bootstrap';

export default class Stock extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleBuy = this.handleBuy.bind(this);
		this.handleSell = this.handleSell.bind(this);

		const currentDate = new Date();

		this.state = {
			symbol: 'AAPL', // TODO: should receive this value from Home component
			name: '',
			date: currentDate.toString(),
			price: '', // TODO: display 2-decimal-point float in render
			quantity: '',
			transactionType: '',
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
		this.setState({quantity: e.target.value});
	}
	handleSell(e) {
		e.preventDefault();
		alert(`Sell ${this.state.quantity} shares of ${this.state.symbol}`);
		// axios.post()
	}
	handleBuy(e) {
		e.preventDefault();
		alert(`Buy ${this.state.quantity} shares of ${this.state.symbol}`);
		// axios.post()
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