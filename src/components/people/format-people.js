import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

import Link from '../link/link';

import peopleList from './people-list';

const formatPeople = (images) => (
  peopleList.map((person) => (
    <div key={person.name}>
      <GatsbyImage image={person.file ? images[person.file] : images.user} alt={person.name} />
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
