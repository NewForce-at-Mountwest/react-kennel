export default {
    getAll: () => {
      return fetch("http://localhost:5002/owners").then(owners =>
        owners.json()
      );
    },
    getOne: (id) => {
      return fetch(`http://localhost:5002/owners/${id}`).then(owner => owner.json())
    },
    deleteOwner: id => {
      return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
      })
    }
  };