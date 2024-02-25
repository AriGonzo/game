import { GameConfigType } from "../Context/types";
import PictureGame from "../PictureGames";

export const blurGameQuestions = [{
    image: 'path/to/image'
}]

export const blurGameConfig: GameConfigType = {
    title: "I can't see without my Glaaaasses",
    component: PictureGame,
    rules: [],
    closingLine: "",
    questions: blurGameQuestions
}