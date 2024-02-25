import { GameConfigType } from "../Context/types";
import TextGame from "../TextGames";

export const sayWhaaatQuestions = [{
    image: 'path/to/image'
}]

export const sayWhaaatConfig: GameConfigType = {
    title: "Say Whaaat?!",
    component: TextGame,
    rules: [],
    closingLine: "",
    questions: sayWhaaatQuestions
}