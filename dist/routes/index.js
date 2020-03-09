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
const express_1 = require("express");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const nextServer_1 = require("../nextServer");
const config = __importStar(require("../config"));
const Logger_1 = __importDefault(require("../utils/Logger"));
const api_1 = __importDefault(require("./api"));
const verifySignature_1 = __importDefault(require("../user/verifySignature"));
const AuthorizeUserError_1 = __importDefault(require("../exceptions/AuthorizeUserError"));
const VerifyUserError_1 = __importDefault(require("../exceptions/VerifyUserError"));
const router = express_1.Router();
const log = new Logger_1.default(__dirname);
const authMiddleware = (req, res, next) => {
    // eslint-disable-next-line no-underscore-dangle
    const signature = req.cookies.__session;
    if (signature && req.path === '/login') {
        res.redirect(302, '/');
        return;
    }
    if (req.path === '/login') {
        next();
        return;
    }
    if (!signature) {
        res.redirect(302, '/login');
        return;
    }
    try {
        res.locals.signature = verifySignature_1.default(signature);
        next();
    }
    catch (error) {
        if (error instanceof AuthorizeUserError_1.default ||
            error instanceof VerifyUserError_1.default ||
            error.name === 'TokenExpiredError') {
            res.clearCookie('__session');
            res.redirect(302, '/login');
        }
        else {
            next(error);
        }
    }
};
router.use(cookie_parser_1.default(config.AppKey));
router.use(morgan_1.default(config.LOG.output, {
    stream: {
        write: log.info.bind(log),
    },
}));
router.use((_req, res, next) => {
    res.locals.siteConfig = {
        name: config.AppName,
        title: config.AppTitle,
        description: config.AppDescription,
    };
    next();
});
router.use('/api', api_1.default);
router.get('/', authMiddleware, (req, res) => {
    return nextServer_1.app.render(req, res, '/', req.query);
});
router.get('/logout', (req, res) => {
    res.clearCookie('__session');
    return nextServer_1.app.render(req, res, '/logout', req.query);
});
router.get('/login', authMiddleware, (req, res) => {
    return nextServer_1.app.render(req, res, '/login', req.query);
});
exports.default = router;
//# sourceMappingURL=index.js.map