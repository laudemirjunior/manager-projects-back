import { UpdateResult } from "typeorm";
import { IProject } from "../project/interfaces";

interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
  projects?: IProject[];
}

interface CreationUser {
  name: string;
  email: string;
  password: string;
}

interface IUserRepository {
  createUser: (user: CreationUser) => IUser;
  saveUser: (user: IUser) => Promise<IUser>;
  findUser: (key: string, value: string) => Promise<IUser>;
  updateUser: (
    email: string,
    update: { name: string }
  ) => Promise<UpdateResult>;
  findUserWithProjects: (key: string, value: string) => Promise<IUser>;
}

export { IUser, CreationUser, IUserRepository };
