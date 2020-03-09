import axios, { AxiosRequestConfig, AxiosError } from 'axios';

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
    errorMessage = 'Server KO cuk, kakean seng ngawe paleng...';
  } else {
    errorMessage = error.message;
  }
  if (errorMessage) {
    error.message = errorMessage;
  }
  return error;
};

const request = (config?: AxiosRequestConfig) => {
  const defaultParams: AxiosRequestConfig = {
    baseURL: 'https://api2.branch.io/v1',
  };
  const params: AxiosRequestConfig = { ...defaultParams, ...config };
  const instance = axios.create(params);
  instance.interceptors.response.use(
    response => response,
    error => {
      const exceptions = handleException(error);
      return Promise.reject(exceptions);
    },
  );
  return instance;
};

export default request;
