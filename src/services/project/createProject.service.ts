import { IUser, UserRepository } from "../../repositories";
import { IProject } from "../../repositories/project/interfaces";
import { ProjectRepository } from "../../repositories/project/repository";

export const createProjectService = async (name: string, email: string) => {
  const user: IUser = await new UserRepository().findUser(email);

  const createProject: IProject = new ProjectRepository().createProject({
    name,
  });

  createProject.user = user;

  const saveProject: IProject = await new ProjectRepository().saveProject(
    createProject
  );

  delete saveProject.user.password;

  return saveProject;
};
