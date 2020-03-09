import { Router, RequestHandler } from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import { app } from '../nextServer';
import * as config from '../config';
import Logger from '../utils/Logger';
import apiRoute from './api';
import verifySignature from '../user/verifySignature';
import AuthorizeUserError from '../exceptions/AuthorizeUserError';
import VerifyUserError from '../exceptions/VerifyUserError';

const router = Router();
const log = new Logger(__dirname);
const authMiddleware: RequestHandler = (req, res, next) => {
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
    res.locals.signature = verifySignature(signature);
    next();
  } catch (error) {
    if (
      error instanceof AuthorizeUserError ||
      error instanceof VerifyUserError ||
      error.name === 'TokenExpiredError'
    ) {
      res.clearCookie('__session');
      res.redirect(302, '/login');
    } else {
      next(error);
    }
  }
};

router.use(cookieParser(config.AppKey));
router.use(
  morgan(config.LOG.output, {
    stream: {
      write: log.info.bind(log),
    },
  }),
);

router.use((_req, res, next) => {
  res.locals.siteConfig = {
    name: config.AppName,
    title: config.AppTitle,
    description: config.AppDescription,
  };
  next();
});

router.use('/api', apiRoute);

router.get('/', authMiddleware, (req, res) => {
  return app.render(req, res, '/', req.query);
});

router.get('/logout', (req, res) => {
  res.clearCookie('__session');
  return app.render(req, res, '/logout', req.query);
});

router.get('/login', authMiddleware, (req, res) => {
  return app.render(req, res, '/login', req.query);
});

export default router;
