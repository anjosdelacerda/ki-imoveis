import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";

const listUserService = async () => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  return users;
};

export default listUserService;
