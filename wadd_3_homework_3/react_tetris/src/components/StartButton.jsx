import React from 'react';
import { StyledStartButton } from "./styles/StyledStartButton";


export default function StartButton(props) {


    return (
        <StyledStartButton onClick={props.callback}>
            Start Game
        </StyledStartButton>
    )
}