import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces";
import { usersResponseSerializer } from "../../serializers";

const listUsersService = async (): Promise<IUserResponse[]> => {
  const userRepo = AppDataSource.getRepository(User);
  const users = await userRepo.find();

  return await usersResponseSerializer.validate(users, { stripUnknown: true });
};

export default listUsersService;
