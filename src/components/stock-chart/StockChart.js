import React from 'react';
import axios from 'axios';
import { 
	XYPlot,
	XAxis,
	YAxis,
	LineSeries,
	HorizontalGridLines,
  VerticalGridLines,
} from 'react-vis';

export default class StockChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartInfo: props.chartInfo.symbol,
			chartData: []
		}
		console.log(`props: ${JSON.stringify(props)}`);
	}
	componentDidMount() {
		// ??? How to get props from StockContainer
		const symbol = this.state.chartInfo;
		console.log(`symbol: ${symbol}`)
		let dataSet = [];
		axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1m`)
				.then(res => {
					console.log(`${JSON.stringify(res)}`);
					res.data.map((val, i) => {
						let entry = {
							x: i,
							y: val.close
						};
						console.log(val.close);
						dataSet.push(entry);
					});
					this.setState({
						chartData: dataSet
					})
				});
	}
	render() {
		const dummyData = [
			{x: 0, y: 8},
			{x: 1, y: 5},
			{x: 2, y: 4},
			{x: 3, y: 9},
			{x: 4, y: 1},
			{x: 5, y: 7},
			{x: 6, y: 6},
			{x: 7, y: 3},
			{x: 8, y: 2},
			{x: 9, y: 0}
		];
		return(
		<div className="chart">
			<XYPlot
				width={800}
				height={600}
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