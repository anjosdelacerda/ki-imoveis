import AppDataSource from "../../data-source";

import { Categories } from "../../entities/categories.entity";
import { AppError } from "../../errors/appError";

const listCategoriesServices = async () => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const categories = await categoryRepository.find();

  if (!categories) {
    throw new AppError("no category found", 404);
  }

  return categories;
};

export default listCategoriesServices;
