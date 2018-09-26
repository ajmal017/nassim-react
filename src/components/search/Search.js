// Container component
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Autocomplete from 'react-autocomplete';
import {Redirect} from 'react-router-dom';

Search.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSelect: PropTypes.func.isRequired
}

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = {
			searchTerm: '',
			stockData: [],
			renderData: [],
			redirect: false,
			symbol: ''
		}
		// Get a full list of stock symbols from IEX
		axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
				.then(response => {
					this.setState({stockData: response.data});
					console.log(this.state.stockData);
				})
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({searchTerm: e.target.value});
		let selections = this.state.stockData.filter((entry, index, array) => {
			return (
				entry.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
				|| entry.symbol.toLowerCase().includes(this.state.searchTerm.toLowerCase())
			);
		});
		this.setState({ renderData: selections })
	}
	handleSelect(selected) {
		console.log(selected);
		this.setState({
			redirect: true,
			symbol: selected
		})
	}

	render() {
		if (this.state.redirect) {
			return (
				<Redirect to={`/stock/${this.state.symbol}`} />
			)
		}
		return (
			<div>
				<Autocomplete
					getItemValue={(item) => item.symbol}
					items={this.state.renderData}
					renderItem={(item, isHighlighted) =>
						<div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.symbol}>
							{item.symbol} - {item.name}
						</div>
					}
					value={this.state.searchTerm}
					onChange={this.handleChange}
					onSelect={this.handleSelect}
				/>
			</div>
		)
	}
}