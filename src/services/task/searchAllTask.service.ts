import { IProject, ProjectRepository } from "../../repositories";

export const searchAllTaskService = async (id: string) => {
  const project: IProject = await new ProjectRepository().findProjectWithTasks(
    id
  );

  return project;
};
