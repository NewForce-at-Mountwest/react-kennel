import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

class ApplicationViews extends Component {


  state = {
    employees: [],
    locations: [],
    animals: [],
    owners: []
  };

  componentDidMount(){
    const newState = {};
    fetch("http://localhost:5002/employees")
    .then(employees => employees.json())
    .then(parsedEmployees => {
      newState.employees = parsedEmployees;
      return fetch("http://localhost:5002/locations")
    }).then(locations => locations.json())
    .then(parsedLocations => {
      newState.locations = parsedLocations;
      return fetch("http://localhost:5002/owners")
    }).then(owners => owners.json())
    .then(parsedOwners => {
      newState.owners = parsedOwners;
      return fetch("http://localhost:5002/animals?_expand=species")
    }).then(animals => animals.json())
    .then(parsedAnimals => {
      newState.animals = parsedAnimals;
      this.setState(newState);
    })
  }





  render() {
    console.log("it's renderiiiiing!");
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
            return <AnimalList animals={this.state.animals} />;
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
