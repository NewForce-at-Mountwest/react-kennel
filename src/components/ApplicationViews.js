import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";
import AnimalAPIManager from "../modules/AnimalManager";
import EmployeeAPIManager from "../modules/EmployeeManager";
import OwnerAPIManager from "../modules/OwnerManager";
import LocationAPIManager from "../modules/LocationManager";

class ApplicationViews extends Component {
  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  };

  deleteAnimal = id => {
    AnimalAPIManager.deleteAnimal(id).then(animals =>
      this.setState({
        animals: animals
      })
    );
  };

  deleteEmployee = id => {
    EmployeeAPIManager.deleteEmployee(id).then(employees =>
      this.setState({
        employees: employees
      })
    );
  };

  deleteOwner = id => {
    OwnerAPIManager.deleteOwner(id)
    .then(owners => this.setState({
        owners: owners
    })
  )
}

  componentDidMount() {
    const newState = {};
    AnimalAPIManager.getAll()
    .then(animals => newState.animals = animals)
    .then(OwnerAPIManager.getAll)
    .then(owners => newState.owners = owners)
    .then(EmployeeAPIManager.getAll)
    .then(employees => newState.employees = employees)
    .then(LocationAPIManager.getAll)
    .then(locations => newState.locations = locations)
    .then(() => this.setState(newState))
  }

  render() {
    return (
      <div className="container-div">
        <Route
          exact
          path="/"
          render={props => {
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          path="/animals"
          render={props => {
            return (
              <AnimalList
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
              />
            );
          }}
        />
        <Route
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} />;
          }}
        />
        <Route
          path="/owners"
          render={props => {
            return <OwnerList owners={this.state.owners} />;
          }}
        />
      </div>
    );
  }
}

export default ApplicationViews;
