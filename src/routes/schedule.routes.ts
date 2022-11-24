import { Router } from "express";
import { authUserMiddleware } from "../middlewares/authUser.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";

import createScheduleController from "../controllers/schedule/createSchedule.controller";
import listScheduleController from "../controllers/schedule/listSchedule.controller";

const routes = Router();

routes.post("/schedules", authUserMiddleware, createScheduleController);
routes.get(
  "/schedules/properties/:id",
  authUserMiddleware,
  verifyAdmMiddleware,
  listScheduleController
);

export default routes;
