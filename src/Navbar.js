import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Css/Navbar.css';

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <a className="navbar-brand" href="/">WILD CIRCUS</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink exact to="/jokebox" className="main-nav" activeClassName="main-nav-active" >
                Joke Box 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/gallery" className="main-nav" activeClassName="main-nav-active" >
                Gallery 
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact to="/contact" className="main-nav" activeClassName="main-nav-active" >
                Contact 
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;