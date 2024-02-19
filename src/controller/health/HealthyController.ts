import { NextFunction, Request, Response } from "express";
import { OK } from "../../domain/response/SuccessResponse";

export class HealthyController {
  static async ping(req: Request, res: Response, next: NextFunction) {
    console.log(`[HealthyController]::register::`, req.body);
    return new OK("pong").send(res);
  }
}