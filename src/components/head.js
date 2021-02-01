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
            title
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
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
