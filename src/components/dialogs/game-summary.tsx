"use client";

import { formatElapsed } from "@/components/game/use-timer";
import type { GameState } from "@/game/types";
import { useMessages } from "@/i18n/client";

export interface GameSummaryProps {
  game: GameState;
}

/**
 * Shared read-only summary of a finished game: difficulty, moves, and elapsed
 * time. Rendered inside both the win and lose dialogs so the stats layout
 * stays consistent and changes propagate to both surfaces automatically.
 */
export function GameSummary({ game }: GameSummaryProps) {
  const messages = useMessages();
  return (
    <div className="grid w-full max-w-lg grid-cols-3 gap-3">
      <Metric
        label={messages.summary.difficulty}
        value={messages.board.difficultyLabel(game.difficulty)}
      />
      <Metric label={messages.summary.moves} value={String(game.moves)} />
      <Metric label={messages.summary.time} value={formatElapsed(game.elapsedMs)} />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/5 bg-black/30 p-4">
      <div className="font-medium text-ink-muted text-xs uppercase tracking-widest">
        {label}
      </div>
      <div className="mt-1 font-semibold text-2xl text-ink tabular-nums">
        {value}
      </div>
    </div>
  );
}
