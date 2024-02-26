import { useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "../Context/GameContext"
import { Wheel } from 'spin-wheel';
import { Pointer, WheelContainer, WheelWrapper } from './styles';
import { WheelType } from "./types";
import { sample } from "lodash";
import * as easing from 'easing-utils';
import { PlayableGames } from "../Context/types";

const WheelScreen = () => {
    const { availableGames, getFriendlyName } = useContext(GameContext);
    const [wheelUI, setWheelUI] = useState<{
        spinToItem: (
            idx: number,
            duration: number,
            spinToCenter: boolean,
            numberOfRevolutions: number,
            direction: number,
            easingFunction: (t: number) => void
            ) => void
    }>();
    const ref = useRef(null);
    
    const spinTheWheel = () => {
        const newGame = sample(availableGames);
        if (newGame) {
            const idx = availableGames.indexOf(newGame);
            wheelUI?.spinToItem(idx, 4000, true, 2, 1, easing.easeOutCubic)
        }
    }

    useEffect(() => {
        if (!wheelUI) {
            const props: WheelType = {
                items: availableGames.map((id: PlayableGames)=> ({
                    value: id,
                    label: getFriendlyName(id)
                })),
                isInteractive: false,
                pointerAngle: 90,
                itemLabelBaselineOffset: 1,
            }
            setWheelUI(new Wheel(ref.current, props))
        }
    }, [ref.current]);
    
    return (
        <WheelWrapper onClick={spinTheWheel}>            
            <WheelContainer id="wheel" ref={ref}>
                <Pointer />
            </WheelContainer>
        </WheelWrapper>
    )
}

export default WheelScreen