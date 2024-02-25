"use client"

import { useContext } from "react";
import { GameContext, GameContextProvider } from "./Context/GameContext";
import Gameboard from "./Gameboard/page";
import { GambadoScotchForte } from "./Gameboard/styles";
import Link from "next/link";

export default function Home() {
  return (
    <main>
        <Link href="/Gameboard">Begin</Link>
    </main>
  );
}
