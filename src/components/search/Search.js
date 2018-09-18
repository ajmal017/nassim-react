import React from 'react';
import axios from 'axios';
import { FormGroup, FormControl } from 'react-bootstrap';
import Autocomplete from 'react-autocomplete';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = {
			searchTerm: '',
			stockData: [],
			renderData: []
		}
		axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
				.then(response => {
					this.setState({stockData: response.data});
					console.log(this.stockData);
				})
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({searchTerm: e.target.value});
		console.log(this.state.searchTerm);
		let selections = this.state.stockData.filter(entry => {
			entry.name === this.state.searchTerm || entry.symbol === this.state.searchTerm;
		});
		console.log(`selections`, selections);
	}
	populateSelection() {

	}
	handleSelect() {
		// TODO:
		// needs symbol value of selected entry
		// pass on submitted symbol value to Stock component
		// go to stock page
	}
//https://www.w3schools.com/howto/howto_js_autocomplete.asp
//https://stackoverflow.com/questions/49075311/custom-bootstrap-form-input-with-dropdown-suggestions
	render() {
		return (
			<div>
				<Autocomplete
					getItemValue={(item) => item.symbol}
					items={this.state.stockData}
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
/*
					<FormGroup
						controlId="formBasicText"
					>
						<FormControl
							type="text"
							value={this.state.searchTerm}
							placeholder="Search for a stock"
							onChange={this.handleChange}
						/>
					</FormGroup>
/*
					var selections = response.data.filter(entry => {
						entry.name === this.state.searchTerm || entry.symbol === this.state.searchTerm;
					})
					console.log(selections);
					
						// TODO: check if match exists in symbols or names in response.data
						// TODO: populate dropdown with clickable search results
*/