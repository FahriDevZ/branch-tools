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
const ms_1 = __importDefault(require("ms"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config = __importStar(require("../config"));
const AuthorizeUserError_1 = __importDefault(require("../exceptions/AuthorizeUserError"));
function authenticate(password) {
    if (password !== config.UserPassword) {
        throw new AuthorizeUserError_1.default('Authentication failed. Wrong password.');
    }
    const payload = {
        pentilMu: config.UserPassword,
        time: new Date(),
    };
    return jsonwebtoken_1.default.sign(payload, config.AppKey, {
        expiresIn: ms_1.default('30d'),
    });
}
exports.default = authenticate;
//# sourceMappingURL=authenticate.js.map