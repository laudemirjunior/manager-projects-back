import { IUser, UserRepository } from "../../repositories";

export const searchAllProjectService = async (email: string) => {
  const projects: IUser = await new UserRepository().findUserWithProjects(
    email
  );

  return projects.projects;
};
