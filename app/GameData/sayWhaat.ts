import { GameConfigType, Games } from "../GameContext/types";
import TextGame from "../TextGames";

export const sayWhaaatQuestions = [{
    image: 'path/to/image'
}]

export const sayWhaaatConfig: GameConfigType = {
    title: "Say Whaaat?!",
    id: Games.SAY_WHAAT,
    component: TextGame,
    rules: [],
    closingLine: "",
    questions: sayWhaaatQuestions
}