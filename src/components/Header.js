import React from 'react';
import '../style/Header.css';
import { NavLink } from 'react-router-dom';
import userLogo from '../assets/user-solid.svg';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
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
      <nav>
        <h1> Bookstore CMS</h1>
        <ul>
          {createLinks()}
        </ul>
      </nav>
      <img src={userLogo} alt="userLogo" />
    </header>
  );
};

export default Header;
