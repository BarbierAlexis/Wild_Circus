import React from 'react';
import { Link } from 'react-router-dom';
import './Css/Navbar.css';

function Navbar() {
  return (
    <>
      <h1><Link to="/">Wild Circus</Link></h1>
      <button><Link to="/jokebox">jokebox</Link></button>
      <button><Link to="/jokepost">jokepost</Link></button>
      <button><Link to="/contact">contact</Link></button>
      <button><Link to="/gallery">gallery</Link></button>
    </>
  );
}

export default Navbar;