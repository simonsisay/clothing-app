import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      displayName: "",
      confirmPassword: ""
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
      <div className="sign-up">
        <h2>I don't have an account</h2>
        <p>Sign up with your email and password</p>

        <form className="form">
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            onChange={this.handleChange}
            label={"Display Name"}
          />
          <FormInput
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            label={"Email"}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label={"Password"}
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            onChange={this.handleChange}
            label={"Confirm Password"}
          />
          <span className="button-container">
            <CustomButton
              type={"submit"}
              onClick={this.submitForm}
              backgroundColor={"#000"}
            >
              SIGN UP
            </CustomButton>
          </span>
        </form>
      </div>
    );
  }
}

export default SignUp;
