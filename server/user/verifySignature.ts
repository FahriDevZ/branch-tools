import jwt from 'jsonwebtoken';
import Payload from './payload';
import * as config from '../config';
import VerifyUserError from '../exceptions/VerifyUserError';
import AuthorizeUserError from '../exceptions/AuthorizeUserError';

function verifySignature(signature: string): string {
  try {
    const decoded = jwt.verify(signature, config.AppKey) as Payload;
    if (!decoded.pentilMu) {
      throw new VerifyUserError('Invalid signature');
    }
    if (decoded.pentilMu !== config.UserPassword) {
      throw new AuthorizeUserError('Authentication failed. Wrong password.');
    }
    return signature;
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      error.message = 'Session has expired';
      error.debug = false;
    } else if (error.name === 'JsonWebTokenError') {
      error.message = error.message.replace('jwt', 'Session');
      error.debug = false;
    }
    if (['TokenExpiredError', 'JsonWebTokenError', 'NotBeforeError'].includes(error.name)) {
      error.code = 'auth';
    }
    throw error;
  }
}

export default verifySignature;
