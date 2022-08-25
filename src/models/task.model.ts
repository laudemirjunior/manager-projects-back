import * as yup from "yup";

export const taskModel = yup.object().shape({
  name: yup.string().required(),
  conclude: yup.boolean().required(),
  delivery: yup.date().required(),
  responsible: yup.string().required(),
});
