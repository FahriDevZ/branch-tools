"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const env_1 = __importStar(require("./utils/env"));
exports.NODE = env_1.default('NODE_ENV', 'development');
exports.PORT = Number(env_1.default('PORT', 3000));
exports.IsProduction = env_1.default('NODE_ENV') === 'production';
exports.IsTest = env_1.default('NODE_ENV') === 'test';
exports.IsDevelopment = env_1.default('NODE_ENV') === 'development';
exports.RootDir = path_1.default.join(process.cwd());
exports.LOG = {
    level: env_1.default('LOG_LEVEL', 'debug'),
    // json: toBool(getOsEnvOptional('LOG_JSON')),
    output: env_1.default('LOG_OUTPUT', 'dev'),
};
exports.AppKey = env_1.getOsEnv('APP_KEY');
exports.UserPassword = env_1.getOsEnv('USER_PASSWORD');
exports.AppName = env_1.getOsEnv('APP_NAME');
exports.AppTitle = env_1.default('APP_NAME', exports.AppName);
exports.AppDescription = env_1.getOsEnv('APP_DESCRIPTION');
//# sourceMappingURL=config.js.map