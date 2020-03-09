"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
/**
 * @example
 *   import keysToSnakeCase from './keysToSnakeCase';
 *   keysToSnakeCase({bad_key: 1});   => {badKey: 1}
 *   keysToSnakeCase([{bad_key: 1}]); => [{badKey: 1}]
 */
function keysToSnakeCase(object) {
    let snakeCaseObject = lodash_1.default.cloneDeep(object);
    if (lodash_1.default.isArray(snakeCaseObject)) {
        return lodash_1.default.map(snakeCaseObject, keysToSnakeCase);
    }
    snakeCaseObject = lodash_1.default.mapKeys(snakeCaseObject, (_value, key) => {
        return lodash_1.default.snakeCase(key);
    });
    // Recursively apply throughout object
    return lodash_1.default.mapValues(snakeCaseObject, value => {
        if (lodash_1.default.isPlainObject(value)) {
            return keysToSnakeCase(value);
        }
        if (lodash_1.default.isArray(value)) {
            return lodash_1.default.map(value, keysToSnakeCase);
        }
        return value;
    });
}
exports.default = keysToSnakeCase;
//# sourceMappingURL=keysToSnakeCase.js.map