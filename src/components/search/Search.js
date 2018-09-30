// Container component
import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { getSymbolsList } from '../../actions/search-actions'; // ??? how to use this in constructor?
import Autocomplete from 'react-autocomplete';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { requestSymbolsList } from '../../actions/search-actions'

/*
Search.propTypes = {
	handleChange: PropTypes.func.isRequired,
	handleSelect: PropTypes.func.isRequired
}
*/

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSelect = this.handleSelect.bind(this);
		this.state = {
			searchTerm: '',
			symbolsList: [],
			renderData: [],
			redirect: false,
			symbol: ''
		}
		// ??? How to use GET_SYMBOLS_LIST here?
	
		// Get a full list of stock symbols from IEX
		/*
		axios.get('https://api.iextrading.com/1.0/ref-data/symbols')
				.then(response => {
					this.setState({symbolsList: response.data});
					console.log(this.state.symbolsList);
				})
				*/
	}

	/*
	componentDidMount() {
		let data = this.props.getSymbolsList().payload; // what state are we using? where is the data? 
		this.setState({ symbolsList: data });
	}
	*/
	componentDidMount() {
		this.props.requestSymbolsList();
		this.setState({
			symbolsList: this.props.actionSymbolsList.reducerSymbolsList
		})
	}

	handleChange(e) {
		e.preventDefault();
		this.setState({searchTerm: e.target.value});
		let selections = this.state.symbolsList.filter((entry, index, array) => {
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
// ??? Stock is not inheriting when user selects a new stock in Search
// ??? Search box disappears after this
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

const mapStateToProps = (rootReducerReduxState) => {
	return {
		symbolsList: rootReducerReduxState.searchReducer
	}
}
export default connect(mapStateToProps, {requestSymbolsList})(Search)
/*
const mapStateToProps = (state) => {
	return {
		 // state.transaction is from rootReducer in store.js
		 // store.js is connected to this script through Provider
		 // Provider encapsulates this Component
		 // the key can be named anything
		search: state.searchReducer
	}
}
export default connect(mapStateToProps, { getSymbolsList })(Search)
*/