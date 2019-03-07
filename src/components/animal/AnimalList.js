import React, { Component } from "react";
class AnimalList extends Component {

  render() {
    const animalsWithOwners = this.props.animals.map(singleAnimal => {
      const matchingAnimalOwnerEntries = this.props.animalOwners.filter(
        singleAnimalOwnerEntry => {
          return singleAnimalOwnerEntry.animalId === singleAnimal.id;
        }
      );

      const matchingOwnerObjects = matchingAnimalOwnerEntries.map(
        joinTableEntry => {
          const matchingOwner = this.props.owners.find(singleOwner => {
            return singleOwner.id === joinTableEntry.ownerId;
          });
          return matchingOwner;
        }
      );

      return {
        id: singleAnimal.id,
        name: singleAnimal.name,
        owners: matchingOwnerObjects
      };
    });



    return (
      <article>
        <h1>Animals</h1>
        {animalsWithOwners.map(animal => {
          return (
            <div key={animal.id}>
              <h3>{animal.name}</h3>
              <h4>Owners:</h4>
              {animal.owners.map(singleOwner => (
                <p key={singleOwner.id}>{singleOwner.name}</p>
              ))}
            </div>
          );
        })}
      </article>
    );
  }
}

export default AnimalList;
