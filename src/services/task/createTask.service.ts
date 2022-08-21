import { ProjectRepository } from "../../repositories";
import { CreationTask } from "../../repositories/task/interfaces";
import { TaskRepository } from "../../repositories/task/repository";

export const createTaskService = async (body: CreationTask, id: string) => {
  const project = await new ProjectRepository().findProject(id);

  const createTask = new TaskRepository().createTask(body);

  createTask.project = project;

  const saveTask = await new TaskRepository().saveTask(createTask);

  return saveTask;
};
