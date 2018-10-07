// Presentation component
import React from 'react';

export default function Stock(props)  {
	console.log(`'Stock' props.symbol: ${props.stockInfo.symbol}`)
		return (
			<div>
				<h1>Stock</h1>
				<p>Symbol: {props.stockInfo.symbol}</p>
				<p>Name: {props.stockInfo.companyName}</p>
				<p>Price: ${props.stockInfo.latestPrice} (currency format)</p>
				<p>Current Date: {props.stockInfo.latestTime}</p>
			</div>
		)
}