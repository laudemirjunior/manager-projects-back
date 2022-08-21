import { Request, Response } from "express";
import { deleteTaskService } from "../../services";
import { handleError } from "../../utils";

export const deleteTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const newTask = await deleteTaskService(id);
    return res.status(200).json(newTask);
  } catch (error) {
    return handleError(error, res);
  }
};
