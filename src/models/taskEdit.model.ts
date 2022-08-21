import * as yup from "yup";

export const taskEditModel = yup.object().shape({
  name: yup.string(),
  conclude: yup.boolean(),
  delivery: yup.date(),
});
