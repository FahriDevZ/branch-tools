import UserError from './UserError';

class AuthorizeUserError extends UserError {
  /**
   * AuthorizeUserError constructor
   * {string} message
   */
  constructor(message: string) {
    super(message);
    Error.call(this, message);
    this.name = 'authorizeUserError';
    this.message = message;
  }
}

export default AuthorizeUserError;
