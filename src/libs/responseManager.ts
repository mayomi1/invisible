import {
  IFormatedWeatherResponse,
  IResponseInfo,
  IWeatherApiResponse,
} from '../interface';
import {getFormattedTimeFromTimeZone} from "./utility";

const formatData = (
  weatherApiResponse: any
): any => {
  const arr: any = [];
  weatherApiResponse.map((res: any) => {
    arr.push({
      location: res.name,
      currentTime: getFormattedTimeFromTimeZone(res.coord),
      timezone: res.timezone,
      weather: res.weather,
      main: res.main,
    })
  })

  return arr;
};

const response = (data: any, responseInfo: IResponseInfo) => {
   return {
     httpCode: responseInfo.httpCode,
     error: responseInfo.error,
     data: formatData(data),
  };
};

export const success = (data: any[], httpCode = 200) => {
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
