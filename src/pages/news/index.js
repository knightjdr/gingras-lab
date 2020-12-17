import React from 'react';

import Head from '../../components/head';
import Layout from '../../components/layout';
import Link from '../../components/link/link';

import formatNews from '../../components/news/format-news';
import news from '../../components/news/news-list';

import NewsPaper from '../../images/icon/newspaper.svg';
import UserSearch from '../../images/icon/user-search.svg';

import './news.css';

const News = () => (
  <Layout>
    <Head
      description="Read the latest news from the laboratory of Dr. Anne-Claude Gingras."
      title="News"
    />
    <div className="news">
      <section>
        <header>
          <h1>Open positions</h1>
          <img
            alt="Magnifying glass searching for a person"
            height="25"
            src={UserSearch}
          />
        </header>
        <h2>Active listings</h2>
        <ul>
          <li>
            Postdoctoral position in chemical proteomics (
            <Link to="https://apply.interfolio.com/66200">application</Link>
            ).
          </li>
          <li>
            Postdoctoral position in computational proteomics (
            <Link to="https://apply.interfolio.com/58107">application</Link>
            ).
          </li>
          <li>
            Research Associate position in chemical proteomics (
            <Link to="https://contact2.mshri.on.ca/hr/DEFAULT.ASP?page=jobDetail&amp;job=1225">application</Link>
            ).
          </li>
        </ul>
        <h2>Postdocs</h2>
        <p>
          The laboratory is always interested in recruiting highly motivated postdoctoral fellows
          with a strong publication record in signal transduction, cell biology, biochemistry,
          bioinformatics and/or proteomics. Please forward your CV, references and research
          interests to
          {' '}
          <Link nav to="mailto:gingras@lunenfeld.ca">Dr. Anne-Claude Gingras</Link>
          .
        </p>
        <h2>Graduate students</h2>
        <p>
          The Gingras lab is part of the
          {' '}
          <Link to="http://www.moleculargenetics.utoronto.ca/">Department of Molecular Genetics</Link>
          {' '}
          at the
          {' '}
          <Link to="https://www.utoronto.ca/">University of Toronto</Link>
          , which has a central admission committee and a rotation system. Graduate students
          interested in doing a PhD in the laboratory must first be accepted in the Department
          of Molecular Genetics.
        </p>
        <h2>Summer students</h2>
        <p>
          Summer students are exclusively selected from successful applicants to the
          {' '}
          <Link to="http://research.lunenfeld.ca/rtc/">Research Training Center (RTC)</Link>
          {' '}
          at the Lunenfeld-Tanenbaum Research Institute.
          {' '}
          <Link to="http://research.lunenfeld.ca/rtc/?page=Summer%20Research%20Program">Applications</Link>
          {' '}
          are available online and need to be filled by February 15th yearly.
        </p>
      </section>
      <section className="news__articles">
        <header>
          <h1>
            News
          </h1>
          <img
            alt="Newspaper"
            height="25"
            src={NewsPaper}
          />
        </header>
        <div className="news__years">
          <Link to="/news/#2019">2019</Link>
          <Link to="/news/#2018">2018</Link>
          <Link to="/news/#2017">2017</Link>
          <Link to="/news/#2016">2016</Link>
          <Link to="/news/#2015">2015</Link>
          <Link to="/news/#2014">2014</Link>
          <Link to="/news/#2013">2013</Link>
          <Link to="/news/#2012">2012</Link>
          <Link to="/news/#2011">2011</Link>
          <Link to="/news/#2010">2010</Link>
        </div>
        {formatNews(news)}
      </section>
    </div>
  </Layout>
);

export default News;
