import { Dispatch, ReactNode, SetStateAction } from "react"

export enum PlayableGames {
    BINARY_EYES = "binary",
    BLUR_GAME = 'blurGame',
    DECADE_DASH = 'decadeDash',
    SAY_WHAAT = 'sayWhaat',
    KIMBERLOOK = 'kimberLook'
}

export enum Games {
    WHEEL = 'wheel',
    BINARY_EYES = "binary",
    BLUR_GAME = 'blurGame',
    DECADE_DASH = 'decadeDash',
    SAY_WHAAT = 'sayWhaat',
    KIMBERLOOK = 'kimberLook'
}

export type GameMapType = {
    [key: string]: GameConfigType
}

export type GameContextType = {
    activeGame: PlayableGames | null,
    activeGameConfig: GameConfigType | null;
    spinTheWheel: (wheelUI: any) => void;
    endTheRound: () => void;
    setActiveGame: Dispatch<SetStateAction<PlayableGames | null>>;
    availableGames: PlayableGames[];
    getFriendlyName: (id: PlayableGames) => string;
    showInstructions: boolean;
}

export type ContextProviderProps = {
    children?: ReactNode
}

export type GameConfigType = {
    title: string;
    id: Games,
    component: ()=> JSX.Element;
    rules?: string[];
    closingLine?: string;
    questions?: any[];
}