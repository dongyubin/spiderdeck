import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { getMessages } from "@/i18n/messages";

const messages = getMessages("en");

export const metadata: Metadata = {
  title: "Page Not Found | SpiderDeck",
  description:
    "That page is not on SpiderDeck. Head back to the Spider Solitaire table or browse the rules, strategy, and FAQ guides.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="font-sans text-base antialiased">
        <main className="site-main">
          <section className="not-found-card">
            <p className="article-eyebrow">{messages.notFound.eyebrow}</p>
            <h1>{messages.notFound.title}</h1>
            <p className="not-found-lead">{messages.notFound.lead}</p>
            <div className="not-found-actions">
              <Link className="button-gold" href="/">
                {messages.notFound.play}
              </Link>
              <Link className="text-link" href="/guides">
                {messages.notFound.guides}
              </Link>
            </div>
            <ul className="not-found-links">
              <li>
                <Link href="/spider-solitaire-2-suits">
                  {messages.notFound.twoSuits}
                </Link>
              </li>
              <li>
                <Link href="/how-to-play">
                  {messages.notFound.howToPlay}
                </Link>
              </li>
              <li>
                <Link href="/spider-solitaire-faq">
                  {messages.notFound.faq}
                </Link>
              </li>
              <li>
                <Link href="/zh/" lang="zh-CN">
                  中文
                </Link>
              </li>
              <li>
                <Link href="/ja/" lang="ja">
                  日本語
                </Link>
              </li>
            </ul>
          </section>
        </main>
      </body>
    </html>
  );
}
