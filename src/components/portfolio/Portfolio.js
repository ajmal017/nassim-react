import React from 'react';

export default class Portfolio extends React.Component {
	constructor(props) {
		super(props)
		const date = new Date();
		this.state = {
			currentDate: 'Tue Sep 11 2018 23:34:31 GMT-0400 (Eastern Daylight Time)', // date.toDateString()
			value: 1000000,
			compareToDate: 'Sun Aug 12 2018 23:30:58 GMT-0400 (Eastern Daylight Time)'// (new Date(date.setDate(date.getDate() - 30))).toDateString()
		}
	}
	render() {
		return(
			<div>
			<h1>Portfolio</h1>
			<p>Current Date: {this.state.currentDate}</p>
			<p>Compare to Date: {this.state.compareToDate}</p>
			<p>Value: ${this.state.value}</p>
			</div>
		)
	}
}
// compare to:
// 1 day ago
// 7 days ago
// 30 days ago
// 365 days ago