import React from 'react';
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

import { createStage, checkCollision } from "../gameHelper";
import { usePlayer } from "./hooks/usePlayer";
import { useStage } from "./hooks/useStage";
import { useState } from "react";

export default function Tetris(props) {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player, updatePlayerPos, resetPlayer, playerRotate] = usePlayer()
    const [stage, setStage] = useStage(player, resetPlayer)

    console.log("re-render")

    const movePlayer = dir => {
        if(!checkCollision(player, stage, { x: dir, y: 0 })) {
            updatePlayerPos({ x: dir, y: 0 }) 
        }
    }

    const startGame = () => {
        setStage(createStage());
        resetPlayer();
        setGameOver(false);
    }

    const drop = () => {
        if(!checkCollision(player, stage, { x: 0, y: 1 })) {
            updatePlayerPos({ x:0, y:1, collided: false })
        } else {
            if ( player.pos.y < 1 ) {
                console.log("Game Over!")
                setGameOver(true)
                setDropTime(null)
            }
            updatePlayerPos({ x: 0, y: 0, collided: true })
        }
    }

    const dropPlayer = () => {
        drop()
    }

    const move = ({ keyCode }) => {
        if(!gameOver) {
            if (keyCode === 37) {
                movePlayer(-1);
            } else if(keyCode === 39) {
                movePlayer(1);
            } else if(keyCode === 40) {
                dropPlayer()
            } else if(keyCode === 38) {
                playerRotate(stage, 1);
            }
        }
    }

    return (
        <StyledTetrisWrapper role="button" tabIndex="0" onKeyDown={e => move(e)} >
            <StyledTetris>
                <Stage stage={stage}/>
                <aside>
                    {gameOver ? (
                        <Display gameOver={gameOver} text='Game Over' />
                    ) : (
                        <div>
                            <Display text="Score"/>
                            <Display text="Rows"/>
                            <Display text="Levels"/>
                        </div>
                    )}
                    <StartButton callback={startGame}/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}