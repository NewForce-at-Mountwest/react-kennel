import React, { Component } from "react";
import AnimalCard from "../animal/AnimalCard";
class EmployeeList extends Component {
  render() {
    return (
      <article>
        <h1>Employees</h1>
        {this.props.employees.map(singleEmployee => {
          return (
            <div key={singleEmployee.id}>
              <h4>{singleEmployee.name}</h4>
              <section>
                {this.props.animals
                  .filter(animal => animal.employeeId === singleEmployee.id)
                  .map(matchingAnimal => {
                    return <AnimalCard key={matchingAnimal.id} animal={matchingAnimal} />
                })}
              </section>
            </div>
          );
        })}
      </article>
    );
  }
}

export default EmployeeList;
