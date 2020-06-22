"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weatherApiEndpoint = void 0;
const index_1 = require("./index");
const weatherApiBaseUrl = `${index_1.config.weatherApi.host}?APPID=${index_1.config.weatherApi.apiKey}&q=`;
exports.weatherApiEndpoint = (query) => {
    return `${weatherApiBaseUrl}${query}`;
};
//# sourceMappingURL=weatherEndpoint.js.map