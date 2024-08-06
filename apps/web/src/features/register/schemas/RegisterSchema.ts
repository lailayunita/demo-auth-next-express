import * as Yup from "yup";
import YupPassword from "yup-password";
YupPassword(Yup);

export const RegisterSchema = Yup.object().shape({
  //penamaannya harus sama kayak di initialValues
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .minLowercase(1)
    .minNumbers(1)
    .minUppercase(1)
    .minSymbols(1)
    .min(6),
});