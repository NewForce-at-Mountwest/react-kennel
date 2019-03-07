import React, { Component } from "react";
class AnimalList extends Component {
  render() {
    return (
      <article>
        <h1>Animals</h1>
        {this.props.animals.map(animal => {
          return <div key={animal.id}>
          <h4>{animal.name}</h4>
          <p>{animal.species.name}</p>
          <img src={animal.species.icon} alt="picture of animal" />

          </div>
        })}
      </article>
    );
  }
}

export default AnimalList;
