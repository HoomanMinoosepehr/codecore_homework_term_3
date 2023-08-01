import Cell from "./Cell";
import { StyledStage } from "./styles/StyledStage";


export default function Stage(props) {


    return (
        <StyledStage width={props.stage[0].length} heigh={props.stage.length}>
            {props.stage.map(row => row.map((cell, index) => {
               return <Cell key={index} type={cell[0]}/>
            }))}
        </StyledStage>
    )
} 