import React from 'react';
import logo from '../assets/Logo/Logo.svg'

const Header = () => (
  <header>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
    </nav>
  </header>
);

export default Header;
