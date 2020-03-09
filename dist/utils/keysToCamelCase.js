"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
/**
 * @example
 *   import keysToCamelCase from './keysToCamelCase';
 *   keysToCamelCase({bad_key: 1});   => {badKey: 1}
 *   keysToCamelCase([{bad_key: 1}]); => [{badKey: 1}]
 */
function keysToCamelCase(object) {
    let camelCaseObject = lodash_1.default.cloneDeep(object);
    if (lodash_1.default.isArray(camelCaseObject)) {
        return lodash_1.default.map(camelCaseObject, keysToCamelCase);
    }
    camelCaseObject = lodash_1.default.mapKeys(camelCaseObject, (_value, key) => {
        return lodash_1.default.camelCase(key);
    });
    // Recursively apply throughout object
    return lodash_1.default.mapValues(camelCaseObject, value => {
        if (lodash_1.default.isPlainObject(value)) {
            return keysToCamelCase(value);
        }
        if (lodash_1.default.isArray(value)) {
            return lodash_1.default.map(value, keysToCamelCase);
        }
        return value;
    });
}
exports.default = keysToCamelCase;
//# sourceMappingURL=keysToCamelCase.js.map