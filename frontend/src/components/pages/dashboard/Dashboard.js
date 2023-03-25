import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Dashboard = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Box component="div" textAlign="start">
          <Typography variant="h4">Hey there,</Typography>
          <Typography component="h5">
            Here is the quick status summary of your tickets
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
