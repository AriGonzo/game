"use client"

import { ReactNode, createContext, useMemo, useState } from 'react';
import { GameMapType, Games, GameContextType, ContextProviderProps } from './types';


// Game Configs
import { binaryEyesConfig } from '../GameData/binary';
import { blurGameConfig } from '../GameData/blurGame';
import { decadeDashConfig } from '../GameData/decadeDash';
import { sayWhaaatConfig } from '../GameData/sayWhaat';
import { kimberLookConfig } from '../GameData/kimberLook';
import { wheelConfig } from '../GameData/wheel';

// Game Map
export const GameMap: GameMapType = {
    [Games.BINARY_EYES]: binaryEyesConfig,
    [Games.BLUR_GAME]: blurGameConfig,
    [Games.DECADE_DASH]: decadeDashConfig,
    [Games.SAY_WHAAT]: sayWhaaatConfig,
    [Games.KIMBERLOOK]: kimberLookConfig
};

export const GameContext = createContext<GameContextType>({
    activeGame: Games.WHEEL,
    spinTheWheel: () => {}
});

export const GameContextProvider = ({children}: ContextProviderProps) => {
    const [activeGame, setActiveGame] = useState(null);
    
    function spinTheWheel() {

    }

    const GameState = useMemo(()=>({
        activeGame,
        spinTheWheel
    }), [
        activeGame,
        spinTheWheel
    ])

    return (
        <GameContext.Provider value={GameState}>
            {children}
        </GameContext.Provider>
    )
}