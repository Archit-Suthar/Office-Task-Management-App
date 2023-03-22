import * as Yup from "yup";

export const CompanyRegisterSchema = Yup.object().shape({
  company_name: Yup.string().required("Please Enter Company Name"),
  company_website: Yup.string()
    .url("Please enter valid website")
    .required("Please Enter Company Website"),
  company_contact: Yup.string()
    .min(10)
    .max(12)
    .required("Please Enter Contact Number"),
  company_address: Yup.string().required("Please Enter Company Address"),
  company_industry: Yup.string().required("Please Enter Industry"),
  user_email: Yup.string().email().required("Please Enter Your Email"),
  user_password: Yup.string()
    .min(6, "Atleast 6 characters are required")
    .max(9, "Atmost 9 characters are required")
    .required("Please Enter Your Password"),
});
