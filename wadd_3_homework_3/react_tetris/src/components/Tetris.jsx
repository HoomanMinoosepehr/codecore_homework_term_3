import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";

import { usePlayer } from "./hooks/usePlayer";
import { useStage } from "./hooks/useStage";
import { useState } from "react";

export default function Tetris(props) {
    const [dropTime, setDropTime] = useState(null)
    const [gameOver, setGameOver] = useState(false)

    const [player] = usePlayer()
    const [stage, setStage] = useStage(player)

    console.log("re-render")

    return (
        <StyledTetrisWrapper>
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
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}