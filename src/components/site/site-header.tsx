"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  LOCALES,
  LOCALE_INFO,
  localizedPath,
  switchLocalePath,
  type Locale,
} from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { PRIMARY_NAV } from "@/lib/site";

export function SiteHeader({ locale }: { locale: Locale }) {
  const messages = getMessages(locale);
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link
          aria-label={messages.nav.brandHome}
          className="brand-mark"
          href={localizedPath("/", locale)}
        >
          <span aria-hidden className="brand-spade">
            ♠
          </span>
          <span className="brand-name">SpiderDeck</span>
        </Link>

        <nav aria-label={messages.nav.main} className="site-nav">
          {PRIMARY_NAV.map((link) => (
            <Link
              className="site-nav-link"
              href={localizedPath(link.href, locale)}
              key={link.href}
            >
              {messages.nav.links[link.labelKey]}
            </Link>
          ))}
        </nav>

        <div
          aria-label={messages.nav.language}
          className="lang-switch"
          role="group"
        >
          {LOCALES.map((item) => (
            <Link
              aria-current={item === locale ? "true" : undefined}
              className="lang-switch-link"
              href={switchLocalePath(pathname ?? "/", item)}
              hrefLang={LOCALE_INFO[item].htmlLang}
              key={item}
              lang={LOCALE_INFO[item].htmlLang}
            >
              {LOCALE_INFO[item].shortLabel}
            </Link>
          ))}
        </div>

        <Link className="header-play" href={localizedPath("/", locale)}>
          {messages.nav.playFree}
        </Link>

        <button
          aria-controls="mobile-menu"
          aria-expanded={open}
          aria-label={open ? messages.nav.closeMenu : messages.nav.openMenu}
          className="site-menu-toggle"
          onClick={() => setOpen((value) => !value)}
          type="button"
        >
          {open ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
        </button>
      </div>

      {open ? (
        <>
          <button
            aria-label={messages.nav.closeMenu}
            className="site-menu-backdrop"
            onClick={() => setOpen(false)}
            type="button"
          />
          <nav
            aria-label={messages.nav.mobile}
            className="site-mobile-menu"
            id="mobile-menu"
          >
            {PRIMARY_NAV.map((link) => (
              <Link
                className="site-mobile-link"
                href={localizedPath(link.href, locale)}
                key={link.href}
                onClick={() => setOpen(false)}
              >
                {messages.nav.links[link.labelKey]}
              </Link>
            ))}
            <Link
              className="site-mobile-cta"
              href={localizedPath("/", locale)}
              onClick={() => setOpen(false)}
            >
              {messages.nav.playCta}
            </Link>
            <div
              aria-label={messages.nav.language}
              className="site-mobile-langs"
              role="group"
            >
              {LOCALES.map((item) => (
                <Link
                  aria-current={item === locale ? "true" : undefined}
                  className="site-mobile-lang"
                  href={switchLocalePath(pathname ?? "/", item)}
                  hrefLang={LOCALE_INFO[item].htmlLang}
                  key={item}
                  lang={LOCALE_INFO[item].htmlLang}
                  onClick={() => setOpen(false)}
                >
                  {LOCALE_INFO[item].label}
                </Link>
              ))}
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
