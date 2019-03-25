import React, { Component } from "react";
import { Link } from "react-router-dom";
import dog from "./DogIcon.png";
import PropTypes from "prop-types";

class AnimalCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            <img src={dog} className="icon--dog" />
            {this.props.animal.name}
            <Link className="nav-link" to={`/animals/${this.props.animal.id}`}>
              Details
            </Link>
          </h5>
        </div>
      </div>
    );
  }
}
AnimalCard.propTypes = {
  animal: PropTypes.object.isRequired
}

export default AnimalCard;
