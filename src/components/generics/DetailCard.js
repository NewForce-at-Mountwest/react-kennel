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
                  {/* If the key is anything OTHER than a PK, an FK, or an image, go ahead and print it with the key and the value */}
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

                  {/* If the loop gets to a non-empty  array (i.e. nested data from an _expand or _embed), loop through the array and print some more resource cards for the nested data) */}
                  {Array.isArray(singleResource[singleKey]) &&
                  singleResource[singleKey].length > 0 ? (
                    <section>
                      <h4>{this.capitalize(singleKey)}</h4>
                      <div>
                        {singleResource[singleKey].map(childResource => (
                          <ResourceCard
                            key={childResource.id}
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
