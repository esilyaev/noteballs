import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export const SBITextField: React.FC<TextFieldProps> = (props) => {
  return <TextField variant="outlined" fullWidth size="small" {...props} />;
};
