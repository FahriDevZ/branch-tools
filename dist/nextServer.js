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
const next_1 = __importDefault(require("next"));
const config = __importStar(require("./config"));
const app = next_1.default({ dev: config.IsDevelopment, dir: config.RootDir });
exports.app = app;
const handle = app.getRequestHandler();
exports.handle = handle;
//# sourceMappingURL=nextServer.js.map