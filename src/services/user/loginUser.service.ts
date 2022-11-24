import AppDataSource from "../../data-source";
import { IUserLogin } from "../../interfaces/users";
import { Users } from "../../entities/users.entity";
import { AppError } from "../../errors/appError";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUserService = async ({ email, password }: IUserLogin) => {
  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();

  const user = users.find((user) => user.email === email);

  if (!user) {
    throw new AppError("Invalid email or Password ", 403);
  }

  if (!bcrypt.compareSync(password, user.password)) {
    throw new AppError("Invalid email or Password ", 403);
  }

  if (user.isActive === false) {
    throw new AppError("user is inative", 406);
  }

  const token = jwt.sign(
    { isAdm: user.isAdm, id: user.id },
    String(process.env.SECRET_KEY),
    {
      expiresIn: "1d",
    }
  );

  return token;
};

export default loginUserService;
