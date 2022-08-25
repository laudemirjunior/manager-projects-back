import { DeleteResult, UpdateResult } from "typeorm";
import { IProject } from "../project/interfaces";

interface ITask {
  id: string;
  name: string;
  conclude: boolean;
  delivery: Date;
  responsible: string;
  status?: string;
  project?: IProject;
}

interface CreationTask {
  name: string;
  conclude: boolean;
  delivery: Date;
  responsible: string;
  project?: IProject;
}

interface ITaskRepository {
  createTask: (task: CreationTask) => ITask;
  saveTask: (task: ITask) => Promise<ITask>;
  updateProduct: (
    id: string,
    update: { [x: string]: unknown }
  ) => Promise<UpdateResult>;
  findTask: (key: string, value: string) => Promise<ITask>;
  deleteTask: (id: string) => Promise<DeleteResult>;
}

export { ITask, CreationTask, ITaskRepository };
