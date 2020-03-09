import { join } from 'path';
import dotenv from 'dotenv';

/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({
  path: join(process.cwd(), `.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`),
});

/**
 * Get environment
 *
 * @param {string} key Environment name
 * @param {*} [defaultValue] Default value when environment name not defined
 * @return {string|boolean|*}
 */
export default (key: string, defaultValue?: any): string | boolean | any => {
  if (process.env.hasOwnProperty(key) === false) return defaultValue;
  const value = process.env[key];
  if (value === 'true') return true;
  if (value === 'false') return false;
  return value;
};

/**
 * Get required environment
 * @param key Environment name
 */
export function getOsEnv(key: string): string {
  if (typeof process.env[key] === 'undefined') {
    throw new Error(`Environment variable ${key} is not set.`);
  }

  return process.env[key] as string;
}

/**
 * Get optional environment
 * @param key Environment name
 */
export function getOsEnvOptional(key: string): string | undefined {
  return process.env[key];
}

export function getPath(path: string): string {
  return process.env.NODE_ENV === 'production'
    ? join(process.cwd(), `${path.replace('server/', 'dist/server/').slice(0, -3)}.js`)
    : join(process.cwd(), path);
}

export function getPaths(paths: string[]): string[] {
  return paths.map(p => getPath(p));
}

export function getOsPath(key: string): string {
  return getPath(getOsEnv(key));
}

export function getOsEnvArray(key: string, delimiter = ','): string[] {
  const value = process.env[key] as string;
  return (value && value.split(delimiter)) || [];
}

export function getOsPaths(key: string): string[] {
  return getPaths(getOsEnvArray(key));
}
