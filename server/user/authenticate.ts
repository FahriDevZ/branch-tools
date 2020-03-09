import ms from 'ms';
import jwt from 'jsonwebtoken';
import Payload from './payload';
import * as config from '../config';
import AuthorizeUserError from '../exceptions/AuthorizeUserError';

function authenticate(password: string): string {
  if (password !== config.UserPassword) {
    throw new AuthorizeUserError('Authentication failed. Wrong password.');
  }

  const payload: Payload = {
    pentilMu: config.UserPassword,
    time: new Date(),
  };

  return jwt.sign(payload, config.AppKey, {
    expiresIn: ms('30d'),
  });
}

export default authenticate;
