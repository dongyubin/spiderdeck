"use client";

import { Button } from "@/components/ui/button";
import { useMessages } from "@/i18n/client";
import { GameDialog } from "./game-dialog";

export interface ConfirmDialogProps {
  onConfirm: () => void;
  onOpenChange: (open: boolean) => void;
  open: boolean;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  onConfirm,
}: ConfirmDialogProps) {
  if (!open) {
    return null;
  }
  return (
    <ConfirmNewGame
      onConfirm={onConfirm}
      onOpenChange={onOpenChange}
      open={open}
    />
  );
}

function ConfirmNewGame({ open, onOpenChange, onConfirm }: ConfirmDialogProps) {
  const messages = useMessages();
  const onCancel = () => onOpenChange(false);
  const handleConfirm = () => {
    onConfirm();
    onOpenChange(false);
  };

  return (
    <GameDialog
      footer={
        <>
          <Button onClick={onCancel} variant="ghost">
            {messages.confirm.keepPlaying}
          </Button>
          <Button onClick={handleConfirm} variant="danger">
            {messages.confirm.abandon}
          </Button>
        </>
      }
      onOpenChange={onOpenChange}
      open={open}
      title={messages.confirm.title}
    >
      <p className="text-ink-dim text-sm leading-relaxed">
        {messages.confirm.body}
      </p>
    </GameDialog>
  );
}
