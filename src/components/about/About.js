// Presentation component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';

export default class About extends React.Component {
	render() {
		return (
			<div>
				<h1>About</h1>
				<p>Nassim is a mock stock trading app using live market data.</p>
			</div>
		)
	}
}