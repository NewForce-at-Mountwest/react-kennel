import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
import OwnerList from "./owner/OwnerList";

class ApplicationViews extends Component {
  employeesFromAPI = [
    { id: 1, name: "Jessica Younker" },
    { id: 2, name: "Jordan Nelson" },
    { id: 3, name: "Zoe LeBlanc" },
    { id: 4, name: "Blaise Roberts" }
  ];

  locationsFromAPI = [
    { id: 1, name: "Nashville North", address: "500 Circle Way" },
    { id: 2, name: "Nashville South", address: "10101 Binary Court" }
  ];

  animalsFromAPI = [
    { id: 1, name: "Doodles" },
    { id: 2, name: "Jack" },
    { id: 3, name: "Angus" },
    { id: 4, name: "Henley" },
    { id: 5, name: "Derkins" },
    { id: 6, name: "Checkers" }
  ];

  ownersFromAPI = [
    {
      id: 1,
      name: "Ryan"
    },
    {
      id: 2,
      name: "Dale"
    },
    {
      id: 3,
      name: "Russ"
    },
    {
      id: 4,
      name: "Sydney"
    },
    {
      id: 5,
      name: "Megan"
    },
    {
      id: 6,
      name: "Michelle"
    },
    {
      id: 7,
      name: "Josh"
    }
  ];

  state = {
    employees: this.employeesFromAPI,
    locations: this.locationsFromAPI,
    animals: this.animalsFromAPI,
    owners: this.ownersFromAPI
  };

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
