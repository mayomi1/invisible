import {failure, logResponse, success} from "./libs/responseManager";
import {fetch} from "./libs/getHttp";
import {weatherApiEndpoint} from './config/weatherEndpoint';
import {IWeatherApiResponse} from "./interface";
import {fail} from "assert";

const getWeatherFromApi = async (query: string | number): Promise<IWeatherApiResponse | any> => {
  try {
    const weather = await fetch(weatherApiEndpoint(query));
    return weather.data;
  } catch (error) {
    throw error;
  }
};

export const getArrayInput = async (arrayInput?: (string | number)[]) => {
  if (!arrayInput) return failure({ message: 'Input params can not be empty' }, 400)
  if (!Array.isArray(arrayInput)) return failure({ message: 'Input param has to be an array of strings' }, 400)
  if (arrayInput && arrayInput.length < 1) return failure({ message: 'Input array cannot be empty' }, 400)

  try {
    const allWeather = await Promise.all(arrayInput.map( async input => {
      return await getWeatherFromApi(input);
    }));
    return success(allWeather);
  } catch (error) {
    return failure({message: 'City not found'}, 404)
  }
}

logResponse(getArrayInput(['New York', 10005, 'Tokyo', 'Pluto']))
