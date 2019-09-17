import React from 'react';
import { Link } from 'gatsby';

import './footer.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      <Link className="nav-link" to="/research/">Home</Link>
      <Link className="nav-link" to="/research/">Research</Link>
      <Link className="nav-link" to="/resources/">Resources</Link>
      <Link className="nav-link" to="/publications/">Publications</Link>
      <Link className="nav-link" to="/people/">People</Link>
      <Link className="nav-link" to="/news/">News & Openings</Link>
      <Link className="nav-link" to="/contact/">Contact</Link>
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
