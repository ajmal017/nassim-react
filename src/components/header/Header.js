// Presentation component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import './Header.css';
import Auth from '../auth/Auth';
import Search from '../search/Search';
import Logout from '../logout/Logout';
import { makeLoginPostRequest, logOut } from '../../actions/login-action';

class Header extends React.Component {
	render() {

		if (localStorage.getItem('token')) {
			return (
			<div className="header">
				<h1>Nassim</h1>
				<Search />
				<div className="nav">
					<ul>
						<li>
							<Link to='/home'>Home</Link>
						</li>
						<li>
							<Link to='/portfolio'>Portfolio</Link>
						</li>
						<li>
							<Link to='/transactions'>Transactions</Link>
						</li>
						<li>
							<Link to='/account'>My Account</Link>
						</li>
						<Logout />
					</ul>
				</div>
			</div>
			)
		} else {
			return (
				<div>
					<h1>Nassim</h1>
					<p>Practice trading stocks in real time</p>
					<ul>
						<Auth />
					</ul>
					<Search />
				</div>
				)
		}
	}
}
const mapStateToProps = (rootReducerReduxState) => {
  return {
    loginState: rootReducerReduxState.loginReducer // this component can use `loginState` as props
  }
}
export default withRouter(
	connect(mapStateToProps, {makeLoginPostRequest, logOut})(Header)
) 