import { GameConfigType, Games } from "../Context/types";
import PictureGame from "../PictureGames";

export const blurGameQuestions = [{
    image: 'path/to/image'
}]

export const blurGameConfig: GameConfigType = {
    title: "I can't see without my Glaaaasses",
    id: Games.BLUR_GAME,
    component: PictureGame,
    rules: [],
    closingLine: "",
    questions: blurGameQuestions
}