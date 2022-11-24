import "reflect-metadata";
import "express-async-errors";
import express, { Request, Response, NextFunction } from "express";
import { handdleErrorMiddleware } from "./middlewares/handleError.middleware";

import userRoutes from "./routes/user.routes";
import loginRoutes from "./routes/login.routes";
import categoryRoutes from "./routes/category.routes";
import propertyRoutes from "./routes/property.routes";
import scheduleRoutes from "./routes/schedule.routes";

const app = express();
app.use(express.json());

app.use(userRoutes);
app.use(loginRoutes);
app.use(categoryRoutes);
app.use(propertyRoutes);
app.use(scheduleRoutes);

app.use(handdleErrorMiddleware);

export default app;
