import type { Metadata } from "next";
import { PageView } from "@/content/render";
import { HOME_PAGE, pageMetadataFor, pagePath } from "@/content/registry";

export const metadata: Metadata = pageMetadataFor("", "zh");

export default function ZhHomePage() {
  return (
    <PageView
      content={HOME_PAGE.contents.zh}
      locale="zh"
      path={pagePath(HOME_PAGE.slug)}
    />
  );
}
