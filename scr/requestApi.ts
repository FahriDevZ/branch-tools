/**
 * Koyok.e pervuma aku ngawe negeiki barang, kampret
 */

import axios, { AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios';

const isServer = typeof window === 'undefined';

/**
 * Error handle from rest api
 * @param {AxiosError} error
 * @return {AxiosError}
 */
export const handleException = (error: AxiosError): AxiosError => {
  let errorMessage = '';
  if (error.response) {
    const data = error.response.data;
    if (!data) {
      errorMessage = 'Empty response!';
    } else if (data.error.message) {
      errorMessage = data.error.message;
    } else {
      errorMessage = 'Invalid error response!';
    }
  } else if (error.request) {
    errorMessage = 'The request was made but no response, try check your connection';
  } else {
    errorMessage = error.message;
  }
  if (errorMessage) {
    error.message = errorMessage;
  }
  return error;
};

/**
 * Run fetch local api
 *
 * @returns {AxiosInstance}
 */

function requestApi(): AxiosInstance {
  const params: AxiosRequestConfig = { baseURL: '/api' };
  const instance = axios.create(params);
  instance.interceptors.response.use(
    response => response,
    error => {
      const exceptions = handleException(error);
      if (isServer) {
        if (exceptions) {
          delete exceptions.config;
        }
      }
      return Promise.reject(exceptions);
    },
  );
  return instance;
}

export default requestApi;
