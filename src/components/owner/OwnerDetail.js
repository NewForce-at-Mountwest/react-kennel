import React, { Component } from "react";
import OwnerManager from "../../modules/OwnerManager";

export default class OwnerDetail extends Component {
  state = {
    owner: {}
  };

  componentDidMount() {
    OwnerManager.getOne(this.props.match.params.ownerId).then(owner =>
      this.setState({ owner: owner })
    );
  }
  render() {
    return (
      <section className="animal">
        <div key={this.state.owner.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              {this.state.owner.name}
            </h4>
          </div>
        </div>
      </section>
    );
  }
}
