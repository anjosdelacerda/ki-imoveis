import AppDataSource from "../../data-source";
import { Categories } from "../../entities/categories.entity";
import { ICategoryRequest } from "../../interfaces/categories";

import { AppError } from "../../errors/appError";

const createCategoryService = async ({ name }: ICategoryRequest) => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const categories = await categoryRepository.find();

  const categoryAlreadyExists = categories.find(
    (category) => category.name === name
  );

  if (categoryAlreadyExists) {
    throw new AppError("category already exists", 400);
  }

  const category = new Categories();
  category.name = name;

  categoryRepository.create(category);
  await categoryRepository.save(category);

  return category;
};

export default createCategoryService;
