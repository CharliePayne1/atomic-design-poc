import React from "react";
import { Typography } from "@mui/material";
import './text.css';

export const Text = ({ text, fontSize = 14 }) => {
    return (
        <Typography sx={{ fontSize: {fontSize} }} color="text.secondary" gutterBottom >
            {text}
        </Typography>
  )
}