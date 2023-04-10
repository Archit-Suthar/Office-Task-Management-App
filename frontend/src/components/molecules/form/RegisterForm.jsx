import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import BusinessIcon from "@mui/icons-material/Business";
import Typography from "@mui/material/Typography";
import { createTheme } from "@mui/material/styles";
import { Formik, Form, Field } from "formik";
import Copyright from "../../atoms/copyright/Copyright";
import { CompanyRegisterSchema } from "./CompanySchema";
import { Container } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { companyUserRegister } from "../../../redux/company-user/userThunks";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Loading from "../../atoms/loading/Loading";

const theme = createTheme();

const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.user
  );
  const handleSubmit = (values, event) => {
    dispatch(companyUserRegister(values));
  };

  useEffect(() => {
    if (isAuthenticated) navigate("/dashboard");
  }, [isAuthenticated]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    }
  }, [error]);

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <Formik
          initialValues={{
            company_name: "",
            company_website: "",
            company_contact: "",
            company_address: "",
            company_industry: "",
            user_name: "",
            user_email: "",
            user_password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={CompanyRegisterSchema}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Box
              sx={{
                my: 1,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                <BusinessIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register Your Company
              </Typography>
              <Form>
                <Field
                  name="company_name"
                  type="name"
                  label="Company Name"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.company_name) &&
                    Boolean(touched.company_name)
                  }
                  helperText={
                    Boolean(touched.company_name) && errors.company_name
                  }
                />
                <Field
                  name="company_website"
                  type="text"
                  label="Company Website"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.company_website) &&
                    Boolean(touched.company_website)
                  }
                  helperText={
                    Boolean(touched.company_website) && errors.company_website
                  }
                />
                <Field
                  name="company_contact"
                  type="phone"
                  label="Company Contact Number"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.company_contact) &&
                    Boolean(touched.company_contact)
                  }
                  helperText={
                    Boolean(touched.company_contact) && errors.company_contact
                  }
                />
                <Field
                  name="company_address"
                  type="address"
                  label="Company Address"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.company_address) &&
                    Boolean(touched.company_address)
                  }
                  helperText={
                    Boolean(touched.company_address) && errors.company_address
                  }
                />
                <Field
                  name="company_industry"
                  type="text"
                  label="Industry"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.company_industry) &&
                    Boolean(touched.company_industry)
                  }
                  helperText={
                    Boolean(touched.company_industry) && errors.company_industry
                  }
                />
                <Field
                  name="user_name"
                  type="name"
                  label="Your Name"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.user_name) && Boolean(touched.user_name)
                  }
                  helperText={Boolean(touched.user_name) && errors.user_name}
                />
                <Field
                  name="user_email"
                  type="email"
                  label="Your Email"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.user_email) && Boolean(touched.user_email)
                  }
                  helperText={Boolean(touched.user_email) && errors.user_email}
                />
                <Field
                  name="user_password"
                  type="password"
                  label="Your Password"
                  as={TextField}
                  margin="normal"
                  fullWidth
                  error={
                    Boolean(errors.user_password) &&
                    Boolean(touched.user_password)
                  }
                  helperText={
                    Boolean(touched.user_password) && errors.user_password
                  }
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Submit
                </Button>
              </Form>

              {/* <Copyright sx={{ mt: 5 }} /> */}
            </Box>
          )}
        </Formik>
      )}
    </Container>
  );
};

export default RegisterForm;
