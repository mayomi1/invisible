"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
require('dotenv').config();
exports.config = {
    weatherApi: {
        host: process.env.OPEN_WEATHER_HOST ||
            'https://api.openweathermap.org/data/2.5/weather',
        apiKey: process.env.OPEN_WEATHER_API_KEY,
    },
};
//# sourceMappingURL=index.js.map