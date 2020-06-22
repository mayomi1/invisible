"use strict";
const weatherApiVariables = require('./index').weatherApi;
const weatherApiBaseUrl = `${weatherApiVariables.host}?APPID=${weatherApiVariables.apiKey}&q=`;
const getWeather = (query) => {
    return `${weatherApiBaseUrl}${query}`;
};
module.exports = getWeather;
//# sourceMappingURL=weatherEndpoint.js.map