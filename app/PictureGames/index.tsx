import { useContext } from "react"
import { GameContext } from "../GameContext/GameContext"

const PictureGame = () => {
    const { activeGameConfig, endTheRound } = useContext(GameContext);
    return (
        <div>
            <h1>{activeGameConfig?.title}</h1>
        </div>
    )
}

export default PictureGame