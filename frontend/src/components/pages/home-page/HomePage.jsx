import { Container } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../molecules/navbar/Navbar";
import RegisterForm from "../../molecules/form/RegisterForm";
import { Box, Button, CssBaseline, Grid, Paper } from "@mui/material";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <Container sx={{ mt: 15 }}>
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={5}>
            <Box
              sx={{
                fontSize: 50,
                fontWeight: "bold",
                textAlign: "start",
                px: 2,
              }}
            >
              One tool to manage every tasks
            </Box>
            <Box
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                textAlign: "start",
                mt: 2,
                px: 2,
              }}
            >
              OTM is the tool to manage <br /> internal tasks for your company
            </Box>
          </Grid>
          <Grid item xs={12} sm={8} md={7} elevation={6} square>
            <img src="./images/home-demo.png" />
          </Grid>
        </Grid>

        {/* ///////////////////// */}
        <Grid container component="main" sx={{ height: "100vh" }}>
          <CssBaseline />
          <Grid item xs={false} sm={4} md={6}>
            <RegisterForm />
          </Grid>
          <Grid item xs={false} sm={8} md={6} mt={14}>
            <Box
              sx={{
                fontSize: 50,
                fontWeight: "bold",
                textAlign: "start",
                px: 2,
              }}
            >
              Looking it for your company ?
            </Box>
            <Box
              sx={{
                fontSize: 28,
                fontWeight: "bold",
                textAlign: "start",
                mt: 2,
                px: 2,
              }}
            >
              Register your company from here and add your employees to get
              started with internal task management
            </Box>
            <Box component="div" mt={3} mx={1} textAlign="start">
              <Button
                variant="outlined"
                to="/company/register"
                sx={{ fontSize: 18 }}
              >
                Register YOur Company
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* <RegisterForm /> */}
      <br />
      <br />
    </div>
  );
};

export default HomePage;
