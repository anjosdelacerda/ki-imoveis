import AppDataSource from "../../data-source";
import { IPropertyRequest } from "../../interfaces/properties";

import { Addresses } from "../../entities/addresses.entity";
import { Categories } from "../../entities/categories.entity";
import { Properties } from "../../entities/properties.entity";

import { AppError } from "../../errors/appError";

const createPropertyService = async ({
  value,
  size,
  categoryId,
  address: { district, zipCode, number, city, state },
}: IPropertyRequest) => {
  const categoryRepository = AppDataSource.getRepository(Categories);
  const addressRepository = AppDataSource.getRepository(Addresses);
  const propertyRepository = AppDataSource.getRepository(Properties);

  const addresses = await addressRepository.find();

  const zipCodeRepeated = addresses.find((add) => add.zipCode === zipCode);
  const numberRepeated = addresses.find((add) => add.number === number);

  const category = await categoryRepository.findOneBy({ id: categoryId });

  if (numberRepeated && zipCodeRepeated) {
    throw new AppError(
      "property already registred or another property registred at this address",
      400
    );
  }

  if (zipCode.length > 8) {
    throw new AppError("maximum characters is 8", 400);
  }

  if (state.length > 2) {
    throw new AppError("maximum characters is 2", 400);
  }

  if (!category) {
    throw new AppError("category not found", 404);
  }

  const address = new Addresses();
  address.district = district;
  address.zipCode = zipCode;
  address.number = number;
  address.city = city;
  address.state = state;

  addressRepository.create(address);
  await addressRepository.save(address);

  const property = new Properties();
  property.value = value;
  property.size = size;
  property.address = address;
  property.category = category;

  propertyRepository.create(property);
  await propertyRepository.save(property);

  return property;
};

export default createPropertyService;
