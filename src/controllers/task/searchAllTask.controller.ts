import { Request, Response } from "express";
import { searchAllTaskService } from "../../services";
import { handleError } from "../../utils";

export const searchAllTaskController = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    const tasks = await searchAllTaskService(id);
    return res.status(200).json(tasks);
  } catch (error) {
    return handleError(error, res);
  }
};
