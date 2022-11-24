import { Request, Response } from "express";
import listScheduleService from "../../services/schedule/listSchedule.service";

const listScheduleController = async (req: Request, res: Response) => {
  const { id } = req.params;

  const schedule = await listScheduleService(id);
  return res.status(200).json(schedule);
};

export default listScheduleController;
