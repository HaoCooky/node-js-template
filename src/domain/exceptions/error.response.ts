import { StatusCode } from '../common';

const ReasonStatus = {
  BadRequest: "Bad request",
  UnAuthor: "UnAuthorization",
  NotFound: "NotFound",
  Forbidden: "Forbidden",
  Conflict: "Conflict",
  Internal: "Internal"
};

export class ErrorResponse extends Error {
  public readonly statusCode: StatusCode;

  constructor(message: string, statusCode: StatusCode) {
    super(message);
    this.statusCode = statusCode;
  }

  toString(){
    return {
      statusCode: this.statusCode,
      message: this.message,
    }
  }

  static is(ex: any): ex is ErrorResponse {
    return "statusCode" in ex;
  }
}

export class ConflictRequestError extends ErrorResponse {

  constructor(message = ReasonStatus.Conflict, statusCode = StatusCode.Conflict) {
    super(message, statusCode);
  }
}

export class UnAuthorRequestError extends ErrorResponse {
  constructor(message = ReasonStatus.UnAuthor, statusCode = StatusCode.UnAuthor) {
    super(message, statusCode);

  }
}

export class BadRequestError extends ErrorResponse {
  constructor(message = ReasonStatus.BadRequest, statusCode = StatusCode.BadRequest) {
    super(message, statusCode);
  }
}

export class ForbiddenRequestError extends ErrorResponse {
  constructor(message = ReasonStatus.Forbidden, statusCode = StatusCode.Forbidden) {
    super(message, statusCode);
  }
}

export class NotFoundRequestError extends ErrorResponse {
  constructor(message = ReasonStatus.NotFound, statusCode = StatusCode.NotFound) {
    super(message, statusCode);
  }

  static is(ex: any): ex is NotFoundRequestError {
    return "statusCode" in ex && ex.statusCode === StatusCode.NotFound;
  }
}

export class InternalError extends ErrorResponse {
  constructor(message = ReasonStatus.Internal, statusCode = StatusCode.Internal) {
    super(message, statusCode);
  }

}
