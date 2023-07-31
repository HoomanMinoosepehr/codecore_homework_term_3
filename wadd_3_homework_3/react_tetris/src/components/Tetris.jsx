import { createStage } from "../gameHelper";
import Display from "./Display";
import Stage from "./Stage";
import StartButton from "./StartButton";



export default function Tetris(props) {


    return (
        <div>
            <Stage stage={createStage()}/>
            <div>
                <div>
                    <Display text="Score"/>
                    <Display text="Rows"/>
                    <Display text="Levels"/>
                </div>
                <StartButton/>
            </div>
        </div>
    )
}