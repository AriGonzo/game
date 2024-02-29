"use client"

import { useContext } from "react";
import { GameContext, GameContextProvider } from "../GameContext/GameContext";
import {
    BGWrapper,
} from './styles'
import { wheelConfig } from "../GameData/wheel";

function Gameboard_Inner() {
    const { activeGameConfig } = useContext(GameContext);
    const ActiveGame = activeGameConfig ? activeGameConfig.component : wheelConfig.component;
    
    return (
        <BGWrapper>
            <ActiveGame />
        </BGWrapper>
    )
}

export default function Gameboard() {
    return (
            <GameContextProvider>
                <Gameboard_Inner />
            </GameContextProvider>
        
    )
}