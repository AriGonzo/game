import { GameConfigType, Games } from "../GameContext/types"
import Wheel from "../Wheel"

export const wheelConfig: GameConfigType = {
    title: "Wheel",
    component: Wheel,
    id: Games.WHEEL
}