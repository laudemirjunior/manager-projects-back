import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";

@Entity("tasks")
export class TaskEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  conclude: boolean;

  @Column({ nullable: false })
  delivery: Date;

  @ManyToOne(() => ProjectEntity, (project) => project.tasks)
  project: ProjectEntity;
}
