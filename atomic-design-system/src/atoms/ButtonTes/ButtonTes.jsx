import { Button } from "@mui/material";
import React from "react";

export const ButtonTes = ({cta = 'apply now'}) => {
    return (<Button variant="contained" size="small">{cta}</Button>)
}