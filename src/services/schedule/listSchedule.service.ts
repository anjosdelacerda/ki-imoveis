import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";

import { AppError } from "../../errors/appError";

const listScheduleService = async (id: string) => {
  const propertyRepository = AppDataSource.getRepository(Properties);

  const properties = await propertyRepository.find();
  const property = properties.find((property) => property.id === id);

  if (!property) {
    throw new AppError("property not found", 404);
  }

  return property;
};

export default listScheduleService;
