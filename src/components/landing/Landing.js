// Presentation component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import {
  makeLoginPostRequest,
  receiveResponseFromLoginPostRequest
} from '../../actions/login-action';

class Landing extends React.Component {
	render() {
		if (this.props.loginState.isLoggedIn) {
      debugger
			return (
        // same as this.props.history.push()
				<Redirect to="/home" />
			)
		}
		return (
			<div>
				<h1>Landing</h1>
			</div>
		)
	}
}
const mapStateToProps = (rootReducerReduxState) => {
  return {
    loginState: rootReducerReduxState.loginReducer
  }
}
export default connect(mapStateToProps, {makeLoginPostRequest})(Landing)