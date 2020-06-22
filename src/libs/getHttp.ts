const getHttp = require('axios');

export const fetch = (url: string) => getHttp.get(url);
