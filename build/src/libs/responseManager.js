"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failure = exports.success = void 0;
const formatData = (weatherApiResponse) => {
    return {
        weather: weatherApiResponse.weather,
        main: weatherApiResponse.main,
        timezone: weatherApiResponse.main.timezone,
        location: weatherApiResponse.main.name,
    };
};
const response = (data, responseInfo) => {
    return {
        error: responseInfo.error,
        data: formatData(data),
        httpCode: data.main.cod,
    };
};
exports.success = (data, httpCode = 200) => {
    const responseInfo = {
        error: false,
        httpCode: httpCode,
    };
    return response(data, responseInfo);
};
exports.failure = (data, httpCode = 503) => {
    const responseInfo = {
        error: true,
        httpCode: httpCode,
    };
    return response(data, responseInfo);
};
//# sourceMappingURL=responseManager.js.map