import React from 'react';
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

function Cell(props) {

    return(
        <StyledCell type={props.type} color={TETROMINOS[props.type].color}/>
    )
}

export default Cell;