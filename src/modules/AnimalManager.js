const animalManager = {
  getAll: () => {
    return fetch(
      "http://localhost:5002/animals?_expand=owner&_expand=species"
    ).then(animals => animals.json());
  },
  deleteAnimal: id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(() =>
        fetch("http://localhost:5002/animals?_expand=owner&_expand=species")
      )
      .then(animals => animals.json());
  }
};

export default animalManager;
