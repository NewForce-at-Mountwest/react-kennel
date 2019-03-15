import React, { Component } from "react";
import ResourceCard from "../generics/ResourceCard"
class LocationList extends Component {
  render() {
    return (
      <article>
        <h1>Locations</h1>
        {this.props.locations.map(location => {
          return <ResourceCard key={location.id} resource={location} route="locations" />
        })}
      </article>
    );
  }
}

export default LocationList;
