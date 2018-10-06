// Presentation component
import React from 'react';

export default function Stock(props)  {
	debugger
	console.log(`'Stock' props.symbol: ${props.stockData.reducerStockData.symbol}`)
		return (
			<div>
				<h1>Stock</h1>
				<p>Symbol: {props.stockData.reducerStockData.symbol}</p>
				<p>Name: {props.stockData.reducerStockData.name}</p>
				<p>Price: ${props.stockData.reducerStockData.price} (currency format)</p>
				<p>Current Date: {props.stockData.reducerStockData.date}</p>
			</div>
		)
}