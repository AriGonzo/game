"use client"

import { useContext } from "react";
import { GameContext, GameContextProvider } from "./Context/GameContext";
import Gameboard from "./Gameboard";
import { GambadoScotchForte } from "./Gameboard/styles";

export default function Home() {
  return (
    <main>
      <GameContextProvider>
        <GambadoScotchForte>
          <Gameboard />
        </GambadoScotchForte>
      </GameContextProvider>
    </main>
  );
}
