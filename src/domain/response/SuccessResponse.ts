import { Response } from 'express';
import { StatusCode } from '../common/enum/StatusCode';

export enum ReasonStatus {
  OK = "ok",
  Created = "created",
}

export class SuccessResponse {
  private readonly message: string;
  private readonly statusCode: StatusCode;
  private readonly metaData: any;

  constructor(metaData = {}, message = ReasonStatus.OK, statusCode = StatusCode.OK) {
    this.message = message;
    this.statusCode = statusCode;
    this.metaData = metaData;
  }

  send(res: Response, headers = {}) {
    return res.status(this.statusCode).json(this);
  }
}


export class OK extends SuccessResponse {
  constructor(metaData = {}) {
    super(metaData, ReasonStatus.OK, StatusCode.OK);
  }
}

export class Created extends SuccessResponse {
  constructor(metaData = {}) {
    super(metaData, ReasonStatus.Created, StatusCode.Created);
  }
}