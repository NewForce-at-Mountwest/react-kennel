import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./animal/AnimalList";
import AnimalDetail from "./animal/AnimalDetail";
import AnimalForm from "./animal/AnimalForm";
import AnimalEditForm from "./animal/AnimalEditForm";
import LocationList from "./location/LocationList";
import EmployeeList from "./employee/EmployeeList";
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
            return <LocationList locations={this.state.locations} />;
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList {...props} animals={this.state.animals} />;
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
          path="/animals/:animalId(\d+)"
          render={props => {
            return (
              <AnimalDetail
                {...props}
                deleteAnimal={this.deleteAnimal}
                animals={this.state.animals}
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
          path="/employees"
          render={props => {
            return <EmployeeList employees={this.state.employees} animals={this.state.animals} />;
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
