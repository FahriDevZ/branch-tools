/* eslint-disable max-classes-per-file */

export class ErrorBody {
  code: number;

  message: string;
}

export class ErrorScheme {
  error: ErrorBody;
}
