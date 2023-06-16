// import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className="nav-container">
      <h2>Bookstore CMS</h2>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <button type="button">My Icon</button>
    </div>
  );
}

export default NavBar;
