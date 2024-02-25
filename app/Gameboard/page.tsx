"use client"

import { useContext } from "react";
import { GameContext, GameContextProvider } from "../Context/GameContext";
import {
    BGWrapper,
} from './styles'
import { wheelConfig } from "../GameData/wheel";

function Gameboard_Inner() {
    const { activeGameConfig } = useContext(GameContext);
    const ActiveGame = activeGameConfig ? activeGameConfig.component : false;
    
    return (
        <BGWrapper>
            {ActiveGame ? (<ActiveGame />) : (<wheelConfig.component />)}
            
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