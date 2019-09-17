import React from 'react';
import { Link } from 'gatsby';

import Head from '../../components/head';
import Layout from '../../components/layout';

import CCM from '../../images/research/ccm-stripak.svg';
import Microscope from '../../images/icon/microscope.svg';
import Signalling from '../../images/research/signalling-mtor.svg';
import SystemsBiology from '../../images/research/systemsbiology-cellmap.svg';

import './research.css';

const Research = () => (
  <Layout>
    <Head title="Research" />
    <div className="research">
      <section>
        <header>
          <h1>
            Research
          </h1>
          <img
            alt="Microscope"
            height="25"
            src={Microscope}
          />
        </header>
        <div className="research__links">
          <Link className="nav-link" to="/research/#proteomics">Proteomics</Link>
          <Link className="nav-link" to="/research/#systemsbiology">Systems biology</Link>
          <Link className="nav-link" to="/research/#signalling">Signalling</Link>
          <Link className="nav-link" to="/research/#ccm">CCM</Link>
          <Link className="nav-link" to="/research/#funding">Funding</Link>
        </div>
        <section id="proteomics">
          <h2>Enabling tools for proteomics</h2>
        </section>
        <section id="systemsbiology">
          <h2>Systems biology</h2>
          <figure>
            <img
              alt="Cartoon of a human cell with labelled organelles used for mapping"
              className="research__image-svg"
              src={SystemsBiology}
            />
            <figcaption>Targeted compartments for mapping the cell.</figcaption>
          </figure>
        </section>
        <section id="signalling">
          <h2>Signalling</h2>
          <figure>
            <img
              alt="MTOR signalling at the lysosome membrane"
              className="research__image-svg"
              src={Signalling}
            />
            <figcaption>MTOR signalling at the lysosome membrane.</figcaption>
          </figure>
        </section>
        <section id="ccm">
          <h2>CCM</h2>
          <figure>
            <img
              alt="CCM isoforms and the CCM3-containing STRIPAK complex"
              className="research__image-svg"
              src={CCM}
            />
            <figcaption>CCM isoforms and the CCM3-containing STRIPAK complex.</figcaption>
          </figure>
        </section>
        <section id="funding">
          <h2>Funding</h2>
          <p>
            We are grateful to the following agencies for supporting the projects in the Gingras
            lab and the LTRI proteomics group:
          </p>
          <ul>
            <li><a href="http://www.cihr-irsc.gc.ca">Canadian Institutes of Health Research</a></li>
            <li><a href="http://www.nserc-crsng.gc.ca">Natural Sciences and Engineering Research Council</a></li>
            <li><a href="https://www.cancer.ca/research">Canadian Cancer Society Research Institute</a></li>
            <li><a href="https://www.crs-src.ca/">Cancer Research Society</a></li>
            <li><a href="https://www.genomecanada.ca">Genome Canada</a></li>
            <li><a href="https://www.ontariogenomics.ca/">Ontario Genomics Institute</a></li>
            <li><a href="https://www.innovation.ca/">Canada Foundation for Innovation</a></li>
            <li><a href="https://www.nih.gov/">National Institutes of Health</a></li>
            <li><a href="http://www.cihr-irsc.gc.ca/e/13147.html">CIHR Institute of Genetics</a></li>
            <li><a href="http://www.chairs-chaires.gc.ca/home-accueil-eng.aspx">Canada Research Chair</a></li>
          </ul>
        </section>
      </section>
    </div>
  </Layout>
);

export default Research;
