import React from 'react';
import axios from 'axios';
import '../../../node_modules/react-vis/dist/style.css';
import { 
	XYPlot,
	XAxis,
	YAxis,
	LineSeries,
	HorizontalGridLines,
  VerticalGridLines,
} from 'react-vis';

export default class SpxChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: []
		}
	}
	componentDidMount() {
		let dataSet = [];
		axios.get('https://api.iextrading.com/1.0/stock/spy/chart/1d')
		    .then(res => {
					res.data.forEach((val, i) => {
						let entry = {
							x: i,
							y: val.marketAverage
						};
						dataSet.push(entry);
					});
					this.setState({
						chartData: dataSet
					})
				});
	}
	render() {
		return (
			<div className="chart">
				<h3>S&P 500</h3>
				<XYPlot
					width={400}
					height={300}
				>
					<XAxis />
					<YAxis />
					<HorizontalGridLines />
          <VerticalGridLines />
					<LineSeries data={this.state.chartData} />
				</XYPlot>
			</div>
		)
	}
}