"use client";

import { Frown, RefreshCcw } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { isWon } from "@/game/engine";
import { selectCurrentGame, useGameStore } from "@/game/game-store";
import { useMessages } from "@/i18n/client";
import { GameDialog } from "./game-dialog";
import { GameSummary } from "./game-summary";

const LOSE_DIALOG_DELAY_MS = 800;

export function LoseDialog() {
  const messages = useMessages();
  const game = useGameStore(selectCurrentGame);
  const startNewGame = useGameStore((s) => s.startNewGame);

  const [open, setOpen] = useState(false);

  const completedAt = game?.completedAt ?? null;
  const lost = !!(game && completedAt !== null && !isWon(game));

  useEffect(() => {
    if (!lost) {
      setOpen(false);
      return;
    }
    const t = window.setTimeout(() => setOpen(true), LOSE_DIALOG_DELAY_MS);
    return () => window.clearTimeout(t);
  }, [lost]);

  // Guarded explicitly against stale state (e.g. the user just won via a
  // recent undo-redo); a lost game has a `completedAt` but isn't won.
  if (!game || game.completedAt === null || isWon(game)) {
    return null;
  }

  const onClose = () => setOpen(false);
  const onPlayAgain = () => {
    setOpen(false);
    startNewGame();
  };

  return (
    <GameDialog
      footer={
        <>
          <Button onClick={onClose} size="lg" variant="ghost">
            {messages.lose.close}
          </Button>
          <Button
            className="ease-out active:scale-97"
            onClick={onPlayAgain}
            size="lg"
            variant="primary"
          >
            <RefreshCcw aria-hidden className="size-5" />
            {messages.lose.newGame}
          </Button>
        </>
      }
      onOpenChange={setOpen}
      open={open}
      title={messages.lose.title}
    >
      <div className="flex flex-col items-center gap-6 py-2 text-center">
        <div className="flex size-20 items-center justify-center rounded-full bg-white/5 text-ink-dim">
          <Frown aria-hidden className="size-10" strokeWidth={1.8} />
        </div>
        <p className="max-w-md text-ink-dim">{messages.lose.body}</p>
        <GameSummary game={game} />
      </div>
    </GameDialog>
  );
}
