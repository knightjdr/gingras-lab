import React from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';

import formatArticles from '../../components/publications/format-articles';

import Books from '../../images/icon/books.svg';

import './publications.css';

const Publications = () => (
  <Layout>
    <Head title="Publications" />
    <div className="publications">
      <section>
        <header>
          <h1>
            Publications
          </h1>
          <img
            alt="Stack of books"
            height="25"
            src={Books}
          />
        </header>
        <div className="publications__links">
          <a href="https://www.ncbi.nlm.nih.gov/pubmed?term=Gingras%20AC%5BAuthor%5D">
            PubMed
          </a>
          <a href="https://scholar.google.ca/citations?user=kPxn4QQAAAAJ&hl=en">
            Google Scholar
          </a>
          <a href="https://www.researchgate.net/profile/Anne-Claude_Gingras">
            ResearchGate
          </a>
        </div>
        {formatArticles()}
      </section>
    </div>
  </Layout>
);

export default Publications;
