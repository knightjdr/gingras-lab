import React from 'react';

import Link from '../link/link';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      <Link nav to="/research/">Home</Link>
      <Link nav to="/research/">Research</Link>
      <Link nav to="/resources/">Resources</Link>
      <Link nav to="/publications/">Publications</Link>
      <Link nav to="/people/">People</Link>
      <Link nav to="/news/">News & Openings</Link>
      <Link nav to="/contact/">Contact</Link>
    </div>
    <small>
      ©
      {' '}
      { new Date().getFullYear() }
      {' '}
      Gingras lab.
    </small>
  </footer>
);

export default Footer;
