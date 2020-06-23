"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArrayInput = void 0;
const responseManager_1 = require("./libs/responseManager");
const getHttp_1 = require("./libs/getHttp");
const weatherEndpoint_1 = require("./config/weatherEndpoint");
const getWeatherFromApi = async (query) => {
    try {
        const weather = await getHttp_1.fetch(weatherEndpoint_1.weatherApiEndpoint(query));
        return weather.data;
    }
    catch (error) {
        throw error;
    }
};
exports.getArrayInput = async (arrayInput) => {
    if (!arrayInput)
        return responseManager_1.failure({ message: 'Input params can not be empty' }, 400);
    if (!Array.isArray(arrayInput))
        return responseManager_1.failure({ message: 'Input param has to be an array of strings' }, 400);
    if (arrayInput && arrayInput.length < 1)
        return responseManager_1.failure({ message: 'Input array cannot be empty' }, 400);
    try {
        const allWeather = await Promise.all(arrayInput.map(async (input) => {
            return await getWeatherFromApi(input);
        }));
        return responseManager_1.success(allWeather);
    }
    catch (error) {
        return responseManager_1.failure({ message: 'City not found' }, 404);
    }
};
responseManager_1.logResponse(exports.getArrayInput(['New York', 10005, 'Tokyo', 'Pluto']));
//# sourceMappingURL=index.js.map