import {success} from "./libs/responseManager";

const fetch = require('./libs/getHttp');
const weatherApiEndpoint = require('./config/weatherEndpoint');

const getWeatherFromApi = async (query: string | number): Promise<any> => {
  try {
    const weather = await fetch(weatherApiEndpoint(query));
    return console.log(JSON.stringify(success(weather.data), null, ' '));
  } catch (error) {
    console.error(error);
  }
};

const getArray = async (arrayInput: [string, string]) => {
  arrayInput.map(input => {
    getWeatherFromApi(input);
  })
}

getArray(['Lagos', 'Ife']);
