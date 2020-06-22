const weatherApiVariables = require('./index').weatherApi;

const weatherApiBaseUrl = `${weatherApiVariables.host}?APPID=${weatherApiVariables.apiKey}&q=`;

const getWeather = (query: string | number) => {
  return `${weatherApiBaseUrl}${query}`;
};

module.exports = getWeather;
