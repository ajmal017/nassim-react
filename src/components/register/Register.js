// Container component
import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

export default class Register extends React.Component {
	constructor(props) {
		super(props)
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.getEmailValidationState = this.getEmailValidationState.bind(this);
    this.getPasswordValidationState = this.getPasswordValidationState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {
			show: false,
      email: '',
      password: ''
		}
	}
  getEmailValidationState() {
    const emailLength = this.state.email.length;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(String(this.state.email).toLowerCase())) return 'success';
    else if (emailLength > 0) return 'error';
    return null;
  }
	getPasswordValidationState() {
    const passwordLength = this.state.password.length;
    if (passwordLength >= 8) return 'success';
    else if (passwordLength > 0) return 'error';
    return null;
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }
  handleSubmit() {
    alert(this.state); // more later with AJAX and Redux
  }
    // After successful Login, hide Login and Register, show My Account
	render() {
		return(
      <form onSubmit={this.handleSubmit}> 
        <FormGroup controlId="formHorizontalRegisterEmail" validationState={this.getEmailValidationState()} > 
          <ControlLabel>Email</ControlLabel> 
          <FormControl
            type="email"
            value={this.state.email}
            placeholder="Email"
            onChange={this.handleEmailChange} 
          />
          <FormControl.Feedback />
          <HelpBlock>Please enter a valid email address.</HelpBlock> 
        </FormGroup> 
        <FormGroup controlId="formHorizontalRegisterPassword" validationState={this.getPasswordValidationState()} > 
          <ControlLabel>Password</ControlLabel> 
          <FormControl
            type="password"
            value={this.state.password}
            placeholder="Password"
            onChange={this.handlePasswordChange} 
          />
          <FormControl.Feedback />
          <HelpBlock>Passwords must be at least 8 characters.</HelpBlock> 
        </FormGroup>
        <Button type="submit">Register</Button>
      </form>
		)
	}
}
