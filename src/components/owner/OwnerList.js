import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";
import { Link } from "react-router-dom";
export default class OwnerList extends Component {
  state = {
    owners: []
  };

  componentDidMount() {
    OwnerManager.getAll().then(parsedOwners =>
      this.setState({ owners: parsedOwners })
    );
  }

  deleteOwner = id => {
    OwnerManager.deleteOwner(id)
      .then(OwnerManager.getAll)
      .then(parsedOwners => {
        this.setState({ owners: parsedOwners });
      });
  };

  render() {
    return (
      <article>
        <h1>Owners</h1>
        {this.state.owners.map(owner => {
          return (
            <div key={owner.id}>
              <h4>{owner.name}</h4>

              <Link
                className="card-link"
                to={`/owners/${owner.id}`}
              >
                Details
              </Link>
            </div>
          );
        })}
      </article>
    );
  }
}
