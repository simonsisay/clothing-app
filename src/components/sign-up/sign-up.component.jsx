import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { auth, createUserProfileDocument } from "../../firebase/firebase.utils";

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

  submitForm = async e => {
    e.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    console.log(this.state);
    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    try {
      const data = await auth.createUserWithEmailAndPassword(email, password);
      createUserProfileDocument(data.user, { displayName });
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
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
