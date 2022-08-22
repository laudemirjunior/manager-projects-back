import {
  CreationTask,
  TaskRepository,
} from "../../repositories/task/repository";
import { ErrorHandler } from "../../utils";

export const editTaskService = async (body: CreationTask, id: string) => {
  try {
    for (const [key, value] of Object.entries(body)) {
      if (
        key === "name" ||
        key === "conclude" ||
        (key === "delivery" && body)
      ) {
        await new TaskRepository().updateProduct(id, {
          [key]: value,
        });
      }
    }

    const Task = await new TaskRepository().findTask(id);

    return Task;
  } catch {
    throw new ErrorHandler(404, "Not found");
  }
};
