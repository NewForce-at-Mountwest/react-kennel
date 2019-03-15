import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class ResourceCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <img src={this.props.resource.image} className="icon--dog" />
            {this.props.resource.name}
            <Link className="nav-link" to={`/${this.props.route}/${this.props.resource.id}`}>
              Details
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}