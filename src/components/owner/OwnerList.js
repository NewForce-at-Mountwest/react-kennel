import React, { Component } from "react";
import ResourceCard from "../generics/ResourceCard";
export default class OwnerList extends Component {
  render() {
    return (
      <article>
        <h1>Owners</h1>
        {this.props.owners.map(owner => {
          return (
            <ResourceCard key={owner.id} resource={owner} route="owners" />
          );
        })}
      </article>
    );
  }
}
