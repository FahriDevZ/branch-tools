import UserError from './UserError';

class VerifyUserError extends UserError {
  /**
   * VerifyUserError constructor
   * {string} message
   */
  constructor(message: string) {
    super(message);
    Error.call(this, message);
    this.name = 'verifyUserError';
    this.message = message;
  }
}

export default VerifyUserError;
