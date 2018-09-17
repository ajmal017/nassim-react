import React from 'react';
import axios from 'axios';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			searchTerm: ''
		}
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({searchTerm: e.target.value});
		console.log(this.state.searchTerm);
		const display = {
			symbol: '',
			name: ''
		}
		// call IEX symbols
		axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
				.then(response => {
					var selections = response.data.filter(entry => {
						entry.name === this.state.searchTerm || entry.symbol === this.state.searchTerm;
					})
					console.log(selections);
						// TODO: check if match exists in symbols or names in response.data
						// TODO: populate dropdown with clickable search results
				})
	}
	populateSelection() {

	}
	handleSubmit() {
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
				<form onSubmit={this.handleSubmit}>
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
				</form>
			</div>
		)
	}
}