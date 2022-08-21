import { Request, Response } from "express";
import { createProjectService } from "../../services";
import { handleError } from "../../utils";

export const createProjectController = async (req: Request, res: Response) => {
  const { name } = req.body;
  const { email } = req;

  try {
    const newProject = await createProjectService(name, email);
    return res.status(201).json(newProject);
  } catch (error) {
    return handleError(error, res);
  }
};
