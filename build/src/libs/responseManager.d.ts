import { IFailureData, ISuccess, IWeatherApiResponse } from '../interface';
export declare const success: (data: IWeatherApiResponse[], httpCode?: number) => ISuccess;
export declare const failure: (data: IFailureData, httpCode?: number) => {
    httpCode: number;
    error: boolean;
    data: any;
};
export declare const logResponse: (res: IWeatherApiResponse[]) => void;
