"use client";

import { motion } from "motion/react";
import { describeFront } from "@/game/decks";
import type { Card, CardFrontId } from "@/game/types";
import { useMessages } from "@/i18n/client";

export interface FoundationsProps {
  foundations: Card[][];
  front: CardFrontId;
}

const TOTAL_FOUNDATION_SLOTS = 8;

export function Foundations({ foundations, front }: FoundationsProps) {
  const messages = useMessages();
  const slots: (Card | null)[] = [];
  for (let i = 0; i < TOTAL_FOUNDATION_SLOTS; i++) {
    const suite = foundations[i];
    slots.push(suite && suite.length > 0 ? (suite.at(-1) as Card) : null);
  }
  const completed = foundations.length;

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      <div
        className="game-hud-label text-left font-medium text-ink-dim uppercase tracking-widest"
        title={messages.board.completedRunsTitle}
      >
        <div className="text-ink/90">{messages.board.runs}</div>
        <div className="tabular-nums">
          {completed}/{TOTAL_FOUNDATION_SLOTS}
        </div>
      </div>
      <div
        className="game-foundation-grid grid-cols-8"
        style={{
          gap: "calc(var(--board-gap) * 0.6)",
        }}
      >
        {slots.map((top, index) => (
          <FoundationSlot front={front} key={index} topCard={top} />
        ))}
      </div>
    </div>
  );
}

function FoundationSlot({
  front,
  topCard,
}: {
  front: CardFrontId;
  topCard: Card | null;
}) {
  const messages = useMessages();
  if (!topCard) {
    return (
      <div
        aria-label={messages.board.emptyFoundation}
        className="card-empty-slot"
        role="img"
        style={{
          width: "calc(var(--card-w) * 0.72)",
          height: "calc(var(--card-h) * 0.72)",
        }}
      />
    );
  }
  const desc = describeFront(front, topCard.rank, topCard.suit);
  return (
    <motion.div
      animate={{ scale: 1, opacity: 1 }}
      aria-label={messages.board.completedRun(topCard.suit)}
      className="card-surface"
      initial={{ scale: 0.6, opacity: 0 }}
      layoutId={topCard.id}
      style={{
        width: "calc(var(--card-w) * 0.72)",
        height: "calc(var(--card-h) * 0.72)",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 24 }}
    >
      {desc.mode === "img" ? (
        <img
          alt=""
          aria-hidden
          className="card-inner-img"
          draggable={false}
          src={desc.src}
        />
      ) : (
        <svg
          aria-hidden
          className="card-inner-img"
          preserveAspectRatio="xMidYMid meet"
          viewBox={desc.viewBox}
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>{messages.board.foundationCard}</title>
          <use href={`${desc.spritePath}#${desc.id}`} />
        </svg>
      )}
    </motion.div>
  );
}
