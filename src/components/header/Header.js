import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Auth from '../auth/Auth';

export default class Header extends React.Component {
	render() {
		return (
		<div>
			<h1>Nassim</h1>
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
				<Auth />
			</ul>
		</div>
		)
	}
}