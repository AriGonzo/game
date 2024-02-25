import { GameConfigType, Games } from "../Context/types";
import PictureGame from "../PictureGames";

export const kimberLookQuestions = [{
    image: 'path/to/image'
}]

export const kimberLookConfig: GameConfigType = {
    title: "KimberLook 👀",
    id: Games.KIMBERLOOK,
    component: PictureGame,
    rules: [],
    closingLine: "",
    questions: kimberLookQuestions
}