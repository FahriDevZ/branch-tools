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
const express_1 = __importDefault(require("express"));
const winston_1 = require("winston");
const nextServer_1 = require("./nextServer");
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const Logger_1 = __importDefault(require("./utils/Logger"));
const config = __importStar(require("./config"));
const routes_1 = __importDefault(require("./routes"));
winston_1.configure({
    transports: [
        new winston_1.transports.Console({
            level: config.LOG.level,
            handleExceptions: true,
            format: config.IsProduction
                ? winston_1.format.combine(winston_1.format.json())
                : winston_1.format.combine(winston_1.format.colorize(), winston_1.format.simple()),
        }),
    ],
});
const log = new Logger_1.default(__dirname);
(async () => {
    try {
        await nextServer_1.app.prepare();
        const server = express_1.default();
        server.set('port', config.PORT);
        server.set('env', config.NODE);
        server.use(helmet_1.default());
        server.use(helmet_1.default.hidePoweredBy({ setTo: 'ZendServer 8.5.0,ASP.NET' }));
        server.use(express_1.default.static(path_1.default.join(config.RootDir, 'static')));
        server.use(routes_1.default);
        server.all('*', (req, res) => {
            return nextServer_1.handle(req, res);
        });
        log.info('Listening http server');
        server.listen(config.PORT, (err) => {
            if (err)
                throw err;
            log.info(`> Ready on localhost:${config.PORT} - env ${config.NODE}`);
        });
    }
    catch (e) {
        console.error(e);
        process.exit(1);
    }
})();
//# sourceMappingURL=index.js.map