import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ResourceCard.css"

const ResourceCard = props => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <img src={props.resource.image} className="icon--dog" />
          {props.resource.name}
          <Link
            className="nav-link"
            to={`/${props.route}/${props.resource.id}`}
          >
            Details
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default ResourceCard;