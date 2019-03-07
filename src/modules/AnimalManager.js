export default {
  getAll: () => {
    return fetch("http://localhost:5002/animals").then(animals =>
      animals.json()
    );
  },
//   deleteAnimal: () => {

//   }
};


