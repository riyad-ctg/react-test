import React, { Component } from "react";
import Form from "./Form";

const initialValues = {
  name: "",
  email: "",
  password: "",
  birthDate: "",
  gender: "",
};

class SignupForm extends Component {
  state = {
    values: initialValues,
    agreement: false,
  };

  changeHandler = (e) => {
	  this.setState({values: {
		  ...this.state.values,
		  [e.target.name]: e.target.value,
		}}); 
  };
  agreementHandler = (e) => {
    this.setState({
      agreement: e.target.checked,
    });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.values);

    e.target.reset();
    this.setState({ values: initialValues, agreement: false });
  };
  render() {
    return (
      <div>
        <h1>Signup Form</h1>
        <Form
          values={this.state.values}
          agreement={this.state.agreement}
          submitHandler={this.submitHandler}
          changeHandler={this.changeHandler}
          agreementHandler={this.agreementHandler}
        />
      </div>
    );
  }
}

export default SignupForm;
