"use client"

import { createContext, useEffect, useMemo, useState } from 'react';
import { GameMapType, Games, GameContextType, ContextProviderProps, PlayableGames, GameConfigType } from './types';
import {sample} from 'lodash';


// Game Configs
import { binaryEyesConfig } from '../GameData/binary';
import { blurGameConfig } from '../GameData/blurGame';
import { decadeDashConfig } from '../GameData/decadeDash';
import { sayWhaaatConfig } from '../GameData/sayWhaat';
import { kimberLookConfig } from '../GameData/kimberLook';

// Game Map
export const GameMap: GameMapType = {
    [PlayableGames.BINARY_EYES]: binaryEyesConfig,
    [PlayableGames.BLUR_GAME]: blurGameConfig,
    [PlayableGames.DECADE_DASH]: decadeDashConfig,
    [PlayableGames.SAY_WHAAT]: sayWhaaatConfig,
    [PlayableGames.KIMBERLOOK]: kimberLookConfig
};

export const GameContext = createContext<GameContextType>({
    activeGame: null,
    activeGameConfig: null,
    spinTheWheel: () => {},
    endTheRound: () => {},
    setActiveGame: () => {},
});

export const GameContextProvider = ({children}: ContextProviderProps) => {
    const [activeGame, setActiveGame] = useState<PlayableGames | null>(null);
    const [activeGameConfig, setActiveGameConfig] = useState<GameConfigType | null>(null);
    const [availableGames, setAvailableGames] = useState(Object.values(PlayableGames))

    function spinTheWheel() {
        // Start the animation to spin the wheel
        // Randomly pick one of the Games
        // with result, setActiveGame(result)
        const newGame = sample(availableGames);
        if (newGame) {
            setActiveGame(newGame);
        }
    };

    function endTheRound() {
        console.log('ending the round');
        // update the state to ensure we slice off any games that don't have any questions
        setActiveGame(null);
    }

    useEffect(()=> {
        if (activeGame) {
            setActiveGameConfig(GameMap[activeGame])
        } else {
            setActiveGameConfig(null);
        }
    }, [activeGame])

    const GameState = useMemo(()=>({
        activeGame,
        spinTheWheel,
        activeGameConfig,
        endTheRound,
        setActiveGame
    }), [
        activeGame,
        spinTheWheel,
        activeGameConfig,
        endTheRound,
        setActiveGame
    ])

    return (
        <GameContext.Provider value={GameState}>
            {children}
        </GameContext.Provider>
    )
}