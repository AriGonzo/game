import { useContext, useEffect, useRef, useState } from "react"
import { GameContext } from "../Context/GameContext"
import { Wheel } from 'spin-wheel';
import { Pointer, WheelContainer, WheelWrapper } from './styles';
import { WheelType } from "./types";
import { sample } from "lodash";
import * as easing from 'easing-utils';
import { PlayableGames } from "../Context/types";
import io from 'socket.io-client';

const socket = io('http://192.168.5.58:3001'); // Replace with your server URL

function getBGImageScale(id: PlayableGames): {backgroundColor?: string, image: string, imageScale: number, imageRadius: number} {
    switch (id) {
        case PlayableGames.BINARY_EYES:
            return {
                image: '/images/wheel/binaryBG.jpg',
                imageScale: 0.2,
                imageRadius: 0.5
            }
        case PlayableGames.KIMBERLOOK:
            return {
                image: '/images/wheel/KimberLook.png',
                imageScale: 0.04,
                imageRadius: 0.55
            }
        case PlayableGames.BLUR_GAME:
            return {
                image: '/images/wheel/blurGame.jpg',
                imageScale: 0.075,
                imageRadius: 0.55
            }
        case PlayableGames.DECADE_DASH:
            return {
                image: '/images/wheel/DecadeDash.svg',
                imageScale: 4,
                imageRadius: 0.3
            }
        case PlayableGames.SAY_WHAAT:
            return {
                image: '/images/wheel/SayWhaat.png',
                imageScale: 0.18,
                imageRadius: 0.55,
                backgroundColor: '#191919'
            }
        default:
            return {
                image: '',
                imageRadius: 1,
                imageScale: 1
            }
    }
}

const WheelScreen = () => {
    const { availableGames, getFriendlyName, setActiveGame } = useContext(GameContext);
    let wheelUI;
    const ref = useRef(null);
    
    const spinTheWheel = () => {
        const newGame = sample(availableGames);
        console.log('new game?', {availableGames, newGame, wheelUI})
        if (newGame) {
            const idx = availableGames.indexOf(newGame);
            wheelUI?.spinToItem(idx, 4000, true, 2, 1, easing.easeOutCubic)
            setTimeout(() => {
                setActiveGame(newGame)
            }, 6000)
        }
    }

    useEffect(() => {
        // Listen for incoming messages
        socket.on('chat message', (message) => {
            console.log('fired websocket');
            console.log(wheelUI)
            spinTheWheel();
        });
      }, []);

    useEffect(() => {
        if (!wheelUI) {
            const props: WheelType = {
                items: availableGames.map((id: PlayableGames)=> ({
                    value: id,
                    ...getBGImageScale(id)
                })),
                isInteractive: false,
                pointerAngle: 90,
                itemLabelBaselineOffset: 1,
                itemLabelFont: 'marvin-round',
                itemLabelFontSizeMax: 500,
                itemLabelRadius: 0.95,
                itemLabelRadiusMax: 0.2,
                itemBackgroundColors: ['#C33764', '#11998E', '#02AABD'],

            }
            wheelUI = new Wheel(ref.current, props);
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