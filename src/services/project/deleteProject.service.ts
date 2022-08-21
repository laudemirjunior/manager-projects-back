import { ProjectRepository } from "../../repositories/project/repository";
import { ErrorHandler } from "../../utils";

export const deleteProjectService = async (id: string) => {
  const project = await new ProjectRepository().deleteProject(id);

  if (project.affected === 0) {
    throw new ErrorHandler(404, "Not found");
  }

  return {};
};
