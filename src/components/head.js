import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import React from 'react';
import { graphql, useStaticQuery, withPrefix } from 'gatsby';

function Head({
  description,
  lang,
  meta,
  ogImage,
  route,
  title,
  twitterImage,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            ogImage
            siteUrl
            title
            twitterImage
          }
        }
      }
    `,
  );

  const headTitle = title ? `${site.siteMetadata.title} | ${title}` : site.siteMetadata.title;
  const metaDescription = description || site.siteMetadata.description;
  const metaOgImage = ogImage || site.siteMetadata.ogImage;
  const metaOgUrl = route ? `${site.siteMetadata.siteUrl}${route}` : site.siteMetadata.siteUrl;
  const metaTwitterImage = twitterImage || site.siteMetadata.twitterImage;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={headTitle}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: headTitle,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:image',
          content: metaOgImage,
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
          content: metaOgUrl,
        },
        {
          property: 'twitter:title',
          content: headTitle,
        },
        {
          property: 'twitter:description',
          content: metaDescription,
        },
        {
          property: 'twitter:site',
          content: metaOgUrl,
        },
        {
          property: 'twitter:creator',
          content: '@gingraslab1',
        },
        {
          property: 'twitter:image',
          content: metaTwitterImage,
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
  description: '',
  lang: 'en',
  ogImage: '',
  meta: [],
  route: '',
  title: '',
  twitterImage: '',
};

Head.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  ogImage: PropTypes.string,
  route: PropTypes.string,
  title: PropTypes.string,
  twitterImage: PropTypes.string,
};

export default Head;
