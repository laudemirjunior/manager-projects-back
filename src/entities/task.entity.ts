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

  @Column({ nullable: false })
  responsible: string;

  @ManyToOne(() => ProjectEntity, (project) => project.tasks, {
    onDelete: "CASCADE",
  })
  project: ProjectEntity;
  status: string;
}
