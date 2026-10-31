import type { ReactNode } from "react";
import { GameClient } from "@/components/game/game-client";
import type { Difficulty } from "@/game/types";
import {
  ArticleShell,
  type ArticleShellProps,
} from "@/components/content/article-shell";

export interface PlayablePageProps extends ArticleShellProps {
  difficulty?: Difficulty;
  children: ReactNode;
}

export function PlayablePage({
  difficulty,
  children,
  ...articleProps
}: PlayablePageProps) {
  return (
    <>
      <div className="game-frame">
        <GameClient difficulty={difficulty} />
      </div>
      <ArticleShell {...articleProps}>{children}</ArticleShell>
    </>
  );
}
