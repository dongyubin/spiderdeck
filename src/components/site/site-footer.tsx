import Link from "next/link";
import { localizedPath, type Locale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { FOOTER_LINKS, SITE_NAME } from "@/lib/site";

export function SiteFooter({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);

  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Link className="brand-mark" href={localizedPath("/", locale)}>
            <span aria-hidden className="brand-spade">
              ♠
            </span>
            <span className="brand-name">{SITE_NAME}</span>
          </Link>
          <p>{messages.footer.blurb}</p>
        </div>

        <div className="site-footer-links">
          {FOOTER_LINKS.map((group) => (
            <div key={group.titleKey}>
              <h2>{messages.footer.groups[group.titleKey]}</h2>
              <ul>
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={localizedPath(link.href, locale)}>
                      {messages.footer.links[link.labelKey]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="site-footer-bottom">
        <p>{messages.footer.copyright(new Date().getFullYear())}</p>
        <p>
          {messages.footer.cardArtPrefix}
          <Link href={localizedPath("/credits", locale)}>
            {messages.footer.cardArtLink}
          </Link>
          {messages.footer.cardArtSuffix}
        </p>
      </div>
    </footer>
  );
}
