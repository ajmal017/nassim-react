// Presentation component
import React from 'react';
import PropTypes from 'prop-types';

Transaction.propTypes = {
	symbol: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
	price: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired
}

export default function Transaction(props) {
		// currency format:
		// https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript
	return(
		<div>
		<h2>Transaction</h2>
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