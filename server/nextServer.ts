import next from 'next';
import * as config from './config';

const app = next({ dev: config.IsDevelopment, dir: config.RootDir });
const handle = app.getRequestHandler();

export { app, handle };
