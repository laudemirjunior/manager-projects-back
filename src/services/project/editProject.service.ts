import { ProjectRepository } from "../../repositories/project/repository";
import { ErrorHandler } from "../../utils";

export const editProjectService = async (
  body: { name: string },
  id: string
) => {
  try {
    for (const [key, value] of Object.entries(body)) {
      if (key === "name") {
        await new ProjectRepository().updateProject(id, {
          [key]: value,
        });
      }
    }

    const project = await new ProjectRepository().findProject(id);

    return project;
  } catch {
    throw new ErrorHandler(404, "Not found");
  }
};
