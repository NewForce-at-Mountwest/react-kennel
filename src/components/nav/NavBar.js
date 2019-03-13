import React, { Component } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends Component {
  // When they click the logout button, clear both local and session storage
  logout() {
    sessionStorage.clear();
    localStorage.clear();
  }
  render() {
    return (
      <nav className="navbar navbar-light fixed-top light-blue flex-md-nowrap p-0 shadow">
        <ul className="nav nav-pills">
          <li className="nav-item">
            {/* This is a ternary statement!! It checks to see if there's anything in either local or session storage. If so, it renders the "Sign out" button. If not, it renders a "Log in" button */}
            {sessionStorage.getItem("credentials") === null &&
            localStorage.getItem("credentials") === null ? (
              <Link className="nav-link" to="/login">
                Sign In
              </Link>
            ) : (
              <Link className="nav-link" to="/" onClick={this.logout}>
                Sign Out
              </Link>
            )}
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Locations
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/animals">
              Animals
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/employees">
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/owners">
              Owners
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default NavBar;
