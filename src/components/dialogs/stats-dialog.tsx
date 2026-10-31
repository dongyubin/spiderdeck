"use client";

import { Tabs } from "@base-ui-components/react/tabs";
import { formatElapsed } from "@/components/game/use-timer";
import { averageWinElapsedMs, averageWinMoves, winRate } from "@/game/stats";
import { useStatsStore } from "@/game/stats-store";
import type { Difficulty, DifficultyStats } from "@/game/types";
import { useLocale, useMessages } from "@/i18n/client";
import { LOCALE_INFO } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { GameDialog } from "./game-dialog";

const DIFFICULTIES: Difficulty[] = [1, 2, 4];

export interface StatsDialogProps {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export function StatsDialog({ open, onOpenChange }: StatsDialogProps) {
  if (!open) {
    return null;
  }
  return <StatsDialogInner onOpenChange={onOpenChange} open={open} />;
}

function StatsDialogInner({ open, onOpenChange }: StatsDialogProps) {
  const messages = useMessages();
  const stats = useStatsStore((s) => s.stats);

  return (
    <GameDialog
      description={messages.stats.description}
      onOpenChange={onOpenChange}
      open={open}
      size="lg"
      title={messages.stats.title}
    >
      <Tabs.Root className="flex flex-col gap-5" defaultValue="4">
        <Tabs.List className="relative flex gap-2 rounded-full bg-black/35 p-1">
          {DIFFICULTIES.map((difficulty) => (
            <Tabs.Tab
              className={cn(
                "flex-1 rounded-full px-4 py-2 font-medium text-ink-dim text-sm transition-colors",
                "hover:text-ink",
                "data-[selected]:bg-gold/95 data-[selected]:text-[#1b1305]",
                "focus-visible:outline-2 focus-visible:outline-gold"
              )}
              key={difficulty}
              value={String(difficulty)}
            >
              {messages.board.difficultyLabel(difficulty)}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {DIFFICULTIES.map((difficulty) => (
          <Tabs.Panel key={difficulty} value={String(difficulty)}>
            <StatsPanel stats={stats[difficulty]} />
          </Tabs.Panel>
        ))}
      </Tabs.Root>
    </GameDialog>
  );
}

function StatsPanel({ stats }: { stats: DifficultyStats }) {
  const messages = useMessages();
  const locale = useLocale();
  const dateLocale = LOCALE_INFO[locale].dateLocale;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-3">
        <StatCard
          label={messages.stats.winRate}
          value={`${Math.round(winRate(stats) * 100)}%`}
        />
        <StatCard label={messages.stats.games} value={String(stats.played)} />
        <StatCard label={messages.stats.won} value={String(stats.won)} />
        <StatCard
          label={messages.stats.avgMoves}
          value={
            stats.won > 0 ? Math.round(averageWinMoves(stats)).toString() : "—"
          }
        />
      </div>
      <div>
        <h4 className="mb-3 font-medium text-ink-dim text-xs uppercase tracking-[0.2em]">
          {messages.stats.topTen}
        </h4>
        {stats.leaderboard.length === 0 ? (
          <div className="rounded-xl border border-white/5 bg-black/20 p-5 text-ink-muted text-sm">
            {messages.stats.noWins}
          </div>
        ) : (
          <div className="overflow-hidden rounded-xl border border-white/5 bg-black/20">
            <table className="w-full text-sm">
              <thead className="border-white/5 border-b text-ink-muted text-xs uppercase tracking-widest">
                <tr>
                  <th className="px-4 py-3 text-left font-medium">#</th>
                  <th className="px-4 py-3 text-right font-medium">
                    {messages.stats.moves}
                  </th>
                  <th className="px-4 py-3 text-right font-medium">
                    {messages.stats.time}
                  </th>
                  <th className="px-4 py-3 text-right font-medium">
                    {messages.stats.date}
                  </th>
                </tr>
              </thead>
              <tbody>
                {stats.leaderboard.map((entry, i) => (
                  <tr
                    className="border-white/5 border-t tabular-nums first:border-t-0"
                    key={`${entry.finishedAt}-${i}`}
                  >
                    <td className="px-4 py-3 text-ink-muted">{i + 1}</td>
                    <td className="px-4 py-3 text-right text-ink">
                      {entry.moves}
                    </td>
                    <td className="px-4 py-3 text-right text-ink">
                      {formatElapsed(entry.elapsedMs)}
                    </td>
                    <td className="px-4 py-3 text-right text-ink-dim">
                      {formatDate(entry.finishedAt, dateLocale)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      {stats.won > 0 ? (
        <div className="text-ink-muted text-xs">
          {messages.stats.avgWinTime} {formatElapsed(averageWinElapsedMs(stats))}
        </div>
      ) : null}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
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

function formatDate(ts: number, dateLocale: string): string {
  try {
    return new Date(ts).toLocaleDateString(dateLocale, {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return "—";
  }
}
