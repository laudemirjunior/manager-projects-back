import { TaskRepository } from "../../repositories/task/repository";
import { ErrorHandler } from "../../utils";

export const deleteTaskService = async (id: string) => {
  const task = await new TaskRepository().deleteTask(id);

  if (task.affected === 0) {
    throw new ErrorHandler(404, "Not found");
  }

  return {};
};
