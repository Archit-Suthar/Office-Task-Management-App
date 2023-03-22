import * as Yup from "yup";

export const UserLoginSchema = Yup.object().shape({
  user_email: Yup.string().required("Please Enter Your Email"),
  user_password: Yup.string().required("Please enter Your Password"),
});
