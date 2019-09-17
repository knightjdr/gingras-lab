const fs = require('fs').promises;

const createFolder = require('../utils/create-folder');

const writeJSON = async (data) => {
  const filename = './output/publications.json';
  await createFolder('output');
  await fs.writeFile(filename, JSON.stringify(data, null, 2));
};

module.exports = writeJSON;
