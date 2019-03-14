const remoteURL = "http://localhost:5002";
export default {
  getAll: () => {
    return fetch("http://localhost:5002/animals").then(animals =>
      animals.json()
    );
  },
  getOne: id =>
    fetch(`${remoteURL}/animals/${id}`).then(animal => animal.json()),
  put(editedAnimal) {
    return fetch(`${remoteURL}/animals/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  },
  deleteAnimal: id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json());
  },
  postAnimal(newAnimal) {
    return fetch(`${remoteURL}/animals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newAnimal)
    }).then(data => data.json());
  }
};
