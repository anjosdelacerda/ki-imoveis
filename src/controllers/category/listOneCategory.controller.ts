import { Request, Response } from "express";

import listOneCategoryService from "../../services/category/listOneCategory.service";

const listOneCategoryController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const category = await listOneCategoryService(id);
  return res.status(200).json(category);
};

export default listOneCategoryController;
