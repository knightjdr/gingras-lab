import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';

import Menu from './menu';
import useClickOutside from './use-click-outside';

const MenuContainer = ({ children }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  const closeMenu = () => {
    setOpen(false);
  };

  useClickOutside(ref, closeMenu);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Menu
      closeMenu={closeMenu}
      handleClick={handleClick}
      open={open}
      ref={ref}
    >
      {children}
    </Menu>
  );
};

MenuContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

export default MenuContainer;
