import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import FormButton from "../form-button/form-button.component";
import "./sign-in.styles.scss";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  submitForm = e => {
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <p>Sign in with your email and password</p>

        <form className="form">
          <FormInput
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            label={"Email"}
          />
          <FormInput
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            label={"Password"}
          />
          <span className="button-container">
            <FormButton onClick={this.submitForm} backgroundColor={"#000"}>
              SIGN IN
            </FormButton>
            <FormButton onClick={this.submitForm} backgroundColor={"#006edd"}>
              SIGN IN WITH GOOGLE
            </FormButton>
          </span>
        </form>
      </div>
    );
  }
}

export default SignIn;
