import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { 
	XYPlot,
	XAxis,
	YAxis,
	LineSeries,
	HorizontalGridLines,
  VerticalGridLines,
} from 'react-vis';

import { requestChartData } from '../../actions/chart-action';
import './StockChart.css';

class StockChart extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			chartInfo: props.chartInfo,
			chartData: []
		}
		console.log(`props: ${JSON.stringify(props)}`);
		const symbol = props.chartInfo.symbol;
		// quick fix: put axios inside setTimeOut()
		console.log(`StockChart symbol: ${symbol}`);
		let dataSet = [];
		axios.get(`https://api.iextrading.com/1.0/stock/${symbol}/chart/1m`)
				.then(res => {
					res.data.map((val, i) => {
						let entry = {
							x: i,
							y: val.close
						};
						dataSet.push(entry);
					});
					this.setState({
						chartData: dataSet
					});
				});
	}

	componentWillReceiveProps(newProps) {
		let dataSet = [];
		let newSymbol = newProps.chartInfo.symbol;
		axios.get(`https://api.iextrading.com/1.0/stock/${newSymbol}/chart/1m`)
				.then(res => {
					res.data.map((val, i) => {
						let entry = {
							x: i,
							y: val.close
						};
						dataSet.push(entry);
					});
					this.setState({
						chartData: dataSet
					});
				});
	}

	render() {
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

const mapStateToProps = (rootReducerReduxState) => {
	return {
		chartData: rootReducerReduxState.chartReducer
	}
}

export default connect(mapStateToProps, {
	requestChartData
})(StockChart);