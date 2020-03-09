"use strict";
/**
 * Fix express getter
 *
 * @param {*} value var
 * @param {boolean} [isTrim] Trim string
 * @return {string|null}
 */
Object.defineProperty(exports, "__esModule", { value: true });
function getString(value, isTrim) {
    if (typeof value === 'string') {
        if (isTrim)
            return value.trim();
        return value;
    }
    if (Array.isArray(value) && value.length) {
        return getString(value[value.length - 1], isTrim);
    }
    return null;
}
exports.default = getString;
//# sourceMappingURL=getString.js.map