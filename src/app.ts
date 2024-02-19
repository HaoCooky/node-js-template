import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import compression from "compression";
import routers from "./router";
import { DatabaseModule, DI } from "./di";
import { RepositoryModule } from "./di/modules/RepositoryModule";
import { ExceptionHandler } from "./middleware/ExceptionHandler";
import { ServiceModule } from "./di/modules/ServiceModule";
import { ErrorResponse, InternalError, NotFoundRequestError } from './domain';

const app = express();

app.use(morgan("dev")); // 'dev' or 'combined'
app.use(helmet());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
DI.init([
  new DatabaseModule(),
  new RepositoryModule(),
  new ServiceModule()
]);
app.use("", routers);

app.use(ExceptionHandler.asyncHandler(async (_: Request, __: Response, ___: NextFunction) => {
  throw new NotFoundRequestError("Not Found!");
}));


app.use((error: Error, _: Request, res: Response, __: NextFunction) => {
  if (ErrorResponse.is(error)) {
    return res.status(error.statusCode).send(error.toString());
  }
  const internalError = new InternalError(error.message);
  return res.status(internalError.statusCode).json(internalError.toString());
});



// MongoDatabase.getInstance();

export default app;