import type { Metadata } from "next";
import { PageView } from "@/content/render";
import { HOME_PAGE, pageMetadataFor, pagePath } from "@/content/registry";

export const metadata: Metadata = pageMetadataFor("", "ja");

export default function JaHomePage() {
  return (
    <PageView
      content={HOME_PAGE.contents.ja}
      locale="ja"
      path={pagePath(HOME_PAGE.slug)}
    />
  );
}
