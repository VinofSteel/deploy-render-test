import { AppDataSource } from "../../data-source";
import { User } from "../../entities/user.entity";
import { IUserResponse } from "../../interfaces";
import { userResponseSerializer } from "../../serializers";

const retrieveUserService = async (userId: number): Promise<IUserResponse> => {
  const userRepo = AppDataSource.getRepository(User);
  const users = await userRepo.findOneByOrFail({ id: userId });

  return await userResponseSerializer.validate(users, { stripUnknown: true });
};

export default retrieveUserService;
