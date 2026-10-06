import type { Metadata } from "next";
import { NewsDetailView, newsDetailMetadata, newsStaticParams } from "@/views/NewsViews";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return newsStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return newsDetailMetadata((await params).slug, "ko");
}

export default async function NewsDetailPage({ params }: PageProps) {
  return <NewsDetailView slug={(await params).slug} locale="ko" />;
}
