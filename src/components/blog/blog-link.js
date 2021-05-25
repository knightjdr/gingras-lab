import PropTypes from 'prop-types';
import React from 'react';

import Link from '../link/link';

import './blog-link.css';

const PostLink = ({
  post: {
    excerpt,
    frontmatter: {
      author,
      date,
      slug,
      title,
    },
  },
}) => (
  <div className="blog-link">
    <Link
      nav
      to={slug}
    >
      <h2>{title}</h2>
    </Link>
    <address className="blog-link__author">
      By
      {' '}
      {author}
    </address>
    <time
      className="blog-link__date"
      dateTime={date}
    >
      {date}
    </time>
    <p>{excerpt}</p>
  </div>
);

PostLink.propTypes = {
  post: PropTypes.shape({
    excerpt: PropTypes.string,
    frontmatter: PropTypes.shape({
      author: PropTypes.string,
      date: PropTypes.string,
      slug: PropTypes.string,
      title: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default PostLink;
