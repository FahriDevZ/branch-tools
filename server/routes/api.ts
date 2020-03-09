import { Router, RequestHandler, ErrorRequestHandler } from 'express';
import bodyParser from 'body-parser';
import stackTrace from 'stack-trace';
import Boom from '@hapi/boom';
import randomString from 'randomstring';
import _ from 'lodash';
import ms from 'ms';
import * as config from '../config';
import getString from '../utils/getString';
import createApp, { AppConfigParameters } from '../branch/createApp';
import Logger from '../utils/Logger';
import authenticate from '../user/authenticate';
import verifySignature from '../user/verifySignature';
import AuthorizeUserError from '../exceptions/AuthorizeUserError';
import VerifyUserError from '../exceptions/VerifyUserError';

const router = Router();
const log = new Logger(__dirname);

router.use(bodyParser.urlencoded({ extended: true }));

router.post('/authenticate', (req, res, next) => {
  const password = getString(req.body.password);
  try {
    const signature = authenticate(password as string);
    res.cookie('__session', signature, {
      maxAge: ms('30d'),
      httpOnly: true,
    });
    res.json({ status: 0, data: signature });
  } catch (error) {
    if (error instanceof AuthorizeUserError) {
      next(Boom.unauthorized(error.message));
    } else {
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
        signature = getString(splitted[1]) || '';
      }
    }
  }

  if (!signature) {
    next(Boom.unauthorized('You not logged, Authorize to continue'));
    return;
  }

  try {
    res.locals.signature = verifySignature(signature);
    next();
  } catch (error) {
    if (error.code) {
      next(Boom.unauthorized(error.message));
    } else if (error instanceof VerifyUserError) {
      if (error.message === 'Session is unavailable') {
        error.message = 'Your request was made with invalid credentials.';
      }
      next(Boom.unauthorized(error.message));
    } else {
      next(error);
    }
  }
});

router.post('/create-app', async (req, res, next) => {
  const userId = getString(req.body.user_id, true);
  const devEmail = getString(req.body.user_email, true);
  const redirectLink = getString(req.body.redirect_link, true);
  const ogTitle = getString(req.body.og_title, true);
  const ogImageUrl = getString(req.body.og_image_url, true);
  const ogDescription = getString(req.body.og_description, true);

  const errors = [];
  if (userId === null) errors.push('user_id must be fieds');
  if (devEmail === null) errors.push('user_email must be fieds');
  if (redirectLink === null) errors.push('user_id must be fieds');

  const appName = randomString.generate({
    length: _.random(12, 50),
    charset: 'alphanumeric',
    capitalization: 'lowercase',
  });

  const parameters: AppConfigParameters = {
    userId: userId as string,
    devEmail: devEmail as string,
    appName,
    devName: appName,
    universalLinkingEnabled: true,
    fireUrl: redirectLink as string,
    windowsPhoneUrl: redirectLink as string,
    blackBerryUrl: redirectLink as string,
    webUrl: redirectLink as string,
    defaultDesktopUrl: redirectLink as string,
  };

  if (ogTitle) parameters.ogTitle = ogTitle;
  if (ogImageUrl) parameters.ogImageUrl = ogImageUrl;
  if (ogDescription) parameters.ogDescription = ogDescription;

  try {
    const appConfig = await createApp(parameters);
    const urlPath = appConfig.branchKey.replace('key_live_', '');
    const logUrl = `https://bnc.lt/a/${urlPath}`;
    res.json({
      status: 0,
      data: logUrl,
    });
  } catch (error) {
    if (!error.isAxiosError || !error.response) {
      next(error);
      return;
    }

    const response = error.response;
    if (response.status && response.data && response.status === 400) {
      // eslint-disable-next-line no-console
      console.log(response.data);
      const errorMessage = response.data.error.message.replace('dev email', 'user email');
      next(Boom.badRequest(errorMessage));
      return;
    }

    next(error);
  }
});

const notFoundRoute: RequestHandler = (_req, _res, next) => {
  next(Boom.notFound());
};

const errorFormatRoute: ErrorRequestHandler = (error, _req, _res, next) => {
  if (Boom.isBoom(error)) {
    next(error);
    return;
  }

  // When error by axios send error badGateway
  if (error.isAxiosError) {
    next(Boom.badGateway(error));
    return;
  }

  next(Boom.boomify(error));
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
const errorHandlerRoute: ErrorRequestHandler = (err, req, res, _next) => {
  const { statusCode, ...payload } = err.output.payload;
  const error = {
    code: statusCode,
    error: payload,
    data: err.data || undefined,
  };

  if (config.IsDevelopment) {
    error.error.stack = stackTrace.parse(err);
  }

  if (config.IsDevelopment && statusCode === 500) {
    error.error.message = err.message;
  }

  if (err.isServer && statusCode === 500) {
    const loggerLog = JSON.stringify(
      {
        request: `${req.method} ${req.url}`,
        error,
      },
      null,
      config.IsDevelopment ? 2 : 0,
    );

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

export default router;
