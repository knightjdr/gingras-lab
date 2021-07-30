import React from 'react';

import Link from '../link/link';

import alumni from './alumni';

alumni.sort((a, b) => a.name.localeCompare(b.name));

const formatCurrentPosition = (position, website) => {
  if (position && website) {
    return (
      <div className="people__alumnus-position">
        {' '}
        Current position:
        {' '}
        <Link to={website}>
          {position}
        </Link>
      </div>
    );
  } if (position) {
    return (
      <div className="people__alumnus-position">
        {' '}
        Current position:
        {' '}
        {position}
      </div>
    );
  }
  return null;
};

const formatAlumni = () => (
  <ul>
    {
      alumni.map((alumnus) => (
        <li key={alumnus.name}>
          <div className="people__alumnus">
            <span className="people__alumnus-name">
              {alumnus.name}
            </span>
            ,
            {' '}
            <span className="people__alumnus-role">
              {alumnus.role}
            </span>
            {formatCurrentPosition(alumnus.position, alumnus.website)}
          </div>
        </li>
      ))
    }
  </ul>
);

export default formatAlumni;
