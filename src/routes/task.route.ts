import { Router } from "express";
import {
  createTaskController,
  deleteTaskController,
  editTaskController,
  searchAllTaskController,
} from "../controllers";
import {
  validateModelMiddleware,
  validateOwnerMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import { taskEditModel, taskModel } from "../models";

const taskRouter = Router();

taskRouter.post(
  "/task/:id",
  validateTokenMiddleware,
  validateModelMiddleware(taskModel),
  validateOwnerMiddleware,
  createTaskController
);

taskRouter.get(
  "/task/:id",
  validateTokenMiddleware,
  validateOwnerMiddleware,
  searchAllTaskController
);

taskRouter.patch(
  "/task/:id",
  validateTokenMiddleware,
  validateModelMiddleware(taskEditModel),
  validateOwnerMiddleware,
  editTaskController
);

taskRouter.delete(
  "/task/:id",
  validateTokenMiddleware,
  validateOwnerMiddleware,
  deleteTaskController
);

export { taskRouter };
