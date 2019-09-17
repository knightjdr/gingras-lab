const fs = require('fs').promises;

const createFolder = require('../utils/create-folder');

const writeJSON = async (data) => {
  const filename = `${__dirname}/output/publications.json`;
  await createFolder(`${__dirname}/output`);
  await fs.writeFile(filename, JSON.stringify(data, null, 2));
};

module.exports = writeJSON;
