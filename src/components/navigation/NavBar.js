import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { Link } from 'react-router';

class NavBar extends Component {

  renderType() {
    if (localStorage.getItem("token")) {
      return (
        <div>
          <Link to={"/#/user/" + localStorage.getItem("user") + "/dashboard"}>
            <div className="brand">
              <h2>LEJR</h2>
            </div>
          </Link>
          <div className="nav-items">
            <ul>
              <Link to={"/#/user/" + localStorage.getItem("user") + "/dashboard"}>
                <li>
                  Dashboard
                </li>
              </Link>
              <Link to={"/"}>
                <li onClick={event => localStorage.clear()}>
                  Sign Out
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <Link to={"/"}>
            <div className="brand">
              <h2>LEJR</h2>
            </div>
          </Link>
          <div className="nav-items">
            <ul>
              <Link to={"/#/user/signin"}>
                <li>
                  Sign In
                </li>
              </Link>
              <Link to={"/#/user/signup"}>
                <li>
                  Sign Up
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )
    }
  }
  render() {
    return (
      <nav>
        {this.renderType()}
      </nav>
    )
  }
}

export default NavBar;
