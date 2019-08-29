import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">
                Notes App
              </a>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <Link to="/Notes" className="nav-link">
                  Notes
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/todolist" className="nav-link">
                  Todo list
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
export default Header;
