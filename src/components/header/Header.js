// Presentation component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Auth from '../auth/Auth';
import Search from '../search/Search';

export default class Header extends React.Component {
	render() {
		return (
		<div>
			<h1>Nassim</h1>
			<h2>Trade real stocks in real time with fake money</h2>
			<ul>
				<li>
					<Link to='/'>Landing</Link>
				</li>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/portfolio'>My Portfolio</Link>
				</li>
				<li>
					<Link to='/account'>My Account</Link>
				</li>
				<Auth />
			</ul>
			<Search />
		</div>
		)
	}
}