import { useCallback, useState } from "react";
import { randomTetromino } from "../../tetrominos";
import { STAGE_HEIGHT, STAGE_WIDTH } from "../../gameHelper";


export function usePlayer(props) {
    const[player, setPlayer] = useState({
        pos: { x:0, y:0 },
        tetromino: randomTetromino().shape,
        collided: false,
    });

    const updatePlayerPos = ({ x, y, collided }) => {
            setPlayer(prev => ({
                ...prev,
                pos: { x: (prev.pos.x += x), y:(prev.pos.y += y)},
                collided,
            }))
    }

    const resetPlayer = useCallback(() => {
        setPlayer({
            pos:{ x: STAGE_WIDTH / 2 - 2, y: 0 },
            tetromino: randomTetromino().shape,
            collided: false
        })
    }, [])

    return [player, updatePlayerPos, resetPlayer];
}