import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({ text, handleOnClick, fontSize, type }) => {
  return (
    <Button
      onClick={handleOnClick}
      type={type ? type : "button"}
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
