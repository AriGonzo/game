import { useContext } from "react"
import { GameContext } from "../Context/GameContext"

const TextGame = () => {
    const { activeGameConfig, endTheRound } = useContext(GameContext);
    return (
        <div onClick={endTheRound}>
            <h1>{activeGameConfig?.title}</h1>
        </div>
    )
}

export default TextGame