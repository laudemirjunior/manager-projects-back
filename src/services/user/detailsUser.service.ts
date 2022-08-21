import { IUser, UserRepository } from "../../repositories";
import { ErrorHandler } from "../../utils";

export const detailsUserService = async (email: string) => {
  try {
    const user: IUser = await new UserRepository().findUser(email);
    delete user.password;
    return user;
  } catch {
    throw new ErrorHandler(400, "Not found");
  }
};
