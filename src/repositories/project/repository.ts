import { getRepository, Repository } from "typeorm";
import { ProjectEntity } from "./../../entities/project.entity";
import { CreationProject, IProject, IProjectRepository } from "./interfaces";

class ProjectRepository implements IProjectRepository {
  private ormRepository: Repository<ProjectEntity>;

  constructor() {
    this.ormRepository = getRepository(ProjectEntity);
  }
  createProject = (project: CreationProject) =>
    this.ormRepository.create(project);
  saveProject = async (project: IProject) => this.ormRepository.save(project);
  updateProject = async (id: string, update: { [x: string]: unknown }) =>
    await this.ormRepository.update(id, update);
  findProject = async (id: string) => {
    return await this.ormRepository.findOne({
      where: { id },
    });
  };
  deleteProject = async (id: string) => await this.ormRepository.delete({ id });
  findProjectWithTasks = async (id: string) => {
    return await this.ormRepository.findOne({
      where: { id },
      relations: ["tasks"],
    });
  };
}

export { ProjectRepository, IProject, CreationProject };
