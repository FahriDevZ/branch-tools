"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const dotenv_1 = __importDefault(require("dotenv"));
/**
 * Load .env file or for tests the .env.test file.
 */
dotenv_1.default.config({
    path: path_1.join(process.cwd(), `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`),
});
/**
 * Get environment
 *
 * @param {string} key Environment name
 * @param {*} [defaultValue] Default value when environment name not defined
 * @return {string|boolean|*}
 */
exports.default = (key, defaultValue) => {
    if (process.env.hasOwnProperty(key) === false)
        return defaultValue;
    const value = process.env[key];
    if (value === 'true')
        return true;
    if (value === 'false')
        return false;
    return value;
};
/**
 * Get required environment
 * @param key Environment name
 */
function getOsEnv(key) {
    if (typeof process.env[key] === 'undefined') {
        throw new Error(`Environment variable ${key} is not set.`);
    }
    return process.env[key];
}
exports.getOsEnv = getOsEnv;
/**
 * Get optional environment
 * @param key Environment name
 */
function getOsEnvOptional(key) {
    return process.env[key];
}
exports.getOsEnvOptional = getOsEnvOptional;
function getPath(path) {
    return process.env.NODE_ENV === 'production'
        ? path_1.join(process.cwd(), `${path.replace('server/', 'dist/server/').slice(0, -3)}.js`)
        : path_1.join(process.cwd(), path);
}
exports.getPath = getPath;
function getPaths(paths) {
    return paths.map(p => getPath(p));
}
exports.getPaths = getPaths;
function getOsPath(key) {
    return getPath(getOsEnv(key));
}
exports.getOsPath = getOsPath;
function getOsEnvArray(key, delimiter = ',') {
    const value = process.env[key];
    return (value && value.split(delimiter)) || [];
}
exports.getOsEnvArray = getOsEnvArray;
function getOsPaths(key) {
    return getPaths(getOsEnvArray(key));
}
exports.getOsPaths = getOsPaths;
//# sourceMappingURL=env.js.map