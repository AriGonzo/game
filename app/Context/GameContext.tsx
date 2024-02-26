"use client"

import { createContext, useEffect, useMemo, useState } from 'react';
import { GameMapType, Games, GameContextType, ContextProviderProps, PlayableGames, GameConfigType } from './types';
import {sample} from 'lodash';

import io from 'socket.io-client';
const socket = io('http://192.168.5.58:3001');

const audioLaughter = new Audio("/audio/laughTrack.mp4");



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
    availableGames: [],
    getFriendlyName: (id: PlayableGames) => ""
});

export const GameContextProvider = ({children}: ContextProviderProps) => {
    const [activeGame, setActiveGame] = useState<PlayableGames | null>(null);
    const [activeGameConfig, setActiveGameConfig] = useState<GameConfigType | null>(null);
    const [availableGames, setAvailableGames] = useState(Object.values(PlayableGames))

    function spinTheWheel(wheelUI: any) {
        const newGame = sample(availableGames);
        if (newGame) {
            console.log({newGame, availableGames})
            const idx = availableGames.indexOf(newGame);
            console.log(idx)
            wheelUI.spinTo(idx, 4000, true, 2, 1)
            // setActiveGame(newGame);
        }
    };

    function endTheRound() {
        console.log('ending the round');
        // update the state to ensure we slice off any games that don't have any questions
        setActiveGame(null);
    }

    function getFriendlyName(id: PlayableGames) {
        return GameMap[id].title   
    }

    useEffect(()=> {
        if (activeGame) {
            setActiveGameConfig(GameMap[activeGame])
        } else {
            setActiveGameConfig(null);
        }
    }, [activeGame]);

    useEffect(() => {
        // Listen for incoming messages
        socket.on('end the round', () => {
            console.log('got the message')
            endTheRound();
        });

        socket.on('laugh track', () => {
            audioLaughter.play();
        });
      }, []);

    const GameState = useMemo(()=>({
        activeGame,
        spinTheWheel,
        activeGameConfig,
        endTheRound,
        setActiveGame,
        availableGames,
        getFriendlyName
    }), [
        activeGame,
        spinTheWheel,
        activeGameConfig,
        endTheRound,
        setActiveGame,
        availableGames,
        getFriendlyName
    ])

    return (
        <GameContext.Provider value={GameState}>
            {children}
        </GameContext.Provider>
    )
}