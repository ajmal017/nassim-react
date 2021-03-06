import React from 'react';
import { Button } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logOut } from '../../actions/login-action';

class Logout extends React.Component {
	doLogout() {
		this.props.logOut();
		this.props.history.push('/')
	}
	// Can bind the doLogout function to `this` while calling as below:
	render() {
		const style = {

			margin: '20px'
		}
		return (
			<Button 
			onClick={this.doLogout.bind(this)}
			style={style}
			>Log out</Button>
		)
	}
}
export default withRouter(
	connect(null, {logOut})(Logout)
)
	