import { GameConfigType, Games } from "../Context/types";
import TextGame from "../TextGames";

export const decadeDashQuestions = [{
    
}]

export const decadeDashConfig: GameConfigType = {
    title: "Decade Dash!",
    id: Games.DECADE_DASH,
    component: TextGame,
    rules: [],
    closingLine: "",
    questions: decadeDashQuestions
}