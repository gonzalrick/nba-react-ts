import React, { FC, useState } from 'react';

import logo from '../../assets/logo.svg';

export const Navbar: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  return (
    <nav
      className="navbar has-shadow is-spaced is-shadowed"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item">
            <img src={logo} />
            <span className="is-size-4 ml-2">Ball Pass</span>
          </a>
          <a
            role="button"
            className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={toggleMenu}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu is-shadowless ${isActive ? 'is-active' : ''}`}
        >
          <div className="navbar-end">
            <a className="navbar-item">Standings</a>
            <a className="navbar-item">Teams</a>
          </div>
        </div>
      </div>
    </nav>
  );
};
