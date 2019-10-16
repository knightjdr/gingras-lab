import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link/link';
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
        Contact
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
