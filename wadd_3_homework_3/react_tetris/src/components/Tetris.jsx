import { createStage } from "../gameHelper";
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";
import { StyledTetris, StyledTetrisWrapper } from "./styles/StyledTetris";



export default function Tetris(props) {


    return (
        <StyledTetrisWrapper>
            <StyledTetris>
                <Stage stage={createStage()}/>
                <aside>
                    <div>
                        <Display text="Score"/>
                        <Display text="Rows"/>
                        <Display text="Levels"/>
                    </div>
                    <StartButton/>
                </aside>
            </StyledTetris>
        </StyledTetrisWrapper>
    )
}