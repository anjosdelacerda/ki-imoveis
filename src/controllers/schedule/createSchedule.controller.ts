import { Request, Response } from "express";
import createScheduleService from "../../services/schedule/createSchedule.service";

const createScheduleController = async (req: Request, res: Response) => {
  const { date, hour, propertyId } = req.body;
  const userId = req.user.id;

  const schedule = await createScheduleService({
    propertyId,
    date,
    hour,
    userId,
  });

  console.log("7: schedule vindo do service");
  return res.status(201).json({ message: "created" });
};

export default createScheduleController;
