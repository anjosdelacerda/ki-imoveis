import AppDataSource from "../../data-source";

import { Properties } from "../../entities/properties.entity";
import { AppError } from "../../errors/appError";

const listPropertiesService = async () => {
  const propertyRepository = AppDataSource.getRepository(Properties);
  const properties = await propertyRepository.find();

  if (!properties) {
    throw new AppError("Properties not found", 404);
  }

  return properties;
};

export default listPropertiesService;
