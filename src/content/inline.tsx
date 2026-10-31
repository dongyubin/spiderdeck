import Link from "next/link";
import { localizedPath, type Locale } from "@/i18n/config";

const TOKEN_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g;

const BOLD_PATTERN = /^\*\*([^*]+)\*\*$/;
const ITALIC_PATTERN = /^\*([^*]+)\*$/;
const LINK_PATTERN = /^\[([^\]]+)\]\(([^)]+)\)$/;

export function InlineText({
  locale,
  text,
}: {
  locale: Locale;
  text: string;
}) {
  const tokens = text.split(TOKEN_PATTERN).filter((token) => token !== "");

  return (
    <>
      {tokens.map((token, index) => {
        const bold = BOLD_PATTERN.exec(token);
        if (bold?.[1]) {
          return <strong key={index}>{bold[1]}</strong>;
        }

        const italic = ITALIC_PATTERN.exec(token);
        if (italic?.[1]) {
          return <em key={index}>{italic[1]}</em>;
        }

        const link = LINK_PATTERN.exec(token);
        const label = link?.[1];
        const href = link?.[2];
        if (label && href) {
          if (href.startsWith("http") || href.startsWith("mailto:")) {
            return (
              <a href={href} key={index} rel="noopener noreferrer" target="_blank">
                {label}
              </a>
            );
          }
          return (
            <Link href={localizedPath(href, locale)} key={index}>
              {label}
            </Link>
          );
        }

        return token;
      })}
    </>
  );
}
