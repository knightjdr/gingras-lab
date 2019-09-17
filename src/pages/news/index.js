import React from 'react';
import { Link } from 'gatsby';

import formatNews from '../../components/news/format-news';
import Head from '../../components/head';
import Layout from '../../components/layout';
import news from '../../components/news/news-list';

import NewsPaper from '../../images/icon/newspaper.svg';
import UserSearch from '../../images/icon/user-search.svg';

import './news.css';


const News = () => (
  <Layout>
    <Head title="News" />
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
            <a href="https://apply.interfolio.com/66200">application</a>
            ).
          </li>
          <li>
            Postdoctoral position in computational proteomics (
            <a href="https://apply.interfolio.com/58107">application</a>
            ).
          </li>
          <li>
            Research Associate position in chemical proteomics (
            <a href="https://contact2.mshri.on.ca/hr/DEFAULT.ASP?page=jobDetail&amp;job=1225">application</a>
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
          <a className="nav-link" href="mailto:gingras@lunenfeld.ca">Dr. Anne-Claude Gingras</a>
          .
        </p>
        <h2>Graduate students</h2>
        <p>
          The Gingras lab is part of the
          {' '}
          <a href="http://www.moleculargenetics.utoronto.ca/">Department of Molecular Genetics</a>
          {' '}
          at the
          {' '}
          <a href="https://www.utoronto.ca/">University of Toronto</a>
          , which has a central admission committee and a rotation system. Graduate students
          interested in doing a PhD in the laboratory must first be accepted in the Department
          of Molecular Genetics.
        </p>
        <h2>Summer students</h2>
        <p>
          Summer students are exclusively selected from successful applicants to the
          {' '}
          <a href="http://research.lunenfeld.ca/rtc/">Research Training Center (RTC)</a>
          {' '}
          at the Lunenfeld-Tanenbaum Research Institute.
          {' '}
          <a href="http://research.lunenfeld.ca/rtc/?page=Summer%20Research%20Program">Applications</a>
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
