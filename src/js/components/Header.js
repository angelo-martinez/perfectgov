import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Header = () => {

const [ queryString, seQueryString ] = useState('/');

  useEffect(() => {
    seQueryString(window.location.pathname);
    console.log(queryString);
  });

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a className="navbar-brand" href="#">PerfectGov</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

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
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
