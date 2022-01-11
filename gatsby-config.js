require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gingras lab',
    description: 'The laboratory of Dr. Anne-Claude Gingras at the Lunenfeld in Toronto studies '
    + ' mass spectrometry, interaction proteomics, cell signalling, CCM disease and COVID-19.',
    siteUrl: 'https://gingraslab.org',
    ogImage: '/open-graph.png',
    twitterImage: '/twitter-card.png',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gingras laboratory',
        short_name: 'Gingras lab',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f64f59',
        display: 'standalone',
        icon: 'src/images/favicon.png',
      },
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        defaultQuality: 70,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-use-dark-mode',
      options: {
        classNameDark: 'dark-mode',
        classNameLight: 'light-mode',
        storageKey: 'darkMode',
        minify: true,
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: 'none',
              maxWidth: 800,
              quality: 70,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static/blog',
              ignoreFileExtensions: ['png', 'jpg', 'jpeg'],
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'markdown',
        path: `${__dirname}/src/markdown`,
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: 'gatsby-plugin-plausible',
      options: {
        customDomain: process.env.PLAUSIBLE_DOMAIN,
        domain: 'gingraslab.org',
      },
    },
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => allMarkdownRemark.edges.map((edge) => ({
              ...edge.node.frontmatter,
              author: edge.node.frontmatter.author,
              description: edge.node.excerpt,
              date: edge.node.frontmatter.date,
              url: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
              guid: `${site.siteMetadata.siteUrl}/blog${edge.node.fields.slug}`,
              custom_elements: [{ 'content:encoded': edge.node.html }],
            })),
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        author
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: 'Gingras lab blog RSS Feed',
            match: '^/blog/',
          },
        ],
      },
    },
  ],
};
