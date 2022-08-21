import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ProjectEntity } from "./project.entity";

@Entity("users")
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  password: string;

  @OneToMany(() => ProjectEntity, (project) => project.user)
  projects: ProjectEntity[];
}
