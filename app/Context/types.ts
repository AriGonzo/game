import { ReactNode } from "react"

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
    activeGame: Games | null,
    spinTheWheel: () => void
}

export type ContextProviderProps = {
    children?: ReactNode
}

export type GameConfigType = {
    title: string;
    rules: string[];
    closingLine: string;
    questions: any[];
    component: ()=> JSX.Element;
}