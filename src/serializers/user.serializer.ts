import * as yup from "yup";
import { IUserBody, IUserResponse } from "../interfaces";

const userBodySerializer: yup.SchemaOf<IUserBody> = yup.object().shape({
  username: yup.string().required(),
  email: yup.string().email().required(),
  age: yup.number().positive().required(),
  password: yup.string().required(),
});

const userResponseSerializer: yup.SchemaOf<IUserResponse> = yup.object().shape({
  createdAt: yup.date(),
  age: yup.number(),
  email: yup.string(),
  username: yup.string(),
  id: yup.number(),
});

const usersResponseSerializer: yup.SchemaOf<IUserResponse[]> = yup
  .array(userResponseSerializer);

export { userBodySerializer, userResponseSerializer, usersResponseSerializer };
