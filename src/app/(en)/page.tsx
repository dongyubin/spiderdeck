import type { Metadata } from "next";
import { PageView } from "@/content/render";
import { HOME_PAGE, pageMetadataFor, pagePath } from "@/content/registry";

export const metadata: Metadata = pageMetadataFor("", "en");

export default function HomePage() {
  return (
    <PageView
      content={HOME_PAGE.contents.en}
      locale="en"
      path={pagePath(HOME_PAGE.slug)}
    />
  );
}
