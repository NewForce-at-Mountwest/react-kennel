import React, { Component } from "react";
import AnimalCard from "../animal/AnimalCard";
import ResourceCard from "../generics/ResourceCard";
class EmployeeList extends Component {
  render() {
    return (
      <article>
        <h1>Employees</h1>
        {this.props.employees.map(singleEmployee => {
          return (
            <div key={singleEmployee.id}>
              <ResourceCard resource={singleEmployee} route="employees" />
              <section>
                {this.props.animals
                  .filter(animal => animal.employeeId === singleEmployee.id)
                  .map(matchingAnimal => {
                    return <ResourceCard key={matchingAnimal.id} resource={matchingAnimal} route="animals" />
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
