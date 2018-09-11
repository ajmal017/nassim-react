import React from 'react';
import { Button, Modal, FormGroup, ControlLabel, FormControl, HelpBlock, FieldGroup } from 'react-bootstrap';

export default class Register extends React.Component {
	constructor(props) {
		super(props)
		this.handleHide = this.handleHide.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.getValidationState = this.getValidationState.bind(this);
		this.state = {
			show: false,
			value: ''
		}
	}
	handleHide() {
		this.setState({
			show: false
		})
	}
	getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
	render() {
		return(
			<div className="modal-container" style={{ height: 200 }}>
        <Button
          bsStyle="primary"
          bsSize="large"
          onClick={() => this.setState({ show: true })}
        >
          Launch contained modal
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          container={this}
          aria-labelledby="contained-modal-title"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title">
              Register
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
					<form> 
						<FormGroup controlId="formBasicText" validationState={this.getValidationState()} > 
							<ControlLabel>Working example with validation</ControlLabel> 
							<FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange} /><FormControl.Feedback />
							<HelpBlock>Validation is based on string length.</HelpBlock> 
						</FormGroup> 
					</form>


          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
		)
	}
}