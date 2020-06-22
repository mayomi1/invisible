import {
  IFormatedWeatherResponse,
  IResponseInfo,
  IWeatherApiResponse,
} from '../interface';

const formatData = (
  weatherApiResponse: any
): any => {
  return {
    weather: weatherApiResponse.weather,
    main: weatherApiResponse.main,
    timezone: weatherApiResponse.main.timezone,
    location: weatherApiResponse.main.name,
  };
};

const response = (data: IWeatherApiResponse, responseInfo: IResponseInfo) => {
  return {
    error: responseInfo.error,
    data: formatData(data),
    httpCode: data.main.cod,
  };
};

export const success = (data: IWeatherApiResponse, httpCode = 200) => {
  const responseInfo: IResponseInfo = {
    error: false,
    httpCode: httpCode,
  };
  return response(data, responseInfo);
};

export const failure = (data: IWeatherApiResponse, httpCode = 503) => {
  const responseInfo: IResponseInfo = {
    error: true,
    httpCode: httpCode,
  };
  return response(data, responseInfo);
};
