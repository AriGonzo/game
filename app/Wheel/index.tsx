import { useContext } from "react"
import { GameContext } from "../Context/GameContext"

const Wheel = () => {
    const { spinTheWheel } = useContext(GameContext);
    return (
        <div onClick={spinTheWheel}>
            <h1>Wheel</h1>
        </div>
    )
}

export default Wheel