import React, { Component } from "react";
import dog from "./DogIcon.png";
import "./Animal.css";

export default class AnimalList extends Component {

  state={
    animalsToRender: []
  }

  filterAnimals(evt){
    console.log(evt.target.value)
  }
  render() {
    return (
      <section>
        <select onChange={this.filterAnimals} >
          {this.props.species.map(singleSpecies => {
            return (
              <option key={singleSpecies.id}  value={singleSpecies.id}>View all {singleSpecies.name}s</option>
            );
          })}
        </select>
        <section className="animals">
          {this.props.animals.map(animal => (
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
