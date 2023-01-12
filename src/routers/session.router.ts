import { Router } from "express";
import { createSessionController } from "../controllers";
import { validateSchemaMiddleware } from "../middlewares";
import { sessionBodySerializer } from "../serializers";

const sessionRouter = Router();

sessionRouter.post(
  "",
  validateSchemaMiddleware(sessionBodySerializer),
  createSessionController
);

export default sessionRouter;
