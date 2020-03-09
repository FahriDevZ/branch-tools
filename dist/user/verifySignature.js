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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config = __importStar(require("../config"));
const VerifyUserError_1 = __importDefault(require("../exceptions/VerifyUserError"));
const AuthorizeUserError_1 = __importDefault(require("../exceptions/AuthorizeUserError"));
function verifySignature(signature) {
    try {
        const decoded = jsonwebtoken_1.default.verify(signature, config.AppKey);
        if (!decoded.pentilMu) {
            throw new VerifyUserError_1.default('Invalid signature');
        }
        if (decoded.pentilMu !== config.UserPassword) {
            throw new AuthorizeUserError_1.default('Authentication failed. Wrong password.');
        }
        return signature;
    }
    catch (error) {
        if (error.name === 'TokenExpiredError') {
            error.message = 'Session has expired';
            error.debug = false;
        }
        else if (error.name === 'JsonWebTokenError') {
            error.message = error.message.replace('jwt', 'Session');
            error.debug = false;
        }
        if (['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(error.name)) {
            error.code = 'auth';
        }
        throw error;
    }
}
exports.default = verifySignature;
//# sourceMappingURL=verifySignature.js.map