import React, { Component } from "react";
import ResourceCard from "../generics/ResourceCard";

class ResourceList extends Component {
  render() {
    const singularCollection =
      this.props.route.charAt(0).toUpperCase() +
      this.props.route.slice(1, this.props.route.length - 1);
    return (
      <article>
        <div className="animalButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push(`/${this.props.route}/new`);
            }}
          >
            Add
          </button>
        </div>
        <h1>{singularCollection}</h1>
        {this.props.resources.map(singleResource => {
          return (
            <ResourceCard
              key={singleResource.id}
              resource={singleResource}
              route={this.props.route}
            />
          );
        })}
      </article>
    );
  }
}

export default ResourceList;
