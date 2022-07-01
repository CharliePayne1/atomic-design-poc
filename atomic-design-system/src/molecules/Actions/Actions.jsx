import React from "react";
import CardActions from '@mui/material/CardActions';
import { ButtonTes } from "../../atoms/ButtonTes/ButtonTes"

export const Actions = ({apply = 'apply', learnMore = 'learn more'}) => {
    return (
        <CardActions>
            <ButtonTes cta={apply}/>
            <ButtonTes cta={learnMore} />
        </CardActions>
    )
}