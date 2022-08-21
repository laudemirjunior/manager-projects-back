import { Request, Response } from "express";
import { searchAllProjectService } from "../../services";
import { handleError } from "../../utils";

export const searchAllProjectController = async (
  req: Request,
  res: Response
) => {
  const { email } = req;

  try {
    const newProject = await searchAllProjectService(email);
    return res.status(200).json(newProject);
  } catch (error) {
    return handleError(error, res);
  }
};
