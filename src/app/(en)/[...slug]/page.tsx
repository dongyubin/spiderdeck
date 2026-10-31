import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ARTICLE_SLUGS,
  getPageBySlug,
  pageMetadataFor,
  pagePath,
} from "@/content/registry";
import { PageView } from "@/content/render";

export const dynamicParams = false;

type PageProps = { params: Promise<{ slug: string[] }> };

export function generateStaticParams() {
  return ARTICLE_SLUGS.map((slug) => ({ slug: [slug] }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return pageMetadataFor(slug.join("/"), "en");
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const page = getPageBySlug(slug.join("/"));
  if (!page) {
    notFound();
  }
  return (
    <PageView
      content={page.contents.en}
      locale="en"
      path={pagePath(page.slug)}
    />
  );
}
