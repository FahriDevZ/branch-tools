"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserError extends Error {
    /**
     * UserError constructor
     * {string} message
     */
    constructor(message) {
        super();
        Error.call(this, message);
        Error.captureStackTrace(this, UserError);
        this.name = 'UserError';
        this.message = message;
    }
}
exports.default = UserError;
//# sourceMappingURL=UserError.js.map