// Presentation component
import React from 'react';

export default function Stock(props)  {
	console.log(`Stock props.symbol: ${props.symbol}`)
		return (
			<div>
				<h1>Stock</h1>
				<p>Symbol: {props.symbol}</p>
				<p>Name: {props.name}</p>
				<p>Price: ${props.price} (currency format)</p>
				<p>Current Date: {props.date}</p>
			</div>
		)
}