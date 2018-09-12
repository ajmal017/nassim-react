import React from 'react';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		const currentDate = new Date();
		const dayAgo = new Date(new Date().setDate(currentDate.getDate() - 1));
		const weekAgo = new Date(new Date().setDate(currentDate.getDate() - 7));
		const monthAgo = new Date(new Date().setDate(currentDate.getDate() - 30));
		this.state = {
			currentDate: currentDate.toString(),
			value: 1000000,
			dayAgo: dayAgo.toString(),
			weekAgo: weekAgo.toString(),
			monthAgo: monthAgo.toString()
		}
	}
	render() {
		return(
			<div>
			<h1>Portfolio</h1>
			<p>Value: ${this.state.value} (currency format)</p>
			<p>Current Date: {this.state.currentDate}</p>
			<p>Day Ago: {this.state.dayAgo}</p>
			<p>Week Ago: {this.state.weekAgo}</p>
			<p>Month Ago: {this.state.monthAgo}</p>
			</div>
		)
	}
}
// compare to:
// 1 day ago
// 7 days ago
// 30 days ago
// 365 days ago