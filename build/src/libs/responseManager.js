"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logResponse = exports.failure = exports.success = void 0;
const utility_1 = require("./utility");
const formatData = (weatherApiResponse) => {
    const formattedWeatherResponses = [];
    Array.isArray(weatherApiResponse) && weatherApiResponse.map((res) => {
        formattedWeatherResponses.push({
            location: res.name,
            current_time: utility_1.getLocationCurrentTime(res.coord),
            weather: res.weather,
            main: res.main,
        });
    });
    return formattedWeatherResponses;
};
const responseFormat = (httpCode, error, data) => {
    return {
        httpCode, error, data
    };
};
const response = (responseInfo, data, failedData) => {
    if (responseInfo.error) {
        return responseFormat(responseInfo.httpCode, responseInfo.error, failedData);
    }
    else {
        return responseFormat(responseInfo.httpCode, responseInfo.error, formatData(data));
    }
};
exports.success = (data, httpCode = 200) => {
    const responseInfo = {
        error: false,
        httpCode: httpCode,
    };
    return response(responseInfo, data);
};
exports.failure = (data, httpCode = 503) => {
    const responseInfo = {
        error: true,
        httpCode: httpCode,
    };
    return response(responseInfo, undefined, data);
};
exports.logResponse = (res) => {
    return console.log(JSON.stringify(exports.success(res), null, ' '));
};
//# sourceMappingURL=responseManager.js.map