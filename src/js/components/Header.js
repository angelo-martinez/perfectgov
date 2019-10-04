import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Consumer } from "../store/appContext";

export const Header = () => {

const [ queryString, seQueryString ] = useState('/');

  useEffect(() => {
    seQueryString(window.location.pathname);
  });

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">PerfectGov</a>
        <Consumer>
          {({ store }) => {
            return (
              <button className={`navbar-toggler ${store.opernSidebar ? 'collapsed' : ''}`} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            )
          }}
        </Consumer>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${queryString == '/' ? 'active' : ''}`}>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className={`nav-item ${queryString == '/about' ? 'active' : ''}`}>
              <Link to="/about" className="nav-link">
                About us
              </Link>
            </li>
            <li className={`nav-item ${queryString == '/goal' ? 'active' : ''}`}>
              <Link to="/goal" className="nav-link">
                Project Goals
              </Link>
            </li>
            <li className={`nav-item ${queryString == '/rules' ? 'active' : ''}`}>
              <Link to="/rules" className="nav-link">
                Rules
              </Link>
            </li>
            <Consumer>
            {({ store, actions }) => {
              return (
                <li className={`nav-item ${store.opernSidebar ? 'activex1' : ''}`} onClick={() => actions.setSidebar()}>
                  <Link to="#" className="nav-link">Account</Link>
                </li>
              )
            }}
            </Consumer>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
