import {
  CreationTask,
  TaskRepository,
} from "../../repositories/task/repository";

export const editTaskService = async (body: CreationTask, id: string) => {
  for (const [key, value] of Object.entries(body)) {
    if (key === "name" || key === "conclude" || (key === "delivery" && body)) {
      await new TaskRepository().updateProduct(id, {
        [key]: value,
      });
    }
  }

  const Task = await new TaskRepository().findTask(id);

  return Task;
};
