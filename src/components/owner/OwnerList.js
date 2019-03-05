import React, { Component } from "react";
class OwnerList extends Component {
  render() {
    return (
      <article>
        <h1>Owners</h1>
        {this.props.owners.map(owner => {
          return <div key={owner.id}>
          {owner.name}
          </div>
        })}
      </article>
    );
  }
}

export default OwnerList;