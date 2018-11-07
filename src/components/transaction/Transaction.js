// Presentation component
import React from 'react';
import './Transaction.css';

export default function Transaction(props) {
		// currency format:
		// https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
	return(
		<div className="box">
		<h3>Transaction</h3>
		<p className="date">Date: {props.date}</p>
		<p>Symbol: {props.symbol}</p>
		<p>Name: {props.name}</p>
		<p>Type: {props.type}</p>
		<p>Shares: {props.quantity}</p>
		<p>Price: ${props.price} (currency format)</p>
		<p>Total: ${props.quantity * props.price} (currency format)</p>
		</div>
	)
}