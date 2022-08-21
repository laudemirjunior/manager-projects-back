import * as yup from "yup";

export const userModel = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().required(),
  password: yup.string().min(6).required(),
});
