import AppDataSource from "../../data-source";
import { Properties } from "../../entities/properties.entity";
import { IScheduleRequest } from "../../interfaces/schedules";
import { Schedules } from "../../entities/schedules.entity";
import { Users } from "../../entities/users.entity";

import { AppError } from "../../errors/appError";

const createScheduleService = async ({
  userId,
  propertyId,
  date,
  hour,
}: IScheduleRequest) => {
  const scheduleRepository = AppDataSource.getRepository(Schedules);
  const userRepository = AppDataSource.getRepository(Users);
  const propertyRepository = AppDataSource.getRepository(Properties);

  const users = await userRepository.find();
  const user = users.find((user) => user.id === userId);

  if (!user) {
    throw new AppError("user not found", 404);
  }

  const properties = await propertyRepository.find();
  const property = properties.find((property) => property.id === propertyId);

  if (!property) {
    throw new AppError("property not found", 404);
  }

  const schedules = await scheduleRepository.find();
  const scheduleFind = schedules.find((schedule) => schedule);
  const dateSchedule = scheduleFind?.date.toString();
  const hourSchedule = scheduleFind?.hour.toString(); //sem isso ele não reconhece como string e o split falha igual da outra vez

  if (dateSchedule === date && hourSchedule === hour) {
    throw new AppError("schedule alredy exists", 400);
  }

  const scheduleTime = Number(hour.split(":")[0]);

  if (scheduleTime >= 18 || scheduleTime < 8) {
    throw new AppError("hour indisponible", 400);
  }

  const week = new Date(date);

  const dayOfWeek = week.getDay();

  // console.log(
  //   dayOfWeek,
  //   "5:está usando o getDay para pegar o dia, isso deve calcular o dia da semana"
  // );

  if (dayOfWeek === 6 || dayOfWeek === 0) {
    throw new AppError("Appointments only on weekdays", 400);
  }

  //lembrando que o pro javascript o primeiro dia da semana é zero e é domingo

  const schedule = new Schedules();
  schedule.date = date;
  schedule.hour = hour;
  schedule.user = user;
  schedule.property = property;

  scheduleRepository.create(schedule);
  await scheduleRepository.save(schedule);

  return schedule;
};

export default createScheduleService;
