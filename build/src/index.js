"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseManager_1 = require("./libs/responseManager");
const fetch = require('./libs/getHttp');
const weatherApiEndpoint = require('./config/weatherEndpoint');
const getWeatherFromApi = async (query) => {
    try {
        const weather = await fetch(weatherApiEndpoint(query));
        return console.log(JSON.stringify(responseManager_1.success(weather.data), null, ' '));
    }
    catch (error) {
        console.error(error);
    }
};
const getArray = async (arrayInput) => {
    arrayInput.map(input => {
        getWeatherFromApi(input);
    });
};
getArray(['Lagos', 'Ife']);
//# sourceMappingURL=index.js.map