"use client";

import { Tooltip as BaseTooltip } from "@base-ui-components/react/tooltip";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";
import {
  BarChart3,
  Lightbulb,
  Play,
  RotateCcw,
  Settings as SettingsIcon,
  Timer,
} from "lucide-react";
import { useState } from "react";
import { ConfirmDialog } from "@/components/dialogs/confirm-dialog";
import { SettingsDialog } from "@/components/dialogs/settings-dialog";
import { StatsDialog } from "@/components/dialogs/stats-dialog";
import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Tooltip } from "@/components/ui/tooltip";
import { useMessages } from "@/i18n/client";
import { isWon } from "@/game/engine";
import { useHintsStore } from "@/game/hints-store";
import { useSettingsStore } from "@/game/settings-store";
import { selectCanUndo, selectCurrentGame, useGameStore } from "@/game/game-store";
import type { Difficulty } from "@/game/types";
import { DevTools } from "./dev-tools";

export interface BottomBarProps {
  difficulty?: Difficulty;
}

export function BottomBar({ difficulty }: BottomBarProps = {}) {
  const messages = useMessages();
  const present = useGameStore(selectCurrentGame);
  const canUndo = useGameStore(selectCanUndo);
  const settings = useSettingsStore((s) => s.settings);
  const undo = useGameStore((s) => s.undo);
  const cycleHint = useHintsStore((s) => s.cycleHint);
  const startNewGame = useGameStore((s) => s.startNewGame);

  const [settingsOpen, setSettingsOpen] = useState(false);
  const [statsOpen, setStatsOpen] = useState(false);
  const [confirmNewGameOpen, setConfirmNewGameOpen] = useState(false);

  const moves = present?.moves ?? 0;
  const elapsed = present?.elapsedMs ?? 0;

  const handleNewGame = () => {
    if (
      !present ||
      present.moves === 0 ||
      isWon(present) ||
      !settings.confirmNewGame
    ) {
      startNewGame(difficulty);
      return;
    }
    setConfirmNewGameOpen(true);
  };

  return (
    <>
      <div className="game-bottom-bar absolute right-0 bottom-0 left-0 z-40 flex items-center border-white/10 border-t bg-black/55 px-2 backdrop-blur-xl sm:gap-6 sm:px-8">
        <div className="flex flex-1 items-center gap-1 sm:gap-3">
          <BaseTooltip.Provider closeDelay={80} delay={350}>
            <Tooltip label={messages.game.settings}>
              <IconButton
                className="size-9 sm:size-11 [&_svg]:size-4 sm:[&_svg]:size-5"
                icon={SettingsIcon}
                label={messages.game.openSettings}
                onClick={() => setSettingsOpen(true)}
              />
            </Tooltip>
            <Tooltip label={messages.game.statistics}>
              <IconButton
                className="size-9 sm:size-11 [&_svg]:size-4 sm:[&_svg]:size-5"
                icon={BarChart3}
                label={messages.game.openStatistics}
                onClick={() => setStatsOpen(true)}
              />
            </Tooltip>
            <Tooltip hotkey="Mod+Z" label={messages.game.undo}>
              <IconButton
                className="size-9 sm:size-11 [&_svg]:size-4 sm:[&_svg]:size-5"
                disabled={!canUndo}
                icon={RotateCcw}
                label={messages.game.undoLastMove}
                onClick={undo}
              />
            </Tooltip>
            <Tooltip hotkey="H" label={messages.game.hint}>
              <IconButton
                className="size-9 sm:size-11 [&_svg]:size-4 sm:[&_svg]:size-5"
                disabled={!present}
                icon={Lightbulb}
                label={messages.game.showHint}
                onClick={cycleHint}
              />
            </Tooltip>
          </BaseTooltip.Provider>
          {process.env.NODE_ENV === "development" && <DevTools />}
        </div>

        <Button
          aria-label={messages.game.startNewGame}
          className="h-10 shrink-0 px-3 text-sm ease-out active:scale-97 sm:h-14 sm:px-8 sm:text-lg"
          onClick={handleNewGame}
          size="lg"
          variant="primary"
        >
          <Play aria-hidden className="size-4 sm:size-5" strokeWidth={2} />
          <span className="hidden sm:inline">{messages.game.newGame}</span>
        </Button>

        <div className="flex flex-1 items-center justify-end gap-3 sm:gap-8">
          <Stat
            className="hidden sm:flex"
            icon={<Timer aria-hidden className="size-4" />}
            label={messages.game.time}
          >
            <AnimatedElapsed ms={elapsed} />
          </Stat>
          <Stat label={messages.game.moves}>
            <NumberFlow
              className="tabular-nums"
              transformTiming={{ duration: 500, easing: "ease-out" }}
              value={moves}
              willChange
            />
          </Stat>
        </div>
      </div>
      <SettingsDialog onOpenChange={setSettingsOpen} open={settingsOpen} />
      <StatsDialog onOpenChange={setStatsOpen} open={statsOpen} />
      <ConfirmDialog
        onConfirm={() => startNewGame(difficulty)}
        onOpenChange={setConfirmNewGameOpen}
        open={confirmNewGameOpen}
      />
    </>
  );
}

function AnimatedElapsed({ ms }: { ms: number }) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  const hasHours = hours > 0;

  return (
    <NumberFlowGroup>
      <div
        className="flex items-baseline"
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {hasHours ? <NumberFlow trend={1} value={hours} willChange /> : null}
        <NumberFlow
          digits={hasHours ? { 1: { max: 5 } } : undefined}
          format={hasHours ? { minimumIntegerDigits: 2 } : undefined}
          prefix={hasHours ? ":" : ""}
          trend={1}
          value={minutes}
          willChange
        />
        <NumberFlow
          digits={{ 1: { max: 5 } }}
          format={{ minimumIntegerDigits: 2 }}
          prefix=":"
          trend={1}
          value={seconds}
          willChange
        />
      </div>
    </NumberFlowGroup>
  );
}

function Stat({
  label,
  icon,
  children,
  className,
}: {
  label: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex flex-col items-end ${className ?? ""}`}>
      <div className="flex items-center gap-1.5 font-medium text-ink-muted text-[10px] uppercase tracking-widest sm:text-xs">
        {icon}
        {label}
      </div>
      <div className="font-semibold text-ink text-lg leading-none sm:text-2xl">
        {children}
      </div>
    </div>
  );
}
