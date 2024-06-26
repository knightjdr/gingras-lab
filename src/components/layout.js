import PropTypes from 'prop-types';
import React from 'react';

import Footer from './footer/footer';
import Navbar from './navbar/navbar';
import './layout.css';

const Layout = ({
  children,
  navbarShadow,
}) => (
  <>
    <div className="layout">
      <Navbar shadow={navbarShadow} />
      <main>{children}</main>
      <Footer />
    </div>
  </>
);

Layout.defaultProps = {
  navbarShadow: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  navbarShadow: PropTypes.bool,
};

export default Layout;
