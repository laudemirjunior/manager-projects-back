import moment from "moment";
import { ProjectRepository } from "../../repositories";

export const searchAllTaskService = async (id: string) => {
  const project = await new ProjectRepository().findProjectWithTasks(id);

  project.tasks.forEach((item) => {
    const data = new Date();
    const delivery = new Date(item.delivery);

    if (item.conclude === true) {
      item.status = "Concluída";
    } else if (moment(data).format("L") <= moment(delivery).format("L")) {
      item.status = "Pendente";
    } else {
      item.status = "Vencida";
    }
  });

  project.tasks.sort((a, b) => a.delivery.getTime() - b.delivery.getTime());

  return project;
};
