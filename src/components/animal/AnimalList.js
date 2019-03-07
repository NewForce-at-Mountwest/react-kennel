import React, { Component } from "react";
import dog from "./DogIcon.png";
import "./Animal.css";

export default class AnimalList extends Component {
  render() {
    return (
      <section className="animals">
        {this.props.animals.map(animal => (
          <div key={animal.id} className="card">
            <div className="card-body">
              <h5 className="card-title">
              <img src={animal.species.icon} alt="picture of animal" />
              <h4>{animal.name}</h4>
          <p>{animal.species.name}</p>

                <button className="btn btn-danger"
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
    );
  }
}
