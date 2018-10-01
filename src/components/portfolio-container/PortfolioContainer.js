import React from 'react';
import Portfolio from '../portfolio/Portfolio';

export default class PortfolioContainer extends ReactComponent {
	constructor(props) {
		super(props)
		const currentDate = new Date();
		const dayAgo = new Date(new Date().setDate(currentDate.getDate() - 1));
		const weekAgo = new Date(new Date().setDate(currentDate.getDate() - 7));
		const monthAgo = new Date(new Date().setDate(currentDate.getDate() - 30));
		const yearAgo = new Date(new Date().setDate(currentDate.getDate() - 365));
		this.state = {
			currentDate: currentDate.toString(),
			value: 1000000,
			dayAgo: dayAgo.toString(),
			weekAgo: weekAgo.toString(),
			monthAgo: monthAgo.toString()
		}
	}
	render() {
		return (
			<div>
				<Portfolio {...this.state} />
			</div>
		)
	}
}
	// TODO
	// It should display portfolio return by showing 
	// (currentPortfolioValue / ${pastDate}PorfolioValue) - 1
	// ??? How to get portfolio value at a specific date?
	// for each stock in portfolio:
	// 	call IEX for historical price
	// 	historicalHoldinValue = price * quantity
	// sum historicalHoldingValue of all stocks
	// (currentHoldingValue / historicalHoldingValue) - 1

	// compare to:
// 1 day ago
// 7 days ago
// 30 days ago
// 365 days ago

// Portfolio
// Keep data in transaction database collection
// find in Transaction collection and process in frontend

// Relationship between Portfolio and Account
// Which one to use?
// Portfolio should belong to Account in database with Account _id reference
// Account should get a Portfolio _id 