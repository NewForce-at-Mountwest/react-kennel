import React, { Component } from "react";
class EmployeeList extends Component {

  render() {
    return (
      <article>
      <h1>Owners</h1>
      {this.props.employees.map(employee => {
        return (
          <div
            key={employee.id}
            className="card"
          >
            <div className="card-body">
              <h5 className="card-title">
                <p>{employee.name}</p>
                <button
                  className="btn btn-danger"
                  href="#"
                  onClick={() => this.props.deleteEmployee(employee.id)}
                >
                  Delete
                </button>
              </h5>
            </div>
          </div>
        );
      })}
    </article>
    );
  }
}

export default EmployeeList;
