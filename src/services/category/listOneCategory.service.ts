import AppDataSource from "../../data-source";

import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";

const listOneCategoryService = async (id: string) => {
  const categoryRepository = AppDataSource.getRepository(Categories);

  const category = await categoryRepository.findOne({
    relations: {
      properties: true,
    },
    where: {
      id: id,
    },
  });

  if (!category) {
    throw new AppError("Category if not exists", 404);
  }

  return category;
};

export default listOneCategoryService;
