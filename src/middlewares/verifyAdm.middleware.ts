import { Request, Response, NextFunction } from "express";

import AppDataSource from "../data-source";

import { Users } from "../entities/users.entity";
import { AppError } from "../errors/appError";

const verifyAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const id = req.user.id;

  const userRepository = AppDataSource.getRepository(Users);
  const users = await userRepository.find();
  const user = users.find((user) => user.id === id);

  if (!user?.isAdm) {
    throw new AppError("access required authorization", 403);
  }

  next();
};

export default verifyAdmMiddleware;
