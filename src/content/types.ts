import type { Locale } from "@/i18n/config";
import type { Difficulty } from "@/game/types";

/**
 * Inline copy supports three markers:
 *   **bold**, *italic*, [label](/internal-path or https://external)
 * Internal links are rewritten with the active locale prefix at render time.
 */
export type Block =
  | { type: "h2"; id?: string; text: string }
  | { type: "h3"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string }
  | { type: "table"; head: string[]; rows: string[][] }
  | {
      type: "cards";
      items: {
        href: string;
        title: string;
        description: string;
        tag?: string;
      }[];
    };

export interface GameSchemaContent {
  description: string;
  name: string;
  suits: 1 | 2 | 4;
}

export interface PageContent {
  blocks: Block[];
  breadcrumb?: string;
  description: string;
  difficulty?: Difficulty;
  eyebrow?: string;
  faq?: { q: string; a: string }[];
  game?: GameSchemaContent;
  hideBreadcrumbs?: boolean;
  lead: string;
  metaDescription?: string;
  metaTitle: string;
  playHref?: string;
  playLabel?: string;
  playable?: boolean;
  related?: { href: string; title: string; description: string }[];
  title: string;
}

export interface PageDefinition {
  contents: Record<Locale, PageContent>;
  slug: string;
}

export type PagesRegistry = Record<string, PageDefinition>;
