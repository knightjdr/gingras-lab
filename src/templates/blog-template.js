import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/layout';

import './blog-template.css';

export const pageQuery = graphql`
  query($slug: String!) {
    allFile(filter:{
      extension: { regex: "/(jpeg|jpg|png)/" },
      relativeDirectory: { eq: "people" }
    }) {
      edges {
        node {
          childImageSharp {
            fixed(width: 113, height: 150, toFormat: JPG) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
          name
        }
      }
    }
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        author
        authorPhoto
        date(formatString: "MMMM DD, YYYY")
        description
        slug
        title
      }
    }
  }
`;

const BlogTemplate = ({
  data: {
    allFile,
    markdownRemark: {
      frontmatter: {
        author,
        authorPhoto,
        date,
        description,
        title,
      },
      html,
    },
  },
}) => {
  const images = allFile.edges.reduce((accum, edge) => ({
    ...accum,
    [edge.node.name]: edge.node.childImageSharp.fixed,
  }), {});

  return (
    <Layout>
      <Head
        description={description}
        title={`Blog: ${title}`}
      />
      <div className="blog-post-container">
        <article className="blog-post">
          <header>
            <h1>{title}</h1>
            <div className="blog-post__byline">
              <address className="author">
                By
                {' '}
                {author}
              </address>
              {
                images[authorPhoto]
                && (
                  <Img
                    alt={author}
                    fixed={images[authorPhoto]}
                  />
                )
              }
              <time dateTime={date}>{date}</time>
            </div>
          </header>
          <div
            className="blog-post-content"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </article>
      </div>
    </Layout>
  );
};

BlogTemplate.propTypes = {
  data: PropTypes.shape({
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            childImageSharp: PropTypes.shape({
              fixed: PropTypes.shape({}).isRequired,
            }).isRequired,
            name: PropTypes.string.isRequired,
          }).isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        author: PropTypes.string,
        authorPhoto: PropTypes.string,
        date: PropTypes.string,
        description: PropTypes.string,
        title: PropTypes.string,
      }),
      html: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default BlogTemplate;
