import React from 'react';
import { Link } from 'react-router-dom'
import './nav.css';

function Nav() {
  return (
    <section id="navbar">
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
    </section>
  );
}

export default Nav;
