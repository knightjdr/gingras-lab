require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: 'Gingras lab',
    description: 'The laboratory of Dr. Anne-Claude Gingras at the Lunenfeld in Toronto studies '
    + ' mass spectrometry, interaction proteomics, cell signalling, CCM disease and COVID-19.',
    siteUrl: 'https://knightjdr.github.io/',
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
      resolve: 'gatsby-plugin-no-sourcemaps',
    },
    {
      resolve: 'gatsby-plugin-plausible',
      options: {
        customDomain: process.env.PLAUSIBLE_DOMAIN,
        domain: 'gingraslab.org',
      },
    },
  ],
};
