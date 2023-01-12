import { NextFunction, Request, Response } from "express";
import { AnySchema } from "yup";

const validateSchemaMiddleware =
  (serializer: AnySchema) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const validatedBody = await serializer.validate(req.body, {
      stripUnknown: true,
      abortEarly: false,
    });

    req.validatedBody = validatedBody;

    return next();
  };

export default validateSchemaMiddleware;
