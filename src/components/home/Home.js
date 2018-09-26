// Presentation component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import axios from 'axios';

export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Home</h1>
			</div>
		)
	}
}