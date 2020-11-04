import React from 'react';
import cn from 'classnames';
import s from './Header.module.scss';
// import logo from './Logo.svg;

const Header = () => {
  return (
    <header className={cn(s.header)}>
      {/* <img src={logo} alt="logo"/> */}
      <nav>
        <ul>
          <li className={cn(s.navLinks)}>
            <a href="localhost:3000">Home</a>
          </li>
          <li className={cn(s.navLinks)}>
            <a href="localhost:3000">Pokedex</a>
          </li>
          <li className={cn(s.navLinks)}>
            <a href="localhost:3000">Legendaries</a>
          </li>
          <li className={cn(s.navLinks)}>
            <a href="localhost:3000">Documentation</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
