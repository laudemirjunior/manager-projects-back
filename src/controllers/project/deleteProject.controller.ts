import { Request, Response } from "express";
import { deleteProjectService } from "../../services";
import { handleError } from "../../utils";

export const deleteProjectController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const newProject = await deleteProjectService(id);
    return res.status(204).json(newProject);
  } catch (error) {
    return handleError(error, res);
  }
};
