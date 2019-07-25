import React, { Component } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-in.styles.scss";
import {
  signInWithGoogle,
  createUserProfileDocument
} from "../../firebase/firebase.utils";
import { auth } from "../../firebase/firebase.utils";
import { withRouter } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  submitForm = async e => {
    e.preventDefault();
    const { email, password } = this.state;

    if (!email || !password) {
      alert("Please make sure you added email and password");
      return;
    }

    try {
      const data = await auth.signInWithEmailAndPassword(email, password);
      createUserProfileDocument(data.user);
      this.setState({
        email: "",
        password: ""
      });
    } catch (error) {
      console.log(error.message);
    }
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
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            label={"Password"}
          />
          <span className="button-container">
            <CustomButton onClick={this.submitForm} backgroundColor={"#000"}>
              SIGN IN
            </CustomButton>
            <CustomButton
              onClick={() => signInWithGoogle()}
              backgroundColor={"#006edd"}
            >
              SIGN IN WITH GOOGLE
            </CustomButton>
          </span>
        </form>
      </div>
    );
  }
}

export default withRouter(SignIn);
