export default {
  getAll: () => {
    return fetch("http://localhost:5002/species").then(employees =>
      employees.json()
    );
  }
};
