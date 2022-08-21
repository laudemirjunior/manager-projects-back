import { Request, Response } from "express";
import { editProjectService } from "../../services";
import { handleError } from "../../utils";

export const editProjectController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;

  try {
    const newProject = await editProjectService(body, id);
    return res.status(200).json(newProject);
  } catch (error) {
    return handleError(error, res);
  }
};
