const getHttp = require('axios');

const getResource = (url: string) => getHttp.get(url);

module.exports = getResource;
