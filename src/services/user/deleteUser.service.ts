import AppDataSource from "../../data-source";

import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(Users);

  const users = await userRepository.find();

  const user = users.find((usuario) => usuario.id === id);

  if (!user) {
    throw new AppError("user not found", 404);
  }

  if (user.isActive === false) {
    throw new AppError("user unable to deactive", 400);
  } else {
    await userRepository.update(user!.id, { isActive: false });
  }

  return true;
};

export default deleteUserService;
