import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import Menu from './menu-container';

import './navbar.css';

const Navbar = ({ shadow }) => (
  <nav className={shadow ? 'navbar navbar__shadow' : 'navbar'}>
    <span className="navbar__left">
      <Link className="navbar__home" to="/">Gingras lab</Link>
      <span className="navbar__links">
        <Link to="/research/">Research</Link>
        <Link to="/resources/">Resources</Link>
        <Link to="/publications/">Publications</Link>
        <Link to="/people/">People</Link>
        <Link to="/news/">News & Openings</Link>
      </span>
    </span>
    <span className="navbar__right">
      <Link to="/contact/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby="envelopeIcon"
          height="30"
          role="img"
          viewBox="0 0 448 512"
        >
          <title id="envelopeIcon">Envelope</title>
          <path d="M224 320c-26.72.13-50.54-21.67-64.7-32C97.33 243 78 228.57 64 217.77V360a24 24 0 0 0 24 24h272a24 24 0 0 0 24-24V217.77c-14 10.8-33.33 25.24-95.28 70.2C275 298 250.88 320.13 224 320zm136-192H88a24 24 0 0 0-24 24v25.17c24.35 19 23.43 19.12 114.12 84.93 10.51 7.67 31.38 26.12 45.88 25.9 14.49.22 35.38-18.24 45.88-25.9 90.69-65.81 89.75-66 114.12-84.93V152a24 24 0 0 0-24-24z" className="fa-primary" />
        </svg>
      </Link>
      <Menu />
    </span>
  </nav>
);

Navbar.defaultProps = {
  shadow: true,
};

Navbar.propTypes = {
  shadow: PropTypes.bool,
};

export default Navbar;
