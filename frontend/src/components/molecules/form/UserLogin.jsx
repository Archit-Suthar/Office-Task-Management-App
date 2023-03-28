import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Formik, Form, Field, FormikErrors, FormikTouched } from "formik";
import Copyright from "../../atoms/copyright/Copyright";
import { UserLoginSchema } from "./UserLoginSchema";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../redux/company-user/userThunks";
import Loading from "../../atoms/loading/Loading";
import { toast, ToastContainer } from "react-toastify";

const theme = createTheme();

const UserLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { error, loading, isAuthenticated } = useSelector(
    (state) => state.user
  );
  const handleSubmit = (values, event) => {
    dispatch(loginUser(values));
    if (error.length > 0)
      toast.error(error, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
            }}
          >
            {loading ? (
              <Loading />
            ) : (
              <Formik
                initialValues={{ user_email: "", user_password: "" }}
                onSubmit={handleSubmit}
                validationSchema={UserLoginSchema}
              >
                {({ errors, isValid, touched, dirty }) => (
                  <Box
                    sx={{
                      mt: 1,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                      <AccountCircleIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      User Login
                    </Typography>
                    <Form>
                      <Field
                        name="user_email"
                        type="email"
                        label="Email Address"
                        as={TextField}
                        margin="normal"
                        fullWidth
                        autoFocus
                        error={
                          Boolean(errors.user_email) &&
                          Boolean(touched.user_email)
                        }
                        helperText={
                          Boolean(touched.user_email) && errors.user_email
                        }
                      />
                      <Field
                        name="user_password"
                        type="password"
                        label="Password"
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
                        Login
                      </Button>
                    </Form>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Forgot password?
                        </Link>
                      </Grid>
                    </Grid>
                    {/* <Copyright sx={{ mt: 5 }} /> */}
                  </Box>
                )}
              </Formik>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default UserLogin;
