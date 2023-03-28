import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CardItem from "../../molecules/card/CardItem";

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
        <Box component="div" textAlign="start" mx={2}>
          <Typography variant="h4">Hey there,</Typography>
          <Typography component="h5">
            Here is the quick status summary of your tickets
          </Typography>
        </Box>

        <Box component="div" mt={3} sx={{ display: "flex" }} flexWrap="wrap">
          <CardItem title="Available Tickets" descText="10" />
          <CardItem title="Tickets Completed" descText="10" />
          <CardItem title="Assigned to You" descText="10" />
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
