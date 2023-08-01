import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

function Cell(props) {

    return(
        <StyledCell type={'L'} color={TETROMINOS['L'].color}/>
    )
}

export default Cell;