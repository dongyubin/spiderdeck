"use client";

import dynamic from "next/dynamic";
import type { Difficulty } from "@/game/types";

// The game is DOM-only (localStorage, pointer events, base-ui). Loading it
// client-side keeps browser-sniffing libraries out of the static prerender.
const GameShell = dynamic(
  () => import("./game-shell").then((mod) => mod.GameShell),
  {
    ssr: false,
    loading: () => <div className="felt-backdrop h-full" />,
  }
);

export function GameClient({ difficulty }: { difficulty?: Difficulty }) {
  return <GameShell initialDifficulty={difficulty} />;
}
