import { Router } from "express";
import {
  validateSchemaMiddleware,
  verifyTokenMiddleware,
} from "../middlewares";
import {
  createUserController,
  listUsersController,
  retrieveUserController,
} from "../controllers";
import { userBodySerializer } from "../serializers";

const userRouter = Router();

userRouter.get("", listUsersController);
userRouter.post(
  "",
  validateSchemaMiddleware(userBodySerializer),
  createUserController
);
userRouter.get("/:id", verifyTokenMiddleware, retrieveUserController);

export default userRouter;
