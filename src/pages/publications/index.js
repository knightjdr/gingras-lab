import React from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import Link from '../../components/link/link';

import formatArticles from '../../components/publications/format-articles';

import Books from '../../images/icon/books.svg';

import './publications.css';

const Publications = () => (
  <Layout>
    <Head
      description="Publications from the laboratory of Dr. Anne-Claude Gingras."
      title="Publications"
    />
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
        {formatArticles()}
      </section>
    </div>
  </Layout>
);

export default Publications;
