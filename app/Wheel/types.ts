import { PlayableGames } from "../GameContext/types";

export type WheelItem = {
    label?: string;
    value?: PlayableGames;
}

export type WheelType = {
    items: WheelItem[],
    isInteractive: boolean;
    pointerAngle: number;
    itemLabelBaselineOffset: number;
    itemLabelFont: string;
    itemLabelFontSizeMax: number;
    itemLabelRadius: number;
    itemLabelRadiusMax: number;
    itemBackgroundColors: string[];
}