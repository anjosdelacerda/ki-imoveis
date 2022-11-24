import { Request, Response } from "express";
import createPropertyService from "../../services/property/createProperty.service";

const createPropertyController = async (req: Request, res: Response) => {
  const {
    value,
    size,
    categoryId,
    address: { district, zipCode, number, city, state },
  } = req.body;

  const property = await createPropertyService({
    value,
    size,
    categoryId,
    address: { district, zipCode, number, city, state },
  });

  // console.log(property, "5: propriedade recebida do service");

  return res.status(201).json(property);
};

export default createPropertyController;
