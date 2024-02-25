import { GameConfigType } from "../Context/types";
import PictureGame from "../PictureGames";

export const kimberLookQuestions = [{
    image: 'path/to/image'
}]

export const kimberLookConfig: GameConfigType = {
    title: "KimberLook 👀",
    component: PictureGame,
    rules: [],
    closingLine: "",
    questions: kimberLookQuestions
}