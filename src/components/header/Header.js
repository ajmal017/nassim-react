// Presentation component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import Auth from '../auth/Auth';
import Search from '../search/Search';
import Logout from '../logout/Logout';

export default class Header extends React.Component {
	render() {
		if (localStorage.getItem('token')) {
			return (
			<div>
				<h1>Nassim</h1>
				<h2>Trade real stocks in real time with fake money</h2>
				<ul>
					<li>
						<Link to='/home'>Home</Link>
					</li>
					<li>
						<Link to='/portfolio'>My Portfolio</Link>
					</li>
					<li>
						<Link to='/account'>My Account</Link>
					</li>
					<Logout />
				</ul>
				<Search />
			</div>
			)
		} else {
			return (
				<div>
					<h1>Nassim</h1>
					<h2>Trade real stocks in real time with fake money</h2>
					<ul>
						<Auth />
					</ul>
					<Search />
				</div>
				)
		}
	}
}