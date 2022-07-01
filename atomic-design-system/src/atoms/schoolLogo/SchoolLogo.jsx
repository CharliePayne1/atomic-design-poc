import React from "react";
import { CardMedia } from "@mui/material";

const placeholderImage = 'https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png?w=640'

export const SchoolLogo = ({ url = placeholderImage }) => {
    return (
        <CardMedia
            component="img"
            height="140"
            image={url}
            alt="school logo"
      />
    )
}