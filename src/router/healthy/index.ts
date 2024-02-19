import Router from "express";
import { ExceptionHandler } from "../../middleware/ExceptionHandler";
import { HealthyController } from "../../controller/health/HealthyController";

const healthyRouter = Router();

healthyRouter.get("/ping", ExceptionHandler.asyncHandler(HealthyController.ping));

export default healthyRouter;