"use client";

import { HoldToConfirmButton } from "@/components/ui/hold-to-confirm-button";
import { RadioGroup, RadioGroupCard } from "@/components/ui/radio-group";
import { Switch } from "@/components/ui/switch";
import {
  BACKGROUND_COLOR_IDS,
  BACKGROUND_STYLE_IDS,
  CARD_BACK_GROUPS,
  CARD_FRONT_IDS,
  describeBack,
  describeFront,
} from "@/game/decks";
import { useMessages } from "@/i18n/client";
import { useSettingsStore } from "@/game/settings-store";
import { useStatsStore } from "@/game/stats-store";
import type {
  BackgroundColor,
  BackgroundStyle,
  CardBackId,
  CardFrontId,
  Difficulty,
  SoundsMode,
} from "@/game/types";
import { GameDialog } from "./game-dialog";

const DIFFICULTIES: Difficulty[] = [1, 2, 4];

export interface SettingsDialogProps {
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export function SettingsDialog({ open, onOpenChange }: SettingsDialogProps) {
  if (!open) {
    return null;
  }
  return <SettingsDialogInner onOpenChange={onOpenChange} open={open} />;
}

function SettingsDialogInner({ open, onOpenChange }: SettingsDialogProps) {
  const messages = useMessages();
  const settings = useSettingsStore((s) => s.settings);
  const updateSettings = useSettingsStore((s) => s.updateSettings);
  const resetStats = useStatsStore((s) => s.resetStats);

  return (
    <GameDialog
      description={messages.settings.description}
      onOpenChange={onOpenChange}
      open={open}
      size="lg"
      title={messages.settings.title}
    >
      <div className="space-y-8">
        <Section label={messages.settings.defaultDifficulty}>
          <RadioGroup
            className="grid grid-cols-3 gap-3"
            onValueChange={(value) =>
              updateSettings({
                defaultDifficulty: Number(value) as Difficulty,
              })
            }
            value={String(settings.defaultDifficulty)}
          >
            {DIFFICULTIES.map((value) => (
              <DifficultyCard
                description={
                  value === 1
                    ? messages.settings.easiest
                    : value === 2
                      ? messages.settings.medium
                      : messages.settings.hardest
                }
                key={value}
                label={messages.board.difficultyLabel(value)}
                value={String(value)}
              />
            ))}
          </RadioGroup>
        </Section>

        <Section label={messages.settings.cardFront}>
          <RadioGroup
            className="grid grid-cols-3 gap-3"
            onValueChange={(value) =>
              updateSettings({ cardFront: value as CardFrontId })
            }
            value={settings.cardFront}
          >
            {CARD_FRONT_IDS.map((id) => (
              <CardFrontRadio front={id} key={id} />
            ))}
          </RadioGroup>
        </Section>

        <Section label={messages.settings.cardBack}>
          <RadioGroup
            className="flex flex-col gap-5"
            onValueChange={(value) =>
              updateSettings({ cardBack: value as CardBackId })
            }
            value={settings.cardBack}
          >
            {CARD_BACK_GROUPS.map((group) => (
              <div className="space-y-2" key={group.id}>
                <div className="font-medium text-ink-muted text-xs uppercase tracking-[0.18em]">
                  {messages.decks.backGroups[group.id]}
                </div>
                <div className="grid grid-cols-4 gap-3">
                  {group.backs.map((id) => (
                    <CardBackRadio
                      back={id}
                      front={settings.cardFront}
                      key={id}
                    />
                  ))}
                </div>
              </div>
            ))}
          </RadioGroup>
        </Section>

        <Section label={messages.settings.background}>
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="font-medium text-ink-muted text-xs uppercase tracking-[0.18em]">
                {messages.settings.color}
              </div>
              <RadioGroup
                className="grid grid-cols-3 gap-3"
                onValueChange={(value) =>
                  updateSettings({
                    background: {
                      ...settings.background,
                      color: value as BackgroundColor,
                    },
                  })
                }
                value={settings.background.color}
              >
                {BACKGROUND_COLOR_IDS.map((id) => (
                  <BackgroundColorRadio
                    color={id}
                    key={id}
                    style={settings.background.style}
                  />
                ))}
              </RadioGroup>
            </div>
            <div className="space-y-2">
              <div className="font-medium text-ink-muted text-xs uppercase tracking-[0.18em]">
                {messages.settings.style}
              </div>
              <RadioGroup
                className="grid grid-cols-3 gap-3"
                onValueChange={(value) =>
                  updateSettings({
                    background: {
                      ...settings.background,
                      style: value as BackgroundStyle,
                    },
                  })
                }
                value={settings.background.style}
              >
                {BACKGROUND_STYLE_IDS.map((id) => (
                  <BackgroundStyleRadio
                    color={settings.background.color}
                    key={id}
                    style={id}
                  />
                ))}
              </RadioGroup>
            </div>
          </div>
        </Section>

        <Section label={messages.settings.interface}>
          <div className="space-y-4 rounded-xl border border-white/5 bg-black/25 p-5">
            <ToggleRow
              checked={settings.confirmNewGame}
              description={messages.settings.confirmNewGameDescription}
              label={messages.settings.confirmNewGame}
              onCheckedChange={(next) =>
                updateSettings({ confirmNewGame: next })
              }
            />
            <div className="h-px bg-white/5" />
            <ToggleRow
              checked={settings.sounds === "on"}
              description={messages.settings.soundsDescription}
              label={messages.settings.sounds}
              onCheckedChange={(next) =>
                updateSettings({
                  sounds: (next ? "on" : "off") as SoundsMode,
                })
              }
            />
          </div>
        </Section>

        <Section label={messages.settings.statistics}>
          <div className="flex flex-col gap-3 rounded-xl border border-white/5 bg-black/25 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="font-medium text-ink text-sm">
                {messages.settings.resetStats}
              </div>
              <p className="text-ink-muted text-xs leading-relaxed">
                {messages.settings.resetStatsDescription}
              </p>
            </div>
            <HoldToConfirmButton
              holdingLabel={messages.settings.keepHolding}
              label={messages.settings.holdToReset}
              onConfirm={resetStats}
              successLabel={messages.settings.statsCleared}
            />
          </div>
        </Section>

        <footer className="border-white/5 border-t pt-4 text-center text-ink-muted text-xs">
          <a
            className="inline-flex items-center gap-1.5 rounded-md px-1.5 py-0.5 transition-colors hover:text-ink focus-visible:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20"
            href="https://github.com/Time2Code0/spider-solitaire"
            rel="noreferrer noopener"
            target="_blank"
          >
            <svg
              aria-hidden
              className="h-3.5 w-3.5"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>GitHub</title>
              <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.97 3.22 9.18 7.69 10.67.56.1.77-.24.77-.54 0-.27-.01-1.16-.02-2.1-3.13.68-3.79-1.34-3.79-1.34-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.72 1.16 1.72 1.16 1 1.72 2.63 1.22 3.27.93.1-.73.39-1.22.71-1.5-2.5-.28-5.13-1.25-5.13-5.56 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .94-.3 3.09 1.15a10.7 10.7 0 0 1 5.62 0c2.15-1.45 3.09-1.15 3.09-1.15.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.32-2.63 5.27-5.14 5.55.4.35.76 1.03.76 2.08 0 1.5-.01 2.71-.01 3.08 0 .3.2.65.78.54 4.46-1.49 7.68-5.7 7.68-10.67C23.25 5.48 18.27.5 12 .5Z" />
            </svg>
            <span>{messages.settings.viewSource}</span>
          </a>
        </footer>
      </div>
    </GameDialog>
  );
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h3 className="mb-3 font-medium text-ink-dim text-xs uppercase tracking-[0.2em]">
        {label}
      </h3>
      {children}
    </section>
  );
}

function DifficultyCard({
  value,
  label,
  description,
}: {
  value: string;
  label: string;
  description?: string;
}) {
  return (
    <RadioGroupCard value={value}>
      <span className="font-semibold text-base">{label}</span>
      {description ? (
        <span className="text-ink-muted text-xs">{description}</span>
      ) : null}
    </RadioGroupCard>
  );
}

function CardFrontRadio({ front }: { front: CardFrontId }) {
  const messages = useMessages();
  const meta = messages.decks.fronts[front];
  const desc = describeFront(front, 1, "S");
  return (
    <RadioGroupCard className="items-center p-4" value={front}>
      <div className="card-surface" style={{ width: 70, height: 102 }}>
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
            <title>{messages.settings.cardFrontPreview}</title>
            <use href={`${desc.spritePath}#${desc.id}`} />
          </svg>
        )}
      </div>
      <div className="mt-1 text-center">
        <div className="font-semibold text-ink text-sm">{meta.label}</div>
        <div className="text-ink-muted text-xs">{meta.description}</div>
      </div>
    </RadioGroupCard>
  );
}

function CardBackRadio({
  front,
  back,
}: {
  front: CardFrontId;
  back: CardBackId;
}) {
  const messages = useMessages();
  const desc = describeBack(front, back);
  return (
    <RadioGroupCard className="items-center p-3" value={back}>
      <div
        className="card-surface card-surface--facedown"
        style={{ width: 60, height: 86 }}
      >
        <img
          alt=""
          aria-hidden
          className="card-inner-img"
          draggable={false}
          src={desc.src}
        />
      </div>
      <div className="mt-1 text-center font-medium text-ink text-xs">
        {messages.decks.backs[back]}
      </div>
    </RadioGroupCard>
  );
}

function BackgroundPreview({
  color,
  style,
  className = "",
}: {
  color: BackgroundColor;
  style: BackgroundStyle;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`felt-backdrop overflow-hidden rounded-lg border border-white/10 ${className}`}
      data-bg-color={color}
      data-bg-style={style}
    />
  );
}

function BackgroundColorRadio({
  color,
  style,
}: {
  color: BackgroundColor;
  style: BackgroundStyle;
}) {
  const messages = useMessages();
  return (
    <RadioGroupCard className="items-center p-3" value={color}>
      <BackgroundPreview className="h-14 w-full" color={color} style={style} />
      <div className="mt-1 text-center font-medium text-ink text-xs">
        {messages.decks.backgroundColors[color]}
      </div>
    </RadioGroupCard>
  );
}

function BackgroundStyleRadio({
  color,
  style,
}: {
  color: BackgroundColor;
  style: BackgroundStyle;
}) {
  const messages = useMessages();
  const meta = messages.decks.backgroundStyles[style];
  return (
    <RadioGroupCard className="items-center p-3" value={style}>
      <BackgroundPreview className="h-16 w-full" color={color} style={style} />
      <div className="mt-1 text-center">
        <div className="font-medium text-ink text-sm">{meta.label}</div>
        <div className="text-ink-muted text-xs">{meta.description}</div>
      </div>
    </RadioGroupCard>
  );
}

function ToggleRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string;
  description?: string;
  checked: boolean;
  onCheckedChange: (next: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        <div className="font-medium text-ink text-sm">{label}</div>
        {description ? (
          <div className="text-ink-muted text-xs">{description}</div>
        ) : null}
      </div>
      <Switch checked={checked} onCheckedChange={onCheckedChange} />
    </div>
  );
}
