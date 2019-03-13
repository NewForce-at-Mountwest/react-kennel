import React, { Component } from "react";
import EmployeeAPIManager from "../../modules/EmployeeManager";
export default class EmployeeForm extends Component {
  // Set initial state
  state = {
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    errorMessage: ""
  };

  // Update whatever the user types in to state as they type
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  constructNewEmployee = evt => {
    evt.preventDefault();

    // Before we do anything else, let's make sure their two passwords match.
    if (this.state.password !== this.state.passwordConfirm) {
      const errorMessage = "Your passwords didn't match. Please try again.";
      this.setState({ errorMessage: errorMessage });
      return null; // returning null just bumps us out of the function so the rest of it doesnt' run.
    }

    // Build our employee object for the database
    const employeeToPost = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    };

    // When the user filled out the register form, they entered an email address. We need to make sure that email address is unique, so let's search the database for other users who may have it.
    EmployeeAPIManager.getByEmail(this.state.email).then(employee => {
      // If that email address already exists in the database, throw a helpful error message
      if (employee.length > 0) {
        const errorMessage =
          "We're sorry, that email already exists. Would you like to log in instead?";
        this.setState({ errorMessage: errorMessage });
      } else {
        // If the email isn't in the db, go ahead and register
        this.props.registerEmployee(employeeToPost).then(employee => {
          console.log(employee);
          sessionStorage.setItem("credentials", JSON.stringify(employee.id));
          this.props.history.push("/");
          this.props.refreshEmployees(); // This function is in our ApplicationViews component. It fetchs all the employees from the database and sets them to state in ApplicationViews so that we see our new user when we go to the /employees route.
        });
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <form className="employeeForm">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="form-control"
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm">Confirm Password</label>
            <input
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              className="form-control"
              onChange={this.handleFieldChange}
            />
          </div>
          <h4>{this.state.errorMessage}</h4>
          <button
            type="submit"
            onClick={this.constructNewEmployee}
            className="btn btn-primary"
          >
            Submit
          </button>
        </form>
      </React.Fragment>
    );
  }
}
