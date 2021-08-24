import React from 'react';
import '../style/Header.css';
// import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  const createLinks = () => links.map((link) => (
    <li key={link.id}>
      <NavLink
        to={link.path}
        activeClassName="active-link"
        exact
      >
        {link.text}
      </NavLink>
    </li>
  ));

  return (
    <header>
      <h1> Bookstore </h1>
      <nav>
        <ul>
          {createLinks()}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
