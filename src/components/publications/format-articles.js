import React, { Fragment } from 'react';
import { Link } from 'gatsby';

import articles from '../../../scripts/publications/output/publications';

const formatAuthors = (authors, title) => {
  const noAuthors = authors.length;
  return authors.map((author, index) => {
    const authorElement = author === 'Gingras AC'
      ? <span className="underline" key="Gingras AC">Gingras AC</span>
      : author;
    if (index < noAuthors - 2) {
      return (
        <Fragment key={`${author}-${title}`}>
          {authorElement}
          ,
          {' '}
        </Fragment>
      );
    } if (index < noAuthors - 1) {
      return (
        <Fragment key={`${author}-${title}`}>
          {authorElement}
          {' '}
        </Fragment>
      );
    }
    return (
      <Fragment key={`${author}-${title}`}>
        and
        {' '}
        {authorElement}
      </Fragment>
    );
  });
};

const formatPages = (article) => {
  if (article.volume && article.issue && article.pages) {
    return `, ${article.volume}(${article.issue}): ${article.pages}`;
  } if (article.volume && article.pages) {
    return `, ${article.volume}: ${article.pages}`;
  } if (article.pages) {
    return `, ${article.pages}`;
  }
  return '';
};

const formatTitle = (title) => title.replace(/&lt;.+?&gt;/g, '');

const formatItem = (article) => (
  <li key={article.title}>
    {formatAuthors(article.authors, article.title)}
    .
    {' '}
    <strong>{formatTitle(article.title)}</strong>
    {' '}
    <em>{article.journal}</em>
    .
    {' '}
    {article.year}
    {formatPages(article)}
    .
    {' '}
    <a href={`https://www.ncbi.nlm.nih.gov/pubmed/${article.pmid}`}>
      PMID:
      {' '}
      {article.pmid}
    </a>
    .
  </li>
);

const formatArticles = () => {
  const yearOrder = Object.keys(articles).sort((a, b) => (Number(a) < Number(b) ? 1 : -1));

  return (
    <>
      <div className="publications__links-year">
        {
          yearOrder.map((year) => (
            <Link
              key={year}
              to={`/publications/#${year}`}
            >
              {year}
            </Link>
          ))
        }
      </div>
      {
        yearOrder.map((year) => {
          const items = articles[year].map((article) => formatItem(article));
          return (
            <div key={year}>
              <h2 id={year}>{year}</h2>
              <ul>{items}</ul>
            </div>
          );
        })
      }
    </>
  );
};

export default formatArticles;
