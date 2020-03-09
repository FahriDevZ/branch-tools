"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
exports.handleException = (error) => {
    let errorMessage = '';
    if (error.response) {
        const data = error.response.data;
        if (!data) {
            errorMessage = 'Empty response!';
        }
        else if (data.error.message) {
            errorMessage = data.error.message;
        }
        else {
            errorMessage = 'Invalid error response!';
        }
    }
    else if (error.request) {
        errorMessage = 'Server KO cuk, kakean seng ngawe paleng...';
    }
    else {
        errorMessage = error.message;
    }
    if (errorMessage) {
        error.message = errorMessage;
    }
    return error;
};
const request = (config) => {
    const defaultParams = {
        baseURL: 'https://api2.branch.io/v1',
    };
    const params = { ...defaultParams, ...config };
    const instance = axios_1.default.create(params);
    instance.interceptors.response.use(response => response, error => {
        const exceptions = exports.handleException(error);
        return Promise.reject(exceptions);
    });
    return instance;
};
exports.default = request;
//# sourceMappingURL=request.js.map