import { ArticleShell } from "@/components/content/article-shell";
import { PlayablePage } from "@/components/content/playable-page";
import { JsonLd } from "@/components/seo/json-ld";
import type { Locale } from "@/i18n/config";
import { gameSchema } from "@/lib/seo";
import { ContentBlocks } from "./blocks";
import type { PageContent } from "./types";

export function PageView({
  content,
  locale,
  path,
}: {
  content: PageContent;
  locale: Locale;
  path: string;
}) {
  const body = <ContentBlocks blocks={content.blocks} locale={locale} />;
  const articleProps = {
    breadcrumbs:
      content.hideBreadcrumbs || path === "/"
        ? []
        : [{ name: content.breadcrumb ?? content.title, path }],
    description: content.description,
    eyebrow: content.eyebrow,
    faq: content.faq,
    hideBreadcrumbs: content.hideBreadcrumbs,
    lead: content.lead,
    locale,
    path,
    playHref: content.playHref,
    playLabel: content.playLabel,
    related: content.related,
    title: content.title,
  };
  const schema = content.game ? (
    <JsonLd
      data={gameSchema({ ...content.game, locale, path })}
    />
  ) : null;

  if (content.playable) {
    return (
      <>
        {schema}
        <PlayablePage {...articleProps} difficulty={content.difficulty}>
          {body}
        </PlayablePage>
      </>
    );
  }

  return (
    <>
      {schema}
      <ArticleShell {...articleProps}>{body}</ArticleShell>
    </>
  );
}
