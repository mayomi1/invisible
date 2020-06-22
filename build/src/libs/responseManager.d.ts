import { IWeatherApiResponse } from '../interface';
export declare const success: (data: any[], httpCode?: number) => {
    httpCode: number;
    error: boolean;
    data: any;
};
export declare const failure: (data: IWeatherApiResponse, httpCode?: number) => {
    httpCode: number;
    error: boolean;
    data: any;
};
