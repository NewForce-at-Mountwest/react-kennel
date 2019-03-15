import React, { Component } from "react";

import "./Animal.css";

import ResourceCard from "../generics/ResourceCard";

export default class AnimalList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="animalButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/animals/new");
            }}
          >
            Admit Animal
          </button>
        </div>
        <section className="animals">
          {this.props.animals.map(singleAnimal => (
            <ResourceCard deleteResource={this.props.deleteAnimal} key={singleAnimal.id} resource={singleAnimal} route="animals" />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
