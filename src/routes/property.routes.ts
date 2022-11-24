import { Router } from "express";
import { authUserMiddleware } from "../middlewares/authUser.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";

import createPropertyController from "../controllers/property/createProperty.controller";
import listPropertiesController from "../controllers/property/listProperties.controller";

const routes = Router();

routes.post(
  "/properties",
  authUserMiddleware,
  verifyAdmMiddleware,
  createPropertyController
);
routes.get("/properties", listPropertiesController);

export default routes;
