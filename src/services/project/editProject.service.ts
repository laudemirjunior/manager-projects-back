import { ProjectRepository } from "../../repositories/project/repository";

export const editProjectService = async (
  body: { name: string },
  id: string
) => {
  for (const [key, value] of Object.entries(body)) {
    if (key === "name") {
      await new ProjectRepository().updateProject(id, {
        [key]: value,
      });
    }
  }

  const project = await new ProjectRepository().findProject(id);

  return project;
};
