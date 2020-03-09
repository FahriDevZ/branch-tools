class UserError extends Error {
  /**
   * UserError constructor
   * {string} message
   */
  constructor(message: string) {
    super();
    Error.call(this, message);
    Error.captureStackTrace(this, UserError);
    this.name = 'UserError';
    this.message = message;
  }
}

export default UserError;
