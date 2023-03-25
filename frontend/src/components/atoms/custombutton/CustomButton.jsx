import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ text, handleOnClick, fontSize }) => {
  return (
    <Button
      onClick={handleOnClick}
      sx={{
        backgroundColor: "#5a42f5",
        color: "whitesmoke",
        fontWeight: "bold",
        textTransform: "none",
        px: 2,
        fontSize: { fontSize },
        ":hover": {
          backgroundColor: "#9b93cf",
        },
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
