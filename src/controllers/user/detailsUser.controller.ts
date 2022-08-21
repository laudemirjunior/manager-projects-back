import { Request, Response } from "express";
import { detailsUserService } from "../../services";
import { handleError } from "../../utils";

export const detailsUserController = async (req: Request, res: Response) => {
  const { email } = req;
  try {
    const user = await detailsUserService(email);
    return res.status(200).json(user);
  } catch (error) {
    return handleError(error, res);
  }
};
