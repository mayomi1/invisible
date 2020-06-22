import {IConfig} from "../interface";
require('dotenv').config();

export const config: IConfig = {
  weatherApi: {
    host: process.env.OPEN_WEATHER_HOST || 'https://api.openweathermap.org/data/2.5/weather',
    apiKey: process.env.OPEN_WEATHER_API_KEY,
  },
};
