import { useState } from "react";
import { createStage } from "../../gameHelper";



export function useStage(props) {
    const [stage, setStage] = useState(createStage())
    
    return [stage, setStage];
}