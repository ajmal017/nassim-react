import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

export default class Footer extends React.Component {
	render() {
		return (
		<div className="footer">
			<ul>
				<li><Link to='/about'>About</Link></li>
			</ul>
		</div>
		)
	}
}