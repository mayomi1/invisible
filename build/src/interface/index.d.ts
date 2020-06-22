export interface IWeatherApiResponse {
    main: any;
    weather: any;
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
