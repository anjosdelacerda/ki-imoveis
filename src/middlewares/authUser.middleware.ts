import { Request, Response, NextFunction } from "express";

import jwt from "jsonwebtoken";

export const authUserMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let token = req.headers.authorization;
    token = token?.split(" ")[1];

    jwt.verify(
      token as string,
      process.env.SECRET_KEY as string,
      (err: any, decoded: any) => {
        req.user = {
          isAdm: decoded.isAdm,
          id: decoded.id,
        };

        next();
      }
    );
  } catch (err) {
    return res.status(401).json({ message: "Invalid Token" });
  }
};
