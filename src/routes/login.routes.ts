import { Router } from "express";
import loginUserController from "../controllers/user/loginUser.controller";

const routes = Router();

routes.post("/login", loginUserController);

export default routes;
