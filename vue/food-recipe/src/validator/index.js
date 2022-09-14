// import { string, object } from "yup";
import * as yup from "yup";

export const signupSchema = yup.object({
  first_name: yup.string().min(6).required(),
  last_name: yup.string().min(6).required(),
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});
