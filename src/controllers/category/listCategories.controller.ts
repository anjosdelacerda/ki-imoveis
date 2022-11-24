import { Request, Response } from "express";
import listCategoriesServices from "../../services/category/listCategories.service";

const listCategoriesController = async (req: Request, res: Response) => {
  const category = await listCategoriesServices();
  return res.status(200).json(category);
};

export default listCategoriesController;
