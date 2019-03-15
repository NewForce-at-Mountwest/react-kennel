import React, { Component } from "react";
import ResourceCard from "./ResourceCard";
import "./ResourceCard.css";

export default class DetailCard extends Component {
  capitalize = word => word.charAt(0).toUpperCase() + word.slice(1);
  render() {
    const singleResource =
      this.props.resources.find(
        r => r.id === parseInt(this.props.match.params.resourceId)
      ) || {};

    return (
      <section className="animal">
        <div key={singleResource.id} className="card detail-card">
          <div className="card-body">
            <section className="card-title">
              <img src={singleResource.image} className="icon--dog" />
            </section>

            {Object.keys(singleResource).map(singleKey => {
              return (
                <section key={singleKey}>
                  {!singleKey.includes("id") &&
                  !singleKey.includes("Id") &&
                  !singleKey.includes("image") &&
                  !Array.isArray(singleResource[singleKey]) ? (
                    <div>
                      <h6>{this.capitalize(singleKey)}</h6>
                      <p>{singleResource[singleKey]}</p>
                    </div>
                  ) : (
                    ""
                  )}

                  {Array.isArray(singleResource[singleKey]) &&
                  singleResource[singleKey].length > 0 ? (
                    <section>
                      <h4>{this.capitalize(singleKey)}</h4>
                      <div>
                        {singleResource[singleKey].map(childResource => (
                          <ResourceCard
                            resource={childResource}
                            route={singleKey}
                          />
                        ))}
                      </div>
                    </section>
                  ) : (
                    ""
                  )}
                </section>
              );
            })}
          </div>
          <button
            href="#"
            className="btn btn-danger"
            onClick={() =>
              this.props
                .deleteResource(singleResource.id)
                .then(() => this.props.history.push(`/${this.props.route}`))
            }
          >
            Delete
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push(
                `/${this.props.route}/${singleResource.id}/edit`
              );
            }}
          >
            Edit
          </button>
        </div>
      </section>
    );
  }
}
