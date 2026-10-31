import Link from "next/link";
import type { ReactNode } from "react";
import { JsonLd } from "@/components/seo/json-ld";
import { InlineText } from "@/content/inline";
import { localizedPath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import {
  breadcrumbSchema,
  faqSchema,
  type BreadcrumbItem,
  type FaqEntry,
  webPageSchema,
} from "@/lib/seo";

export interface RelatedLink {
  href: string;
  title: string;
  description: string;
}

export interface ArticleShellProps {
  breadcrumbs: BreadcrumbItem[];
  children: ReactNode;
  description: string;
  eyebrow?: string;
  faq?: FaqEntry[];
  hideBreadcrumbs?: boolean;
  lead?: string;
  locale: Locale;
  path: string;
  playHref?: string;
  playLabel?: string;
  related?: RelatedLink[];
  title: string;
}

export function ArticleShell({
  breadcrumbs,
  children,
  description,
  eyebrow,
  faq,
  hideBreadcrumbs = false,
  lead,
  locale,
  path,
  playHref,
  playLabel,
  related,
  title,
}: ArticleShellProps) {
  const messages = getMessages(locale);
  const crumbs: BreadcrumbItem[] = [
    { name: messages.article.home, path: "/" },
    ...breadcrumbs,
  ];
  const playTarget = playHref
    ? playHref.startsWith("#")
      ? playHref
      : localizedPath(playHref, locale)
    : null;

  return (
    <>
      {hideBreadcrumbs ? null : (
        <JsonLd data={breadcrumbSchema(crumbs, locale)} />
      )}
      <JsonLd
        data={webPageSchema({ name: title, description, path, locale })}
      />
      {faq && faq.length > 0 ? <JsonLd data={faqSchema(faq, locale)} /> : null}

      <main className="site-main">
        {hideBreadcrumbs ? null : (
          <nav aria-label={messages.article.breadcrumb} className="breadcrumbs">
            <ol>
              {crumbs.map((crumb, index) => (
                <li key={crumb.path}>
                  {index === crumbs.length - 1 ? (
                    <span aria-current="page">{crumb.name}</span>
                  ) : (
                    <Link href={localizedPath(crumb.path, locale)}>
                      {crumb.name}
                    </Link>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <article className="article-shell">
          <header className="article-header">
            <p className="article-eyebrow">
              {eyebrow ?? messages.article.defaultEyebrow}
            </p>
            <h1>{title}</h1>
            {lead ? (
              <p className="article-lead">
                <InlineText locale={locale} text={lead} />
              </p>
            ) : null}
            {playTarget ? (
              <div className="article-header-actions">
                <Link className="button-gold" href={playTarget}>
                  {playLabel ?? messages.article.playFree}
                </Link>
                <a className="text-link" href="#article-body">
                  {messages.article.readGuide}
                </a>
              </div>
            ) : null}
          </header>

          <div className="article-body" id="article-body">
            {children}
          </div>

          {faq && faq.length > 0 ? (
            <section aria-labelledby="faq-heading" className="faq-section">
              <h2 id="faq-heading">{messages.article.faqHeading}</h2>
              <div className="faq-list">
                {faq.map((entry) => (
                  <details className="faq-item" key={entry.q}>
                    <summary>{entry.q}</summary>
                    <p>{entry.a}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          {related && related.length > 0 ? (
            <section
              aria-labelledby="related-heading"
              className="related-section"
            >
              <h2 id="related-heading">{messages.article.relatedHeading}</h2>
              <div className="related-grid">
                {related.map((link) => (
                  <Link
                    className="related-card"
                    href={localizedPath(link.href, locale)}
                    key={link.href}
                  >
                    <span>{link.title}</span>
                    <small>{link.description}</small>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <div className="article-end-cta">
            <p>{messages.article.endCta}</p>
            <Link className="button-gold" href={localizedPath("/", locale)}>
              {messages.article.endCtaButton}
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
