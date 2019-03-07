import React, { Component } from "react";
import "./OwnerList.css";
export default class OwnerList extends Component {
  render() {
    return (
      <article>
        <h1>Owners</h1>
        {this.props.owners.map(owner => {
          return (
            <div
              key={owner.id}
              className={owner.goldMembership ? "gold card" : "card"}
            >
              <div className="card-body">
                <h5 className="card-title">
                  <p>{owner.name}</p>
                  {owner.animals.length > 0 ? (
                    <div>
                      <p>Pets:</p>
                      <ul>
                        {owner.animals.map(animal => {
                          return <li key={animal.id}>{animal.name}</li>;
                        })}
                      </ul>
                    </div>
                  ) : (
                    ""
                  )}
                  <button
                    className="btn btn-danger"
                    href="#"
                    onClick={() => this.props.deleteOwner(owner.id)}
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
