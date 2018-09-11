import React from 'react';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class Login extends React.Component {
	constructor(props) {
		super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.getEmailValidationState = this.getEmailValidationState.bind(this);
		this.getPasswordValidationState = this.getPasswordValidationState.bind(this);
		this.state = {
			show: false,
      email: '',
      password: ''
		}
	}
	getEmailValidationState() {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.state.email).toLowerCase())) return 'success';
    return 'error';
  }
	getPasswordValidationState() {
    const length = this.state.password.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
	render() {
		return(
			<form> 
        <FormGroup controlId="formHorizontalEmail" validationState={this.getEmailValidationState()} > 
          <ControlLabel>Email</ControlLabel> 
          <FormControl
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleEmailChange} 
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on format.</HelpBlock> 
        </FormGroup> 
        <FormGroup controlId="formHorizontalPassword" validationState={this.getPasswordValidationState()} > 
          <ControlLabel>Password</ControlLabel> 
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handlePasswordChange} 
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock> 
        </FormGroup>
      </form>
		)
	}
}