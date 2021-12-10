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
            <Link to="https://apply.interfolio.com/100179">
              Technician II, 1 year contract
            </Link>
            : Join our dynamic team that uses automated approaches to monitor antibody levels
            following SARS-CoV-2 infection or vaccination.
          </li>
          <li>
            <Link to="https://apply.interfolio.com/100180">
              Technician II, 1 year contract
            </Link>
            : Interested in clinical research and building bridges between basic and clinical
            research teams? Eager to contribute to research reproducibility and transparent reporting?
            Apply to this position.
          </li>
          <li>
            <Link to="https://apply.interfolio.com/100181">
              Bioinformatician / Data Analyst, 1 year contract
            </Link>
            : Database design and management and data visualization are your strengths? Join our serology
            team to process, analyze and visualize antibody data for dozens of important COVID-19 projects
          </li>
          <li>
            <Link to="https://apply.interfolio.com/100182">
              Technician II, permanent
            </Link>
            : Looking to apply your molecular/cellular biology and biochemistry skills to support a dynamic
            proteomics group in Toronto?
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
          The summer student program is currently on hold due to COVID-19.
        </p>
        {/* <p>
          Summer students are exclusively selected from successful applicants to the
          {' '}
          <Link to="http://research.lunenfeld.ca/rtc/">Research Training Center (RTC)</Link>
          {' '}
          at the Lunenfeld-Tanenbaum Research Institute.
          {' '}
          <Link to="http://research.lunenfeld.ca/rtc/?page=Summer%20Research%20Program">Applications</Link>
          {' '}
          are available online and need to be filled by February 15th yearly.
        </p> */}
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
          <Link to="/news/#2021">2021</Link>
          <Link to="/news/#2020">2020</Link>
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
