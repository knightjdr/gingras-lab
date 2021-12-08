import PropTypes from 'prop-types';
import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';
import Link from '../components/link/link';

import news from '../components/news/news-list';

import Analytics from '../images/icon/analytics.svg';
import ChartNetwork from '../images/icon/chart-network.svg';
import Virus from '../images/icon/virus.svg';
import Wifi from '../images/icon/waveform.svg';

import './home.css';

export const query = graphql`{
  anneClaudeGingras: file(
    relativePath: {eq: "picture/anneclaude-gingras-home.jpg"}
  ) {
    childImageSharp {
      gatsbyImageData(width: 200, height: 268, formats: [JPG, WEBP], layout: FIXED, placeholder: BLURRED)
    }
  }
  torontoIsland: file(relativePath: {eq: "picture/toronto.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 800, height: 400, formats: [JPG, WEBP], layout: FIXED, placeholder: BLURRED)
    }
  }
  torontoSkyline: file(relativePath: {eq: "picture/toronto-skyline.jpg"}) {
    childImageSharp {
      gatsbyImageData(width: 1000, height: 250, formats: [JPG, WEBP], layout: FIXED, placeholder: BLURRED)
    }
  }
}
`;

const IndexPage = ({ data }) => (
  <Layout navbarShadow={false}>
    <Head />
    <div className="home__waves" />
    <div className="home">
      <section className="home__landing">
        <div className="home__landing-skyline">
          <GatsbyImage
            image={data.torontoSkyline.childImageSharp.gatsbyImageData}
            alt="View of Toronto skyline" />
        </div>
        <div className="home__landing-description">
          <h1>Gingras laboratory</h1>
          <p>
            We are a signal transduction, systems biology and proteomics lab
            located at the Lunenfeld-Tanenbaum Research Institute (LTRI) in Toronto.
          </p>
        </div>
        <div className="home__landing-island">
          <GatsbyImage
            image={data.torontoIsland.childImageSharp.gatsbyImageData}
            alt="View of Toronto skyline from Toronto island" />
        </div>
      </section>
      <section className="home__anne-claude">
        <GatsbyImage
          image={data.anneClaudeGingras.childImageSharp.gatsbyImageData}
          alt="Anne-Claude Gingras" />
        <div className="home__anne-claude-about">
          <h2>Dr. Anne-Claude Gingras</h2>
          <p>
            Dr. Anne-Claude Gingras is a Senior Investigator at the
            LTRI and Professor in the Department of Molecular
            Genetics, University of Toronto. Dr. Gingras is an expert
            in mass spectrometry-based proteomics, a technology that enables
            the identification and quantification of proteins from biological
            samples. Her lab specializes in developing tools to better understand
            how proteins associate with one another to perform their functions.
          </p>
          <div className="home__anne-claude-links">
            <Link to="https://www.ncbi.nlm.nih.gov/pubmed?term=Gingras%20AC%5BAuthor%5D">
              PubMed
            </Link>
            <Link to="https://scholar.google.ca/citations?user=kPxn4QQAAAAJ&hl=en">
              Google Scholar
            </Link>
            <Link to="https://www.researchgate.net/profile/Anne-Claude_Gingras">
              ResearchGate
            </Link>
          </div>
        </div>
      </section>
      <section className="home__news">
        <h2>Latest news</h2>
        <div className="home__news-inner">
          <ul>
            {
              news.slice(0, 3).map((item) => (
                <li key={item.title}>
                  <time>{item.date}</time>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))
            }
          </ul>
        </div>
      </section>
      <section className="home__projects">
        <h2>Research</h2>
        <div className="home__project">
          <div className="home__project-description">
            <h3>Enabling tools for proteomics</h3>
            <p>
              Our laboratory aims to continuously improve interaction proteomics through the development of
              experimental and computational approaches. These include optimized protocols
              for affinity purifcation and BioID, and tools for mass spectrometry analysis,
              data management and visualization.
            </p>
            <Link
              nav
              to="/research/#proteomics"
            >
              Read more
            </Link>
          </div>
          <img
            alt="Bar chart"
            height="150"
            src={Analytics}
          />
        </div>
        <div className="home__project">
          <div className="home__project-description">
            <h3>Systems biology</h3>
            <p>
              At the systems level we have studied and continue to perform large-scale projects on protein
              families, such as phosphatases, kinases, bromodomain-containing proteins and chaperones. We have
              undertaken organelle-specific studies of RNA bodies, the mitochondria
              and nuclear bodies, and even a broader project to map the localization of all proteins in the cell.
              We also have members tackling broad studies on several cell regulatory mechanisms, including somatic cell
              reprogramming and splicing. These projects utilize a variety of techniques, but in large part
              are pursued through interaction proteomics.
            </p>
            <Link
              nav
              to="/research/#systemsbiology"
            >
              Read more
            </Link>
          </div>
          <img
            alt="Node and edge network"
            height="150"
            src={ChartNetwork}
          />
        </div>
        <div className="home__project">
          <div className="home__project-description">
            <h3>Signalling</h3>
            <p>
              Some of our core research interests have been the study of signaling pathways that are deregulated in
              cancers and rare diseases. These include mTORC1 activation, receptor tyrosine kinase signalling,
              the STRIPAK phosphatase and kinase complex (implicated in CCM disease) and
              the Hippo pathway, between the last two of which we interestingly discovered novel and important
              connections.
            </p>
            <Link
              nav
              to="/research/#signalling"
            >
              Read more
            </Link>
          </div>
          <img
            alt="Wifi signal"
            height="150"
            src={Wifi}
          />
        </div>
        <div className="home__project">
          <div className="home__project-description">
            <h3>COVID-19</h3>
            <p>
              When the COVID-19 pandemic began in 2020, the lab quickly shifted some attention
              and resources to aid in the global research effort.
              We began studying the interactome and life cycle of the SARS-CoV-2
              virus in infected cells, while also developing assays for the
              detection of serum and plasma antibodies that block the interaction of the virus
              with host cell receptors.
            </p>
            <Link
              nav
              to="/research/#covid19"
            >
              Read more
            </Link>
          </div>
          <img
            alt="Virus"
            height="150"
            src={Virus}
          />
        </div>
      </section>
    </div>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    anneClaudeGingras: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    torontoIsland: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
    torontoSkyline: PropTypes.shape({
      childImageSharp: PropTypes.shape({
        gatsbyImageData: PropTypes.shape({}).isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default IndexPage;
