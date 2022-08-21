import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { TaskEntity } from "./task.entity";
import { UserEntity } from "./user.entity";

@Entity("projects")
export class ProjectEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @ManyToOne(() => UserEntity, (user) => user.projects)
  user: UserEntity;

  @OneToMany(() => TaskEntity, (task) => task.project)
  tasks: TaskEntity[];
}
