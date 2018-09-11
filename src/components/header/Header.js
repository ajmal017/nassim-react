import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default class Header extends React.Component {
	render() {
		return (
		<div>
			<h1>Kurtosis</h1>
			<ul>
				<li>
					<Link to='/'>Landing</Link>
				</li>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/account'>My Account</Link>
				</li>
			</ul>
		</div>
		)
	}
}