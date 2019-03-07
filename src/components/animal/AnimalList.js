import React, { Component } from "react";
import "./Animal.css";

export default class AnimalList extends Component {
  state = {
    animalsToRender: []
  };

  filterAnimals = evt => {
    const matchingAnimals = this.props.animals.filter(
      animal => animal.speciesId == evt.target.value
    );
    this.setState({ animalsToRender: matchingAnimals });
  };




  render() {
    const animalsToRender = this.state.animalsToRender.length > 0 ? this.state.animalsToRender : this.props.animals;
    return (
      <section>
        <select onClick={this.filterAnimals}>
          {this.props.species.map(singleSpecies => {
            return (
              <option key={singleSpecies.id} value={singleSpecies.id}>
                View all {singleSpecies.name}s
              </option>
            );
          })}
        </select>
        <section className="animals">
          {animalsToRender.map(animal => (
            <div key={animal.id} className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <img
                    className="icon"
                    src={animal.species.icon}
                    alt="picture of animal"
                  />
                  <p>{animal.name}</p>
                  <p>{animal.species.name}</p>
                  <p>Owner: {animal.owner.name}</p>

                  <button
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.props.deleteAnimal(animal.id)}
                  >
                    Delete
                  </button>
                </h5>
              </div>
            </div>
          ))}
        </section>
      </section>
    );
  }
}
