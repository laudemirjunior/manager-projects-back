import * as yup from "yup";

export const projectModel = yup.object().shape({
  name: yup.string().required(),
});
