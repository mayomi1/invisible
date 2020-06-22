export interface IWeatherApiResponse {
  main: any,
  weather: any;
  // city: string;
  // timezone: string;
  // time: string;
  // weather: string;
  // weather_desc: string;
  // temp: string;
  // pressure: string;
  // humidity: string;
  // wind_speed: string;
  // wind_deg: string;
}

export interface IFormatedWeatherResponse {
  query: string | number;
  city: string;
  timeZone: string;
  currentTime: string;
  weather: string;
  weatherDescription: string;
  temperature: string;
  pressure: string;
  humidity: string;
  windSpeed: string;
  windDirection: string;
}

export interface IResponseInfo {
  error: boolean;
  httpCode: number;
}

export interface ICoordinate {
  lon: number;
  lat: number;
}
