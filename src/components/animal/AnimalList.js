import React, { Component } from "react";

import "./Animal.css";

import AnimalCard from "./AnimalCard";

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
            <AnimalCard key={singleAnimal.id} animal={singleAnimal} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}
