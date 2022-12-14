import {AxiosRequestConfig} from "axios";
import {fetchToken} from "../utils/localStorage/token";

export const authHeaderMiddleware = (config: AxiosRequestConfig): AxiosRequestConfig => {
  config.headers = {
    ...config.headers,
    Authorization: `Token ${fetchToken()}`,
  };

  return config;
};

export const externalAuthHeaderMiddleware = (
  config: AxiosRequestConfig,
  externalToken: string
): AxiosRequestConfig => {
  config.headers = {
    ...config.headers,
    Authorization: `Token ${externalToken}`,
  };

  return config;
};
