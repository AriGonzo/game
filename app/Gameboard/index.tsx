"use client"

import { useContext } from "react";
import { GameContext } from "../Context/GameContext";
import {
    BGWrapper,
    Question,
    MarvinRegular,
    MarvinRound,
    MarvinShadow
} from './styles'
import {
    binaryEyesQuestions
} from '../GameData/binary'

export default function Gameboard() {
    const [round1, round2] = binaryEyesQuestions;
    
    return (
        <BGWrapper>
            <Question>{round2.characterType}</Question>
        </BGWrapper>
    )
}