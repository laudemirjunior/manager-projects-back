import { DeleteResult, UpdateResult } from "typeorm";
import { ITask } from "../task/interfaces";
import { IUser } from "../user/interfaces";

interface IProject {
  id: string;
  name: string;
  user?: IUser;
  tasks?: ITask[];
}

interface CreationProject {
  name: string;
}

interface IProjectRepository {
  createProject: (project: CreationProject) => IProject;
  saveProject: (project: IProject) => Promise<IProject>;
  updateProject: (
    id: string,
    update: { [x: string]: unknown }
  ) => Promise<UpdateResult>;
  findProject: (key: string, value: string) => Promise<IProject>;
  deleteProject: (id: string) => Promise<DeleteResult>;
  findProjectWithTasks: (key: string, value: string) => Promise<IProject>;
}

export { IProject, CreationProject, IProjectRepository };
