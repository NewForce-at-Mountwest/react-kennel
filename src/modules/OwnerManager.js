export default {
    getAll: () => {
      return fetch("http://localhost:5002/owners?_embed=animals").then(owners =>
        owners.json()
      );
    },
    deleteOwner: id => {
      return fetch(`http://localhost:5002/owners/${id}`, {
        method: "DELETE"
      })
        .then(() => fetch("http://localhost:5002/owners?_embed=animals"))
        .then(e => e.json());
    }
  };