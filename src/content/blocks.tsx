import Link from "next/link";
import { InlineText } from "@/content/inline";
import type { Block } from "@/content/types";
import { localizedPath, type Locale } from "@/i18n/config";

export function ContentBlocks({
  blocks,
  locale,
}: {
  blocks: Block[];
  locale: Locale;
}) {
  return (
    <>
      {blocks.map((block, index) => (
        <BlockView block={block} key={index} locale={locale} />
      ))}
    </>
  );
}

function BlockView({ block, locale }: { block: Block; locale: Locale }) {
  switch (block.type) {
    case "h2":
      return (
        <h2 id={block.id}>
          <InlineText locale={locale} text={block.text} />
        </h2>
      );
    case "h3":
      return (
        <h3>
          <InlineText locale={locale} text={block.text} />
        </h3>
      );
    case "p":
      return (
        <p>
          <InlineText locale={locale} text={block.text} />
        </p>
      );
    case "ul":
      return (
        <ul>
          {block.items.map((item, index) => (
            <li key={index}>
              <InlineText locale={locale} text={item} />
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol>
          {block.items.map((item, index) => (
            <li key={index}>
              <InlineText locale={locale} text={item} />
            </li>
          ))}
        </ol>
      );
    case "note":
      return (
        <div className="note">
          <InlineText locale={locale} text={block.text} />
        </div>
      );
    case "table":
      return (
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                {block.head.map((cell, index) => (
                  <th key={index}>
                    <InlineText locale={locale} text={cell} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td key={cellIndex}>
                      <InlineText locale={locale} text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cards":
      return (
        <div className="card-grid">
          {block.items.map((item) => (
            <Link
              className="mini-card"
              href={localizedPath(item.href, locale)}
              key={item.href}
            >
              <strong>
                <InlineText locale={locale} text={item.title} />{" "}
                {item.tag ? <span className="guide-tag">{item.tag}</span> : null}
              </strong>
              <span>
                <InlineText locale={locale} text={item.description} />
              </span>
            </Link>
          ))}
        </div>
      );
    default:
      return null;
  }
}
