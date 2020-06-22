"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failure = exports.success = void 0;
const utility_1 = require("./utility");
const formatData = (weatherApiResponse) => {
    const arr = [];
    weatherApiResponse.map((res) => {
        arr.push({
            location: res.name,
            currentTime: utility_1.getFormattedTimeFromTimeZone(res.coord),
            timezone: res.timezone,
            weather: res.weather,
            main: res.main,
        });
    });
    return arr;
};
const response = (data, responseInfo) => {
    return {
        httpCode: responseInfo.httpCode,
        error: responseInfo.error,
        data: formatData(data),
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