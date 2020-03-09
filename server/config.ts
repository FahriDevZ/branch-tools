import path from 'path';
import env, { getOsEnv } from './utils/env';

export const NODE = env('NODE_ENV', 'development');
export const PORT = Number(env('PORT', 3000));
export const IsProduction = env('NODE_ENV') === 'production';
export const IsTest = env('NODE_ENV') === 'test';
export const IsDevelopment = env('NODE_ENV') === 'development';
export const RootDir = path.join(process.cwd());
export const LOG = {
  level: env('LOG_LEVEL', 'debug'),
  // json: toBool(getOsEnvOptional('LOG_JSON')),
  output: env('LOG_OUTPUT', 'dev'),
};
export const AppKey = getOsEnv('APP_KEY');
export const UserPassword = getOsEnv('USER_PASSWORD');
export const AppName = getOsEnv('APP_NAME');
export const AppTitle = env('APP_NAME', AppName);
export const AppDescription = getOsEnv('APP_DESCRIPTION');
