"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const winston_1 = __importDefault(require("winston"));
class Logger {
    constructor(scope) {
        this.scope = Logger.parsePathToScope(scope || Logger.DEFAULT_SCOPE);
    }
    static parsePathToScope(filepath) {
        if (filepath.indexOf(path_1.default.sep) >= 0) {
            filepath = filepath.replace(process.cwd(), '');
            filepath = filepath.replace(`${path_1.default.sep}src${path_1.default.sep}`, '');
            filepath = filepath.replace(`${path_1.default.sep}dist${path_1.default.sep}`, '');
            filepath = filepath.replace('.ts', '');
            filepath = filepath.replace('.js', '');
            filepath = filepath.replace(path_1.default.sep, ':');
        }
        return filepath;
    }
    debug(message, ...args) {
        this.log('debug', message, args);
    }
    info(message, ...args) {
        this.log('info', message, args);
    }
    warn(message, ...args) {
        this.log('warn', message, args);
    }
    error(message, ...args) {
        this.log('error', message, args);
    }
    log(level, message, args) {
        if (winston_1.default)
            winston_1.default[level](`${this.formatScope()} ${message}`, args);
    }
    formatScope() {
        return `[${this.scope}]`;
    }
}
Logger.DEFAULT_SCOPE = 'app';
exports.default = Logger;
//# sourceMappingURL=Logger.js.map