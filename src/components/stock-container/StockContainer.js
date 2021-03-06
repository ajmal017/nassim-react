import React from 'react';
import './StockContainer.css';
import Stock from '../stock/Stock';
import StockChart from '../stock-chart/StockChart';
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { executeBuyTransaction, executeSellTransaction } from '../../actions/transaction-action';
import { requestStockData } from '../../actions/stock-action';
import { requestChartData } from '../../actions/chart-action';

class StockContainer extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleBuy = this.handleBuy.bind(this);
		this.handleSell = this.handleSell.bind(this);
		console.log(`in constructor symbol: ${props.match.params.symbol}`);

		const currentDate = new Date();
		this.state = {
			date: currentDate.toString(),
			symbol: props.match.params.symbol, // TODO: should receive this value from Search component
			name: '',
			price: '', // TODO: display 2-decimal-point float in render
			quantity: '',
			totalValue: ''
		}
	}

	
	// First time mounting
	componentDidMount() { // should receive data from Search
		console.log(`componentDidMount(); this.props.match.params.symbol: ${this.props.match.params.symbol}`);

		this.props.requestStockData(this.props.match.params.symbol);

		this.setState({
			price: this.props.match.params.latestPrice
		});

		this.props.requestChartData(this.props.match.params.symbol);
	}
	

	// Didn't need to set local state
	// props contain the data
	componentWillReceiveProps(newProps) {
		console.log(`componentWillReceiveProps(); newProps.match.params.symbol: ${newProps.match.params.symbol}; this.props.match.params.symbol: ${this.props.match.params.symbol}`);

		// newProps.match.params.symbol is from the URL
		if (this.props.stockData.reducerStockData.symbol !== newProps.match.params.symbol) {
			this.props.requestStockData(newProps.match.params.symbol);
			this.props.requestChartData(newProps.match.params.symbol);
		}
		this.setState({
			symbol: this.props.stockData.reducerStockData.symbol,
			price: this.props.stockData.reducerStockData.latestPrice,
			name: this.props.stockData.reducerStockData.companyName
		});
	}

	handleChange(e) {
		this.setState({
			quantity: e.target.value,
			totalValue: (this.state.price * e.target.value)
		});
	}

	handleSell(e) {
		e.preventDefault();
		//alert(`Sell ${this.state.quantity} shares of ${this.state.symbol}`);
		const sellRequestData = {
			account: localStorage.getItem('userId'),
			date: this.state.date,
			type: 'sell',
			symbol: this.state.symbol,
			name: this.state.name,
			price: this.state.price,
			quantity: this.state.quantity,
			totalValue: this.state.totalValue
		}
		this.props.executeSellTransaction(sellRequestData);
	}

	handleBuy(e) {
		e.preventDefault();
		const buyRequestData = {
			account: localStorage.getItem('userId'),
			date: this.state.date,
			type: 'buy',
			symbol: this.state.symbol,
			name: this.state.name,
			price: this.state.price,
			quantity: this.state.quantity,
			totalValue: this.state.totalValue
		}
		this.props.executeBuyTransaction(buyRequestData); // calling Action
		//alert(`Buy ${this.state.quantity} shares of ${this.state.symbol}`);
	}

	render() {

		return (
			<div className="stock-container">
				<div>
					{
						this.props.stockData.isFetched &&
						<Stock stockInfo={this.props.stockData.reducerStockData} />
					}
				</div>
				<div>
					{
						this.props.chartData.isFetched ? 
						<StockChart chartInfo={this.props.stockData.reducerStockData} /> : null
					}
				</div>
				<div>
					<form>
						<FormGroup>
							<FormControl
								className="quantity"
								type="text"
								value={this.state.quantity}
								placeholder="Quantity"
								onChange={this.handleChange}
							/>
						</FormGroup>
						<Button className="sell" type="submit" onClick={this.handleSell}>Sell</Button>
						<Button className="buy" type="submit" onClick={this.handleBuy}>Buy</Button>
					</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (rootReducerReduxState) => {
	return {
		stockData: rootReducerReduxState.stockReducer,
		chartData: rootReducerReduxState.chartReducer,
		transactionData: rootReducerReduxState.transactionReducer
	}
}

export default connect(mapStateToProps, {
	requestStockData,
	requestChartData,
	executeBuyTransaction,
	executeSellTransaction
})(StockContainer);