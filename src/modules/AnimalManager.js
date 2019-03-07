export default {
  getAll: () => {
    return fetch("http://localhost:5002/animals?_expand=species").then(animals =>
      animals.json()
    );
  },
  deleteAnimal: id => {
    return fetch(`http://localhost:5002/animals/${id}`, {
      method: "DELETE"
    })
      .then(() => fetch(`http://localhost:5002/animals`))
      .then(e => e.json());
  }
};
