import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql, useStaticQuery, withPrefix } from 'gatsby';

function Head({
  description,
  lang,
  meta,
  title,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
            title
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const titleTemplate = title ? `${site.siteMetadata.title} | ${title}` : site.siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={titleTemplate}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: site.siteMetadata.title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: '/open-graph.png',
        },
        {
          property: 'og:height',
          content: 630,
        },
        {
          property: 'og:width',
          content: 1200,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: site.siteMetadata.siteUrl,
        },
        {
          property: 'twitter:title',
          content: site.siteMetadata.title,
        },
        {
          property: 'twitter:description',
          content: metaDescription,
        },
        {
          property: 'twitter:site',
          content: site.siteMetadata.siteUrl,
        },
        {
          property: 'twitter:creator',
          content: '@gingraslab1',
        },
        {
          property: 'twitter:image',
          content: '/twitter-card.png',
        },
        {
          property: 'twitter:card',
          content: 'summary_large_image',
        },
      ].concat(meta)}
    >
      <link type="text/plain" rel="author" href={withPrefix('/humans.txt')} />
    </Helmet>
  );
}

Head.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default Head;
