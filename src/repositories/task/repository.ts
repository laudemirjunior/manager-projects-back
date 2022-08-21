import { getRepository, Repository } from "typeorm";
import { TaskEntity } from "../../entities/task.entity";
import { CreationTask, ITask, ITaskRepository } from "./interfaces";

class TaskRepository implements ITaskRepository {
  private ormRepository: Repository<TaskEntity>;

  constructor() {
    this.ormRepository = getRepository(TaskEntity);
  }
  createTask = (task: CreationTask) => this.ormRepository.create(task);
  saveTask = async (task: ITask) => this.ormRepository.save(task);
  updateProduct = async (id: string, update: { [x: string]: unknown }) =>
    await this.ormRepository.update(id, update);
  findTask = async (id: string) => {
    return await this.ormRepository.findOne({
      where: { id },
    });
  };
  deleteTask = async (id: string) => await this.ormRepository.delete({ id });
}

export { TaskRepository, ITask, CreationTask };
