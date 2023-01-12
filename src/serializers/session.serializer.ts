import * as yup from "yup";
import { ISessionBody } from "../interfaces";

const sessionBodySerializer: yup.SchemaOf<ISessionBody> = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export { sessionBodySerializer };
