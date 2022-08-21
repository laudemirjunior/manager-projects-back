import { Request, Response } from "express";
import { editTaskService } from "../../services";
import { handleError } from "../../utils";

export const editTaskController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;

  try {
    const newTask = await editTaskService(body, id);
    return res.status(204).json(newTask);
  } catch (error) {
    return handleError(error, res);
  }
};
