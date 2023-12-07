// Navbar.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaCog, FaInfoCircle, FaPhone } from 'react-icons/fa';
import './navbar.css'; // Importation du fichier de styles personnalisés

const Navbar = () => {
  return (
    <nav className="navbar is-success" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <div className="navbar-item">
          <NavLink to="/">
            <span className="greenclimate-text is-size-4">GreenClimate</span>
          </NavLink>
        </div>

        <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-end"> {/* Utilisation de 'navbar-end' pour aligner les éléments à droite */}
          <NavLink to="/" className="navbar-item" activeClassName="is-active">
            <FaHome className="icon is-medium" />
            <span className="navlink-text">Accueil</span>
          </NavLink>
          <NavLink to="/services" className="navbar-item" activeClassName="is-active">
            <FaCog className="icon is-medium" />
            <span className="navlink-text">Services</span>
          </NavLink>
          <NavLink to="/about" className="navbar-item" activeClassName="is-active">
            <FaInfoCircle className="icon is-medium" />
            <span className="navlink-text">À propos</span>
          </NavLink>
          <NavLink to="/contact" className="navbar-item" activeClassName="is-active">
            <FaPhone className="icon is-medium" />
            <span className="navlink-text">Contact</span>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
