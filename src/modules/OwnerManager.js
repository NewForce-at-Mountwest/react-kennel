export default {
    getAll: () => {
      return fetch("http://localhost:5002/owners").then(owners =>
        owners.json()
      );
    },
    deleteEmployee: id => {
      return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
      })
        .then(() => fetch(`http://localhost:5002/owners`))
        .then(e => e.json());
    }
  };