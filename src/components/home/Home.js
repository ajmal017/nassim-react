import React from 'react';
import axios from 'axios';
import { FormGroup, FormControl } from 'react-bootstrap';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			searchTerm: ''
		}
	}
	handleChange() {
		// TODO:
		// take input value
		// const inputValue = 
		// set state searchTerm
		// this.setState({searchTerm: })
	}
	populateSelection() {
		const searchTerm = this.state.searchTerm;
		const display = {
			symbol: '',
			name: ''
		}
		// call IEX symbols
		/*
		axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
				.then(response => {
						// TODO: check if match exists in symbols or names in response.data
						// TODO: populate dropdown with clickable search results
				})
		*/
	}
	handleSubmit() {
		// TODO:
		// needs symbol value of selected entry
		// pass on submitted symbol value to Stock component
		// go to stock page
	}
	render() {
		return (
			<div>
				<h1>Home</h1>
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