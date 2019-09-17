import React from 'react';

import Head from '../../components/head';

import './404.css';

const NotFoundPage = () => (
  <>
    <Head title="404: Not found" />
    <div className="missing">
      <h1>404</h1>
      <p>
        The page you were looking for could not be found.
      </p>
      <a className="missing__link" href="/">
        Home
      </a>
    </div>
  </>
);

export default NotFoundPage;
