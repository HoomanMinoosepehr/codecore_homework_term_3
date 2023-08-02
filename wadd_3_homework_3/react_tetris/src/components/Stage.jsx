import React from 'react';
import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";


export default function Stage({ stage }) {


    return (
        <StyledStage width={stage[0].length} heigh={stage.length}>
            {stage.map(row => row.map((cell, index) => <Cell key={index} type={cell[0]}/>))}
        </StyledStage>
    )
} 