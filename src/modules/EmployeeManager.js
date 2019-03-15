export default {
    getAll: () => {
      return fetch("http://localhost:5002/employees?_embed=animals").then(employees =>
        employees.json()
      );
    },
    deleteEmployee: id => {
      return fetch(`http://localhost:5002/employees/${id}`, {
        method: "DELETE"
      })
        .then(() => fetch(`http://localhost:5002/employees`))
        .then(e => e.json());
    }
  };