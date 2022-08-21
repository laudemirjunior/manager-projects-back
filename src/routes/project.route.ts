import { Router } from "express";
import {
  createProjectController,
  deleteProjectController,
  editProjectController,
  searchAllProjectController,
} from "../controllers";
import {
  validateModelMiddleware,
  validateOwnerMiddleware,
  validateTokenMiddleware,
} from "../middlewares";
import { projectModel } from "../models";

const projectRouter = Router();

projectRouter.post(
  "/project",
  validateTokenMiddleware,
  validateModelMiddleware(projectModel),
  createProjectController
);

projectRouter.get(
  "/project",
  validateTokenMiddleware,
  searchAllProjectController
);

projectRouter.patch(
  "/project/:id",
  validateTokenMiddleware,
  validateModelMiddleware(projectModel),
  validateOwnerMiddleware,
  editProjectController
);

projectRouter.delete(
  "/project/:id",
  validateTokenMiddleware,
  validateOwnerMiddleware,
  deleteProjectController
);

export { projectRouter };
