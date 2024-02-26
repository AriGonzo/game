import { PlayableGames } from "../Context/types";

export type WheelItem = {
    label: string;
    value?: PlayableGames;
}

export type WheelType = {
    items: WheelItem[],
    isInteractive: boolean;
    pointerAngle: number;
    itemLabelBaselineOffset: number;
}