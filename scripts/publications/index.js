const fetchArticles = require('./fetch-articles');
const fetchIDs = require('./fetch-ids');
const sortArticles = require('./sort-articles');
const writeJSON = require('./write-json');

const blackList = [];

const publicationList = async () => {
  const ids = await fetchIDs(blackList);
  const articles = await fetchArticles(ids);
  const sortedArticles = sortArticles(articles);
  await writeJSON(sortedArticles);
};

publicationList();
