import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import BlogLink from '../../components/blog/blog-link';
import Head from '../../components/head';
import Layout from '../../components/layout';
import Link from '../../components/link/link';

import RSS from '../../images/icon/rss.svg';

import './blog.css';

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            author
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`;

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <Head
      description="The Gingras Lab - Demystified, a blog about our research projects and activities"
      title="Blog"
    />
    <div className="blog-index-container">
      <div className="blog-index">
        <h1>Blog: The Gingras Lab - Demystified</h1>
        <div className="blog-index__rss-container">
          <Link
            aria-label="RSS download"
            download
            nav
            to="/rss.xml"
          >
            RSS feed:
            <img
              alt="RSS"
              height={15}
              src={RSS}
            />
          </Link>
        </div>
        {
          edges.map((edge) => <BlogLink key={edge.node.id} post={edge.node} />)
        }
      </div>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
