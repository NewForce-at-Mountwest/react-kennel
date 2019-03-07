import React, { Component } from "react";
export default class OwnerList extends Component {
  render() {
    return (
      <article>
        <h1>Owners</h1>
        {this.props.owners.map(owner => {
          return <div key={owner.id} className={owner.goldMember ? "gold card" : "card"}>
          <div className="card-body">
            <h5 className="card-title">
              <p>{owner.name}</p>
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
        })}
      </article>
    );
  }
}


