import { GameConfigType, Games } from "../Context/types"
import Wheel from "../Wheel"

export const wheelConfig: GameConfigType = {
    title: "Wheel",
    component: Wheel,
    id: Games.WHEEL
}