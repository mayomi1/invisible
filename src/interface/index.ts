export interface IConfig {
  weatherApi: IWeatherApi;
}

export interface IWeatherApi {
  host: string;
  apiKey: string | undefined;
}

export interface IWeatherApiResponse {
  main: IMain;
  weather: IWeather[];
  coord: ICoordinate;
  name: string;
}

export interface IMain {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

export interface IWeather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IFormattedWeatherResponse {
  location: string;
  current_time: string;
  weather: IWeather[];
  main: IMain;
}

export interface IResponseInfo {
  error: boolean;
  httpCode: number;
}

export interface ICoordinate {
  lon: number;
  lat: number;
}

export interface ISuccess extends IResponseInfo {
  data: IFormattedWeatherResponse[];
}

export interface IFailureData {
  message?: string;
}

export interface IFailure extends IResponseInfo {
  data: IFailureData;
}
