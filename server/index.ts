import Express, { Request, Response, Application } from 'express';
import { configure, format, transports } from 'winston';
import { app, handle } from './nextServer';
import path from 'path';
import helmet from 'helmet';
import Logger from './utils/Logger';
import * as config from './config';
import routes from './routes';

configure({
  transports: [
    new transports.Console({
      level: config.LOG.level,
      handleExceptions: true,
      format: config.IsProduction
        ? format.combine(format.json())
        : format.combine(format.colorize(), format.simple()),
    }),
  ],
});

const log = new Logger(__dirname);

(async () => {
  try {
    await app.prepare();

    const server: Application = Express();
    server.set('port', config.PORT);
    server.set('env', config.NODE);

    server.use(helmet());
    server.use(helmet.hidePoweredBy({ setTo: 'ZendServer 8.5.0,ASP.NET' }));
    server.use(Express.static(path.join(config.RootDir, 'static')));
    server.use(routes);

    server.all('*', (req: Request, res: Response) => {
      return handle(req, res);
    });

    log.info('Listening http server');
    server.listen(config.PORT, (err?: any) => {
      if (err) throw err;
      log.info(`> Ready on localhost:${config.PORT} - env ${config.NODE}`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();
