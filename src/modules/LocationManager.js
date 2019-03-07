export default {
    getAll: () => {
      return fetch("http://localhost:5002/locations").then(employees =>
        employees.json()
      );
    }
  };