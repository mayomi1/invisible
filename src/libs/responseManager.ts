import {
  IFailure,
  IFailureData,
  IFormattedWeatherResponse,
  IResponseInfo,
  ISuccess,
  IWeatherApiResponse,
} from '../interface';
import {getLocationCurrentTime} from './utility';

const formatData = (
  weatherApiResponse: IWeatherApiResponse[] | undefined
): IFormattedWeatherResponse[] => {
  const formattedWeatherResponses: IFormattedWeatherResponse[] = [];
  Array.isArray(weatherApiResponse) &&
    weatherApiResponse.map((res: any) => {
      formattedWeatherResponses.push({
        location: res.name,
        current_time: getLocationCurrentTime(res.coord),
        weather: res.weather,
        main: res.main,
      });
    });

  return formattedWeatherResponses;
};

const responseFormat = (httpCode: number, error: boolean, data: any) => {
  return {
    httpCode,
    error,
    data,
  };
};
const response = (
  responseInfo: IResponseInfo,
  data?: IWeatherApiResponse[],
  failedData?: IFailureData
) => {
  if (responseInfo.error) {
    return responseFormat(
      responseInfo.httpCode,
      responseInfo.error,
      failedData
    );
  } else {
    return responseFormat(
      responseInfo.httpCode,
      responseInfo.error,
      formatData(data)
    );
  }
};

export const success = (
  data: IWeatherApiResponse[],
  httpCode = 200
): ISuccess => {
  const responseInfo: IResponseInfo = {
    error: false,
    httpCode: httpCode,
  };
  return response(responseInfo, data);
};

export const failure = (data: IFailureData, httpCode = 503): IFailure => {
  const responseInfo: IResponseInfo = {
    error: true,
    httpCode: httpCode,
  };
  return response(responseInfo, undefined, data);
};

export const logResponse = async (
  getArrayInput: Promise<IFailure | ISuccess>
) => {
  return console.log(JSON.stringify(await getArrayInput, null, ' '));
};
