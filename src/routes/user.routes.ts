import { Router } from "express";

import createUserController from "../controllers/user/createUser.controller";
import deleteUserController from "../controllers/user/deleteUser.controller";
import listUserController from "../controllers/user/listUser.controller";

import { authUserMiddleware } from "../middlewares/authUser.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";

const routes = Router();

routes.post("/users", createUserController);
routes.get(
  "/users",
  authUserMiddleware,
  verifyAdmMiddleware,
  listUserController
);
routes.delete(
  "/users/:id",
  authUserMiddleware,
  verifyAdmMiddleware,
  deleteUserController
);

export default routes;
