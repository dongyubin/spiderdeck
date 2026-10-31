import type { Metadata, Viewport } from "next";
import "../globals.css";
import { SiteDocument } from "@/components/site/site-document";
import { rootMetadata, SITE_VIEWPORT } from "@/lib/metadata";

export const metadata: Metadata = rootMetadata("en");

export const viewport: Viewport = SITE_VIEWPORT;

export default function EnLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <SiteDocument locale="en">{children}</SiteDocument>;
}
