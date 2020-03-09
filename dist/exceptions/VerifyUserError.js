"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserError_1 = __importDefault(require("./UserError"));
class VerifyUserError extends UserError_1.default {
    /**
     * VerifyUserError constructor
     * {string} message
     */
    constructor(message) {
        super(message);
        Error.call(this, message);
        this.name = 'verifyUserError';
        this.message = message;
    }
}
exports.default = VerifyUserError;
//# sourceMappingURL=VerifyUserError.js.map