import { Response } from "express";

class ErrorHandler {
  public status: number;
  public message: string;

  constructor(status: number, message: string) {
    this.status = status;
    this.message = message;
  }
}
interface IError {
  status: number;
  message: string;
}

const handleError = async (err: IError, res: Response) => {
  if (err instanceof ErrorHandler) {
    const { status, message } = err;

    return res.status(status).json({ error: message });
  }

  return res.status(400).json(err);
};

export { ErrorHandler, handleError };
