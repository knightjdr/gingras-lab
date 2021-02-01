module.exports = {
  pathPrefix: '/gingras-lab',
  siteMetadata: {
    title: 'Gingras lab',
    description: 'The laboratory of Dr. Anne-Claude Gingras at the Lunenfeld in Toronto.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-robots-txt',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        useMozJpeg: true,
        defaultQuality: 70,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Gingras laboratory',
        short_name: 'Gingras lab',
        start_url: '/',
        background_color: '#fff',
        theme_color: '#f64f59',
        display: 'standalone',
        icon: 'src/images/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
  ],
};
