import React, { Component } from 'react';
import { Form, Button, ControlLabel } from 'react-bootstrap';
import './SignInForm.css';

var email_regex_format = new RegExp("^([a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]{1,}[@]{1}[a-zA-Z0-9!#$%&'*+-/=?^_`{|}~]{1,}[.]{1}[a-zA-Z0-9]{2,})$");

class SignInForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      emailValid: false,
      emailErrorMessage: '',
      password: '',
      passwordValid: false,
      passwordErrorMessage: '',
      formValid: false
    }
    this.handleEmailInput = this.handleEmailInput.bind(this);
    this.handlePasswordInput = this.handlePasswordInput.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  handleEmailInput(e) {
    const name = e.target.name;
    const val = e.target.value;

    this.setState({
      email: val
    })

    let isEmailValid = this.validateEmail(val);
    this.validateForm(name, isEmailValid);
  }

  validateEmail(val) {
    let isValid = false; let message = '';

    switch(true) {
      case (val === '' || val === null):
        message = 'email address cannot be empty'; break;
      case email_regex_format.test(val):
        isValid = true; break;
      default:
        message = 'not correct format for email address';
    }

    this.setState({
      emailValid: isValid,
      emailErrorMessage: message,
    })

    return isValid;
  }

  handlePasswordInput(e) {
    const name = e.target.name;
    const val = e.target.value;

    this.setState({
      password: val
    })

    let isPasswordValid = this.validatePassword(val);
    this.validateForm(name, isPasswordValid);
  }

  validatePassword(val) {
    let isValid = false; let message = '';

    switch(true) {
      case (val === '' || val === null):
        message = "password cannot be empty"; break;
      case (val.length>=6 && val.length<=12):
        isValid = true; break;
      default:
        message = 'please use at least 6 - 12 characters';
    }

    this.setState({
      passwordValid: isValid,
      passwordErrorMessage: message,
    })

    return isValid;
  }

  validateForm(name, isValidParams) {
    let isFormValid = false;
    if(name === 'email' && isValidParams && this.state.passwordValid ) {
      isFormValid = true;
    } else if(name ==='password' && isValidParams && this.state.emailValid) {
      isFormValid = true;
    }
    this.setState({
        formValid: isFormValid
    })
  }

  handleSubmitClick(e) {
    console.log("email: " + this.state.email + " password: " + this.state.password);
    if(this.state.formValid)
      alert('Login success!');
    e.preventDefault();
  }

  render() {
    return (
      <div className="container">
        <div className="SignInForm">
          <Form onSubmit={this.handleSubmitClick}>
            <div className="form-group">
              <ControlLabel>Email</ControlLabel>
              <input type="email" name="email" className="form-control" placeholder="Input email address" value={this.state.email} onChange={this.handleEmailInput} />
              <span className="help-block error-warning"><small>{this.state.emailErrorMessage}</small></span>
            </div>
            <div className="form-group">
              <ControlLabel>Password</ControlLabel>
              <input type="password" name="password" className="form-control" placeholder="Input password" value={this.state.password} onChange={this.handlePasswordInput} />
              <span className="help-block error-warning"><small>{this.state.passwordErrorMessage}</small></span>
            </div>
            <Button type="submit" bsStyle="custom" disabled={!this.state.formValid} block> <strong> Sign In </strong> </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SignInForm;