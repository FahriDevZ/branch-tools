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
const body_parser_1 = __importDefault(require("body-parser"));
const stack_trace_1 = __importDefault(require("stack-trace"));
const boom_1 = __importDefault(require("@hapi/boom"));
const randomstring_1 = __importDefault(require("randomstring"));
const lodash_1 = __importDefault(require("lodash"));
const ms_1 = __importDefault(require("ms"));
const config = __importStar(require("../config"));
const getString_1 = __importDefault(require("../utils/getString"));
const createApp_1 = __importDefault(require("../branch/createApp"));
const Logger_1 = __importDefault(require("../utils/Logger"));
const authenticate_1 = __importDefault(require("../user/authenticate"));
const verifySignature_1 = __importDefault(require("../user/verifySignature"));
const AuthorizeUserError_1 = __importDefault(require("../exceptions/AuthorizeUserError"));
const VerifyUserError_1 = __importDefault(require("../exceptions/VerifyUserError"));
const router = express_1.Router();
const log = new Logger_1.default(__dirname);
router.use(body_parser_1.default.urlencoded({ extended: true }));
router.post('/authenticate', (req, res, next) => {
    const password = getString_1.default(req.body.password);
    try {
        const signature = authenticate_1.default(password);
        res.cookie('__session', signature, {
            maxAge: ms_1.default('30d'),
            httpOnly: true,
        });
        res.json({ status: 0, data: signature });
    }
    catch (error) {
        if (error instanceof AuthorizeUserError_1.default) {
            next(boom_1.default.unauthorized(error.message));
        }
        else {
            next(error);
        }
    }
});
router.use((req, res, next) => {
    let signature = '';
    if (req.headers.authorization) {
        const splitted = req.headers.authorization.trim().split(' ');
        if (splitted && splitted.length >= 2) {
            if (splitted[0] === 'Bearer') {
                signature = getString_1.default(splitted[1]) || '';
            }
        }
    }
    if (!signature) {
        next(boom_1.default.unauthorized('You not logged, Authorize to continue'));
        return;
    }
    try {
        res.locals.signature = verifySignature_1.default(signature);
        next();
    }
    catch (error) {
        if (error.code) {
            next(boom_1.default.unauthorized(error.message));
        }
        else if (error instanceof VerifyUserError_1.default) {
            if (error.message === 'Session is unavailable') {
                error.message = 'Your request was made with invalid credentials.';
            }
            next(boom_1.default.unauthorized(error.message));
        }
        else {
            next(error);
        }
    }
});
router.post('/create-app', async (req, res, next) => {
    const userId = getString_1.default(req.body.user_id, true);
    const devEmail = getString_1.default(req.body.user_email, true);
    const redirectLink = getString_1.default(req.body.redirect_link, true);
    const ogTitle = getString_1.default(req.body.og_title, true);
    const ogImageUrl = getString_1.default(req.body.og_image_url, true);
    const ogDescription = getString_1.default(req.body.og_description, true);
    const errors = [];
    if (userId === null)
        errors.push('user_id must be fieds');
    if (devEmail === null)
        errors.push('user_email must be fieds');
    if (redirectLink === null)
        errors.push('user_id must be fieds');
    const appName = randomstring_1.default.generate({
        length: lodash_1.default.random(12, 50),
        charset: 'alphanumeric',
        capitalization: 'lowercase',
    });
    const parameters = {
        userId: userId,
        devEmail: devEmail,
        appName,
        devName: appName,
        universalLinkingEnabled: true,
        fireUrl: redirectLink,
        windowsPhoneUrl: redirectLink,
        blackBerryUrl: redirectLink,
        webUrl: redirectLink,
        defaultDesktopUrl: redirectLink,
    };
    if (ogTitle)
        parameters.ogTitle = ogTitle;
    if (ogImageUrl)
        parameters.ogImageUrl = ogImageUrl;
    if (ogDescription)
        parameters.ogDescription = ogDescription;
    try {
        const appConfig = await createApp_1.default(parameters);
        const urlPath = appConfig.branchKey.replace('key_live_', '');
        const logUrl = `https://bnc.lt/a/${urlPath}`;
        res.json({
            status: 0,
            data: logUrl,
        });
    }
    catch (error) {
        if (!error.isAxiosError || !error.response) {
            next(error);
            return;
        }
        const response = error.response;
        if (response.status && response.data && response.status === 400) {
            // eslint-disable-next-line no-console
            console.log(response.data);
            const errorMessage = response.data.error.message.replace('dev email', 'user email');
            next(boom_1.default.badRequest(errorMessage));
            return;
        }
        next(error);
    }
});
const notFoundRoute = (_req, _res, next) => {
    next(boom_1.default.notFound());
};
const errorFormatRoute = (error, _req, _res, next) => {
    if (boom_1.default.isBoom(error)) {
        next(error);
        return;
    }
    // When error by axios send error badGateway
    if (error.isAxiosError) {
        next(boom_1.default.badGateway(error));
        return;
    }
    next(boom_1.default.boomify(error));
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const errorHandlerRoute = (err, req, res, _next) => {
    const { statusCode, ...payload } = err.output.payload;
    const error = {
        code: statusCode,
        error: payload,
        data: err.data || undefined,
    };
    if (config.IsDevelopment) {
        error.error.stack = stack_trace_1.default.parse(err);
    }
    if (config.IsDevelopment && statusCode === 500) {
        error.error.message = err.message;
    }
    if (err.isServer && statusCode === 500) {
        const loggerLog = JSON.stringify({
            request: `${req.method} ${req.url}`,
            error,
        }, null, config.IsDevelopment ? 2 : 0);
        if (![401, 404, 403].includes(err.output.statusCode)) {
            log.info('Ngelog cok!');
        }
        if (config.IsProduction && ![401, 404, 403].includes(err.output.statusCode)) {
            log.error(loggerLog);
        }
    }
    res
        .status(err.output.statusCode)
        .set(err.output.headers)
        .json(error)
        .end();
};
router.use(notFoundRoute, errorFormatRoute, errorHandlerRoute);
exports.default = router;
//# sourceMappingURL=api.js.map