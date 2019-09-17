import React from 'react';

const listYear = (year, data) => (
  <div key={year}>
    <h2 id={year}>{year}</h2>
    <ul className="news__list">{data}</ul>
  </div>
);

const formatNews = (articles) => {
  const articleData = [];
  let currentYear = 2019;
  let yearData = [];
  articles.forEach((article) => {
    const year = Number(article.date.split(', ')[1]);
    if (year !== currentYear) {
      articleData.push(listYear(currentYear, yearData));
      yearData = [];
      currentYear = year;
    }
    yearData.push(
      <li key={`${article.title}-${article.date}`}>
        <time>{article.date}</time>
        <h3>{article.title}</h3>
        <p>{article.text}</p>
      </li>,
    );
  }, []);
  articleData.push(listYear(currentYear, yearData));

  return articleData;
};

export default formatNews;
