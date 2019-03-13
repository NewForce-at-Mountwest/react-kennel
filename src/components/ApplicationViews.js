import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import EmployeeForm from "./employee/EmployeeForm";
import OwnerList from "./owner/OwnerList";
import AnimalAPIManager from "../modules/AnimalManager";
import EmployeeAPIManager from "../modules/EmployeeManager";
import OwnerAPIManager from "../modules/OwnerManager";
import LocationAPIManager from "../modules/LocationManager";
import Login from "./authentication/Login";

class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  };

  // This method checks to see if there's anything in either local or session storage. If either one of them don't return null (i.e. if there's user info in either place), it will return true. 
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null || localStorage.getItem("credentials") !== null;

  deleteAnimal = id => {
    return AnimalAPIManager.deleteAnimal(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  };

  addAnimal = animalObject =>
    AnimalAPIManager.postAnimal(animalObject)
      .then(() => AnimalAPIManager.getAll())
      .then(animals =>
        this.setState({
          animals: animals
        })
      );

  registerEmployee = employeeObject =>
    EmployeeAPIManager.postEmployee(employeeObject);

  refreshEmployees = () =>
    EmployeeAPIManager.getAll().then(parsedEmps => {
      this.setState({ employees: parsedEmps });
    });

  componentDidMount() {
    const newState = {};
    AnimalAPIManager.getAll()
      .then(animals => (newState.animals = animals))
      .then(OwnerAPIManager.getAll)
      .then(owners => (newState.owners = owners))
      .then(EmployeeAPIManager.getAll)
      .then(employees => (newState.employees = employees))
      .then(LocationAPIManager.getAll)
      .then(locations => (newState.locations = locations))
      .then(() => this.setState(newState));
  }

  render() {
    return (
      <div className="container-div">
        <Route
          path="/login"
          render={props => {
            return <Login {...props} />;
          }}
        />
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationList locations={this.state.locations} />;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            return this.isAuthenticated() ? (
              <AnimalList {...props} animals={this.state.animals} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return this.isAuthenticated() ? (
              <AnimalForm
                {...props}
                addAnimal={this.addAnimal}
                employees={this.state.employees}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/animals/:animalId(\d+)"
          render={props => {
            return this.isAuthenticated() ? (
              <AnimalDetail
                {...props}
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return this.isAuthenticated() ? (
              <EmployeeList employees={this.state.employees} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
        <Route
          path="/register"
          render={props => {
            return (
              <EmployeeForm
                {...props}
                registerEmployee={this.registerEmployee}
                refreshEmployees={this.refreshEmployees}
              />
            );
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return this.isAuthenticated() ? (
              <OwnerList owners={this.state.owners} />
            ) : (
              <Redirect to="/login" />
            );
          }}
        />
      </div>
    );
  }
}

export default ApplicationViews;
