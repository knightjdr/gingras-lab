import PropTypes from 'prop-types';
import React, { forwardRef } from 'react';

import Link from '../link/link';

const Menu = forwardRef((
  {
    closeMenu,
    handleClick,
    open,
  },
  ref,
) => (
  <span className="navbar__menu-container">
    <button
      className="navbar__menu-button"
      onClick={handleClick}
      type="button"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="menuIcon"
        height="25"
        role="img"
        viewBox="0 0 448 512"
      >
        <title id="menuIcon">Menu</title>
        <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" />
      </svg>
    </button>
    <ul
      className={open ? 'navbar__menu open' : 'navbar__menu closed'}
      ref={ref}
    >
      <li>
        <Link
          nav
          onClick={closeMenu}
          to="/research/"
        >
          Research
        </Link>
      </li>
      <li>
        <Link
          nav
          onClick={closeMenu}
          to="/resources/"
        >
          Resources
        </Link>
      </li>
      <li>
        <Link
          nav
          onClick={closeMenu}
          to="/publications/"
        >
          Publications
        </Link>
      </li>
      <li>
        <Link
          nav
          onClick={closeMenu}
          to="/people/"
        >
          People
        </Link>
      </li>
      <li>
        <Link
          nav
          onClick={closeMenu}
          to="/news/"
        >
          News & Openings
        </Link>
      </li>
      <li>
        <Link
          nav
          onClick={closeMenu}
          to="/blog/"
        >
          Blog
        </Link>
      </li>
      <li>
        <Link
          nav
          onClick={closeMenu}
          to="/contact/"
        >
          Contact
        </Link>
      </li>
      <li>
        <Link
          nav
          to="https://twitter.com/gingraslab1"
        >
          Twitter
        </Link>
      </li>
    </ul>
  </span>
));

Menu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default Menu;
