import AppDataSource from "../../data-source";
import { Users } from "../../entities/users.entity";
import { IUserRequest } from "../../interfaces/users";
import { AppError } from "../../errors/appError";

import bcrypt from "bcryptjs";

const createUserService = async ({
  name,
  email,
  password,
  isAdm,
}: IUserRequest) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const emailAlreadyExists = users.find((user) => user.email === email);

  if (emailAlreadyExists) {
    throw new AppError("Email already exists", 400);
  }

  const hashPassword = bcrypt.hashSync(password, 10);

  const user = new Users();
  user.name = name;
  user.email = email;
  user.password = hashPassword;
  user.isAdm = isAdm;
  user.isActive = true;

  userRepository.create(user);
  await userRepository.save(user);

  return user;
};

export default createUserService;
