import React from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import Link from '../../components/link/link';

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
          <Link nav to="/research/#proteomics">Proteomics</Link>
          <Link nav to="/research/#systemsbiology">Systems biology</Link>
          <Link nav to="/research/#signalling">Signalling</Link>
          <Link nav to="/research/#ccm">CCM</Link>
          <Link nav to="/research/#funding">Funding</Link>
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
            <figcaption>
              Targeted compartments for mapping the cell. Image courtesy of
              Kento Abe.
            </figcaption>
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
            <figcaption>
              MTOR signalling at the lysosome membrane. Image courtesy of
              Geoff Hesketh.
            </figcaption>
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
            <li><Link to="http://www.cihr-irsc.gc.ca">Canadian Institutes of Health Research</Link></li>
            <li><Link to="http://www.nserc-crsng.gc.ca">Natural Sciences and Engineering Research Council</Link></li>
            <li><Link to="https://www.cancer.ca/research">Canadian Cancer Society Research Institute</Link></li>
            <li><Link to="https://www.crs-src.ca/">Cancer Research Society</Link></li>
            <li><Link to="https://www.genomecanada.ca">Genome Canada</Link></li>
            <li><Link to="https://www.ontariogenomics.ca/">Ontario Genomics Institute</Link></li>
            <li><Link to="https://www.innovation.ca/">Canada Foundation for Innovation</Link></li>
            <li><Link to="https://www.nih.gov/">National Institutes of Health</Link></li>
            <li><Link to="http://www.cihr-irsc.gc.ca/e/13147.html">CIHR Institute of Genetics</Link></li>
            <li><Link to="http://www.chairs-chaires.gc.ca/home-accueil-eng.aspx">Canada Research Chair</Link></li>
          </ul>
        </section>
      </section>
    </div>
  </Layout>
);

export default Research;
