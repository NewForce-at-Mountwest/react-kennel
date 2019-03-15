import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";

import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import ResourceList from "./generics/ResourceList";
import DetailCard from "./generics/DetailCard";
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

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  // isAuthenticated(){
  //   const credentials = sessionStorage.getItem("credentials");
  //   if(credentials === null){
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }

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

  updateAnimal = editedAnimalObject => {
    return AnimalAPIManager.put(editedAnimalObject)
      .then(() => AnimalAPIManager.getAll())
      .then(animals => {
        this.setState({
          animals: animals
        });
      });
  };

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
        <Route path="/login" component={Login} />
        <Route
          exact
          path="/"
          render={props => {
            return <ResourceList resources={this.state.locations} route="locations"/>;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <ResourceList {...props} resources={this.state.animals} route="animals"/>;
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        <Route
          path="/animals/new"
          render={props => {
            return (
              <AnimalForm
                {...props}
                addAnimal={this.addAnimal}
                employees={this.state.employees}
              />
            );
          }}
        />
        <Route
          exact
          path="/animals/:resourceId(\d+)"
          render={props => {
            return (
              <DetailCard
                {...props}
                resources={this.state.animals}
                deleteResource={this.deleteAnimal}
                route="animals"
              />
            );
          }}
        />
        <Route
          path="/animals/:animalId(\d+)/edit"
          render={props => {
            return (
              <AnimalEditForm
                {...props}
                employees={this.state.employees}
                updateAnimal={this.updateAnimal}
              />
            );
          }}
        />
        <Route
        exact
          path="/employees"
          render={props => {
            return <ResourceList resources={this.state.employees}  route="employees" />;
          }}
        />
        <Route
          exact
          path="/employees/:resourceId(\d+)"
          render={props => {
            return (
              <DetailCard
                {...props}
                resources={this.state.employees}
                deleteResource={this.deleteEmployee}
                route="employees"
              />
            );
          }}
        />

        <Route
          path="/owners"
          render={props => {
            return <ResourceList resources={this.state.owners} route="owners" />;
          }}
        />
      </div>
    );
  }
}

export default ApplicationViews;
