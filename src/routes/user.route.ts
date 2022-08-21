import { Router } from "express";
import {
  detailsUserController,
  loginUserController,
  patchUserController,
  registerUserController,
} from "../controllers";
import {
  validateModelMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import { userLoginModel, userModel } from "../models";

const userRouter = Router();

userRouter.post(
  "/user/register",
  validateModelMiddleware(userModel),
  registerUserController
);

userRouter.post(
  "/user/login",
  validateModelMiddleware(userLoginModel),
  loginUserController
);

userRouter.get("/user", validateTokenMiddleware, detailsUserController);

userRouter.patch("/user", validateTokenMiddleware, patchUserController);

export { userRouter };
