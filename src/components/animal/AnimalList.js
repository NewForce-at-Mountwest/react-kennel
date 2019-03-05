import React, { Component } from "react";
class AnimalList extends Component {
  render() {
    return (
      <article>
        <h1>Animals</h1>
        {this.props.animals.map(animal => {
          return <div key={animal.id}>{animal.name}</div>
        })}
      </article>
    );
  }
}

export default AnimalList;
