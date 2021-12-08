import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage, getSrc } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import Head from '../components/head';
import Layout from '../components/layout';

import './blog-template.css';

export const pageQuery = graphql`query ($slug: String!) {
  allFile(
    filter: {extension: {regex: "/(jpeg|jpg|png)/"}, relativeDirectory: {eq: "people"}}
  ) {
    edges {
      node {
        childImageSharp {
          gatsbyImageData(width: 113, height: 150, formats: [JPG, WEBP], layout: FIXED)
        }
        name
      }
    }
  }
  markdownRemark(frontmatter: {slug: {eq: $slug}}) {
    html
    frontmatter {
      author
      authorPhoto
      date(formatString: "MMMM DD, YYYY")
      description
      ogImage {
        childImageSharp {
          gatsbyImageData(width: 1200, height: 630, placeholder: BLURRED, layout: FIXED)
        }
      }
      slug
      title
      twitterImage {
        childImageSharp {
          gatsbyImageData(width: 1200, height: 600, placeholder: BLURRED, layout: FIXED)
        }
      }
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
        ogImage,
        slug,
        title,
        twitterImage,
      },
      html,
    },
  },
}) => {
  const images = allFile.edges.reduce((accum, edge) => ({
    ...accum,
    [edge.node.name]: edge.node.childImageSharp.gatsbyImageData,
  }), {});

  const ogImagePath = getSrc(ogImage);
  const ogTwitterPath = getSrc(twitterImage);

  return (
    <Layout>
      <Head
        description={description}
        ogImage={ogImagePath}
        route={slug}
        title={`Blog: ${title}`}
        twitterImage={ogTwitterPath}
      />
      <div className="blog-post-container">
        <article className="blog-post">
          <header>
            <h1>{title}</h1>
            <div className="blog-post__byline">
              <address>
                By
                {' '}
                {author}
              </address>
              {
                images[authorPhoto]
                && (
                  <GatsbyImage image={images[authorPhoto]} alt={author} />
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
              gatsbyImageData: PropTypes.shape({}).isRequired,
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
        ogImage: PropTypes.shape({}),
        slug: PropTypes.string,
        title: PropTypes.string,
        twitterImage: PropTypes.shape({}),
      }),
      html: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default BlogTemplate;
