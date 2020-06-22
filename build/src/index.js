"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const responseManager_1 = require("./libs/responseManager");
const fetch = require('./libs/getHttp');
const weatherApiEndpoint = require('./config/weatherEndpoint');
const getWeatherFromApi = async (query) => {
    try {
        const weather = await fetch(weatherApiEndpoint(query));
        // console.log(weather.data)
        // return console.log(JSON.stringify(success(weather.data), null, ' '));
        return weather.data;
    }
    catch (error) {
        console.error(error);
    }
};
const getArray = async (arrayInput) => {
    const allWeather = await Promise.all(arrayInput.map(async (input) => {
        return await getWeatherFromApi(input);
    }));
    console.log('all wether', allWeather);
    return console.log(JSON.stringify(responseManager_1.success(allWeather), null, ' '));
};
getArray(['New York', 10005, 'Tokyo', 'Pluto']);
//# sourceMappingURL=index.js.map