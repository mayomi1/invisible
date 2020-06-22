import {config} from './index';

const weatherApiBaseUrl = `${config.weatherApi.host}?APPID=${config.weatherApi.apiKey}&q=`;

export const weatherApiEndpoint = (query: string | number) => {
  return `${weatherApiBaseUrl}${query}`;
};
