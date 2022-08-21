import { Request, Response } from "express";
import { createTaskService } from "../../services";
import { handleError } from "../../utils";

export const createTaskController = async (req: Request, res: Response) => {
  const body = req.body;
  const { id } = req.params;

  try {
    const newTask = await createTaskService(body, id);
    return res.status(201).json(newTask);
  } catch (error) {
    return handleError(error, res);
  }
};
