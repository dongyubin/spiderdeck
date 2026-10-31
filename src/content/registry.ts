import type { Metadata } from "next";
import { type Locale } from "@/i18n/config";
import { pageMetadata } from "@/lib/seo";
import { aboutPage } from "./pages/about";
import { creditsPage } from "./pages/credits";
import { difficultyLevelsPage } from "./pages/difficulty-levels";
import { faqPage } from "./pages/faq";
import { fourSuitsPage } from "./pages/four-suits";
import { guidesPage } from "./pages/guides";
import { homePage } from "./pages/home";
import { howToPlayPage } from "./pages/how-to-play";
import { mobilePage } from "./pages/mobile";
import { noDownloadPage } from "./pages/no-download";
import { oneSuitPage } from "./pages/one-suit";
import { rulesPage } from "./pages/rules";
import { strategyPage } from "./pages/strategy";
import { twoSuitsPage } from "./pages/two-suits";
import { unblockedPage } from "./pages/unblocked";
import { vsKlondikePage } from "./pages/vs-klondike";
import type { PageDefinition } from "./types";

export const HOME_PAGE = homePage;

const PAGE_LIST: PageDefinition[] = [
  homePage,
  twoSuitsPage,
  oneSuitPage,
  fourSuitsPage,
  howToPlayPage,
  rulesPage,
  strategyPage,
  difficultyLevelsPage,
  vsKlondikePage,
  mobilePage,
  noDownloadPage,
  unblockedPage,
  faqPage,
  guidesPage,
  aboutPage,
  creditsPage,
];

export const PAGES = PAGE_LIST;

export const ARTICLE_SLUGS = PAGE_LIST.filter((page) => page.slug !== "").map(
  (page) => page.slug
);

const PAGE_MAP = new Map(PAGE_LIST.map((page) => [page.slug, page]));

export function getPageBySlug(slug: string): PageDefinition | undefined {
  return PAGE_MAP.get(slug);
}

export function pagePath(slug: string): string {
  return slug === "" ? "/" : `/${slug}`;
}

export function pageMetadataFor(slug: string, locale: Locale): Metadata {
  const page = getPageBySlug(slug);
  if (!page) {
    throw new Error(`Unknown page slug: ${slug}`);
  }
  const content = page.contents[locale];
  return pageMetadata({
    title: content.metaTitle,
    description: content.metaDescription ?? content.description,
    path: pagePath(slug),
    locale,
  });
}
