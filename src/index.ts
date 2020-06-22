import {success} from "./libs/responseManager";

const fetch = require('./libs/getHttp');
const weatherApiEndpoint = require('./config/weatherEndpoint');

const getWeatherFromApi = async (query: string | number): Promise<any> => {
  try {
    const weather = await fetch(weatherApiEndpoint(query));
    return weather.data;
  } catch (error) {
    console.error(error);
  }
};

const getArray = async (arrayInput: (string | number)[]) => {
  const allWeather = await Promise.all(arrayInput.map( async input => {
    return await getWeatherFromApi(input);
  }));
  console.log('all weather ', allWeather);
  return console.log(JSON.stringify(success(allWeather), null, ' '));
}

getArray(['New York', 10005, 'Tokyo', 'Pluto']);
