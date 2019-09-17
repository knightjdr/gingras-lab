const { request } = require('gaxios');

const fetchIDs = async (blackList) => {
  const response = await request({
    url: 'https://eutils.ncbi.nlm.nih.gov/entrez/eutils/esearch.fcgi?db=pubmed&term=Gingras AC[author]&retmax=100000&retmode=json',
  });
  return response.data.esearchresult.idlist.filter((id) => !blackList.includes(id));
};

module.exports = fetchIDs;
