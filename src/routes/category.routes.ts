import { Router } from "express";

import { authUserMiddleware } from "../middlewares/authUser.middleware";
import verifyAdmMiddleware from "../middlewares/verifyAdm.middleware";

import listCategoriesController from "../controllers/category/listCategories.controller";
import createCategoryController from "../controllers/category/createCategory.controller";
import listOneCategoryController from "../controllers/category/listOneCategory.controller";

const routes = Router();

routes.post(
  "/categories",
  authUserMiddleware,
  verifyAdmMiddleware,
  createCategoryController
);
routes.get("/categories", listCategoriesController);
routes.get("/categories/:id/properties", listOneCategoryController);

export default routes;
