// Presentation component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import './Home.css'
import DowChart from '../dow-chart/DowChart';
import SpxChart from '../spx-chart/SpxChart';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>Home</h2>
				<div className="container">
					<DowChart />
					<SpxChart />
				</div>
			</div>
		)
	}
}