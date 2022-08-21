import { NextFunction, Response } from "express";
import { UserRepository } from "../repositories";
import { IUser } from "./../repositories";

export const validateOwnerMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  const { email } = req;
  const { id } = req.params;

  const projects: IUser = await new UserRepository().findUserWithProjects(
    email
  );

  const findProject = projects.projects.find((item) => item.id === id);

  if (!findProject && findProject !== undefined) {
    return res.status(404).json({ message: "Not found" });
  }
  if (projects.email !== email && findProject === undefined) {
    return res.status(404).json({ message: "Not found" });
  } else {
    return next();
  }
};
