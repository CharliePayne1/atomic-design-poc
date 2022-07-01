import { CardHeader } from "@mui/material";
import React from "react";
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ShareIcon from '@mui/icons-material/Share';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import SendIcon from '@mui/icons-material/Send';


export const Header = ({header, subheader}) => {
    return (
        <CardHeader action={
            <>
            <IconButton aria-label="settings">
              <ShareIcon />
            </IconButton>
            <IconButton aria-label="settings">
            <SaveAltIcon />
          </IconButton>
          <IconButton aria-label="settings">
              <SendIcon />
            </IconButton>
            </>
          }
          title={header}
          subheader={subheader}/>
    )
}