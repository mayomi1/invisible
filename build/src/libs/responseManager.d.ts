import { IFailure, IFailureData, ISuccess, IWeatherApiResponse } from '../interface';
export declare const success: (data: IWeatherApiResponse[], httpCode?: number) => ISuccess;
export declare const failure: (data: IFailureData, httpCode?: number) => IFailure;
export declare const logResponse: (getArrayInput: Promise<IFailure | ISuccess>) => Promise<void>;
