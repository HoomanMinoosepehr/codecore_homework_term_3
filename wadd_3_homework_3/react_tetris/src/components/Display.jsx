import { StyledDisplay } from "./styles/StyledDisplay";


export default function Display(props) {

    return(
        <StyledDisplay gameOver={props.gameOver}>
            {props.text}
        </StyledDisplay>
    )
}