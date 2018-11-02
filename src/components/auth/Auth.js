// Container component
// https://redux.js.org/basics/usagewithreact#presentational-and-container-components
import React from 'react';
import { connect } from 'react-redux';
import { Button, Modal, Tabs, Tab } from 'react-bootstrap';
import { Redirect } from 'react-router';

import Register from '../register/Register';
import Login from '../login/Login';
import { makeLoginPostRequest, logOut } from '../../actions/login-action';

class Auth extends React.Component {
	constructor(props, context) {
    super(props, context);
		this.handleHide = this.handleHide.bind(this);
		this.handleSelect = this.handleSelect.bind(this);

    this.state = {
      key: 1
    };
	}
	// Modal
	handleHide() {
		this.setState({
			show: false
		});
  }
	// Tabs
  handleSelect(key) {
    console.log(`selected ${key}`);
    this.setState({ key });
  }

  render() {
    if (this.props.loginState.isLoggedIn) {
			debugger
			return (
        // same as this.props.history.push()
				<Redirect to="/home" />
			)
		}
    return (
			<div className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true, key: 1 })}
        >
          Register
        </Button>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true, key: 2 })}
        >
          Log In
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>

 						<Tabs
							activeKey={this.state.key}
							onSelect={this.handleSelect}
							id="controlled-tab-example"
						>
							<Tab eventKey={1} title="Register">
								<Register />
							</Tab>
							<Tab eventKey={2} title="Log In">
								<Login />
							</Tab>
						</Tabs>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
     
    );
  }
}
const mapStateToProps = (rootReducerReduxState) => {
  return {
    loginState: rootReducerReduxState.loginReducer
  }
}
export default connect(mapStateToProps, {makeLoginPostRequest, logOut})(Auth)