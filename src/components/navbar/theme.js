import PropTypes from 'prop-types';
import React from 'react';

import Moon from '../../images/icon/moon.svg';
import Sun from '../../images/icon/sun.svg';

const Theme = ({
  darkMode,
  toggle,
}) => (
  <button
    aria-label={`switch to ${darkMode ? 'light' : 'dark'} mode`}
    className="navbar__theme-button"
    onClick={toggle}
    type="button"
  >
    <img
      alt={darkMode ? 'Sun' : 'Moon'}
      height={16}
      src={darkMode ? Moon : Sun}
    />
  </button>
);

Theme.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};

export default Theme;
