import { IWeatherApiResponse } from '../interface';
export declare const success: (data: IWeatherApiResponse, httpCode?: number) => {
    error: boolean;
    data: any;
    httpCode: any;
};
export declare const failure: (data: IWeatherApiResponse, httpCode?: number) => {
    error: boolean;
    data: any;
    httpCode: any;
};
