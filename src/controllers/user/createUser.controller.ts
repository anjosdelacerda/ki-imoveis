import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import createUserService from "../../services/user/createUser.service";

const createUserController = async (req: Request, res: Response) => {
  const { name, email, password, isAdm } = req.body;

  const createUser = await createUserService({
    name,
    email,
    password,
    isAdm,
  });

  return res.status(201).json(instanceToPlain(createUser));
};

export default createUserController;
