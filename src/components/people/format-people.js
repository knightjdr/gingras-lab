import React from 'react';
import Img from 'gatsby-image';

import Link from '../link/link';

import peopleList from './people-list';

const formatPeople = (images) => (
  peopleList.map((person) => (
    <div key={person.name}>
      <Img
        alt={person.name}
        fixed={person.file ? images[person.file] : images.user}
      />
      <div>
        <h2>{person.name}</h2>
        <h3>{person.title}</h3>
        {
          person.email
          && (
            <Link
              nav
              to={`mailto:${person.email}`}
            >
              {person.email}
            </Link>
          )
        }
      </div>
    </div>
  ))
);

export default formatPeople;
