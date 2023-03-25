import { Card, CardContent, Divider, Typography } from "@mui/material";
import React from "react";

const CardItem = ({ title, descText }) => {
  return (
    <Card
      sx={{
        maxWidth: 200,
        maxHeight: 200,
        boxShadow: "none",
        border: "1px solid whitesmoke",
        m: 2,
        p: 1,
        px: 2,
      }}
    >
      <CardContent>
        <Typography
          gutterBottom
          variant="h6"
          component="div"
          textAlign="center"
        >
          {title}
        </Typography>
        <Divider />
        <Typography
          mt={3}
          textAlign="center"
          variant="body2"
          color="text.secondary"
        >
          {descText}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardItem;
