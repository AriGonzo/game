import { GameConfigType, Games } from "../Context/types";
import PictureGame from "../PictureGames";

export const binaryEyesQuestions = [
    {
        characterType: 'pirate',
        phrase: 'Arr, here be a snap of two hearties, a pair o\' kin, I reckon, cheerin\' with their goblets o\' sparklin\' nectar. They be wearin\' joyous grins, sittin\' side by side in a warm cabin, celebratin\' good fortune and the company of each other. A true treasure, that is!',
    },
    {
        characterType: 'mobster',
        phrase: 'A trio\'s mugshot, cozy like a family at a sit-down, in a joint with plush seats. The capo\'s wearin\' a Hawaiian shirt, the dames got beaming grins, ready for the show to start. They got that "untouchable" vibe, like they\'re the ones runnin\' the show.',
    },
    {
        characterType: 'caveman',
        phrase: 'Ugh, tribe of long-hair gather in bright skin covers. Stand on green land. Sun make shadows. Two with hair like fire, others like sand. Big tree watch over. They show teeth, happy. Not hunt, not gather, just stand. Sky clear, day good.',
    },
    {
        characterType: 'southernBelle',
        phrase: 'Oh my, here\'s a charming picture of three lovely ladies and a sweet little blossom, all smiles under the warm sun, with a backdrop that\'s as pretty as a peach in summer. They\'re just as delightful as a day at the county fair, bless their hearts.',
    }
];

export const binaryEyesConfig: GameConfigType = {
    title: 'Through my Binary Eyes',
    id: Games.BINARY_EYES,
    component: PictureGame,
    rules: [
        "Listen to a digital pal's unique take on a picture from Kimberly's life.",
        "I'll show you three possible pictures.",
        "Buzz in and guess the right one to win! But beware, a wrong guess means the other team wins."
    ],
    closingLine: "Get ready to decode digital descriptions and pinpoint the perfect picture!",
    questions: binaryEyesQuestions
}
