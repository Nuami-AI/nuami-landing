import type { Metadata } from "next";
import NewsBoard from "@/components/NewsBoard";
import PageHeading from "@/components/PageHeading";
import { getPublishedNews } from "@/content/news";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.news, path: "/news" });

export default function NewsPage() {
  return (
    <>
      <PageHeading eyebrow="NEWS" pageName="뉴스" image="city" title="뉴아미의 새로운 발걸음." description="수상과 선정, 제품과 협업에 관한 소식을 전합니다." />
      <section aria-label="뉴스 목록" className="bg-white pt-10 pb-20 md:pt-14 md:pb-28">
        <div className="container-x">
          <NewsBoard items={getPublishedNews()} />
        </div>
      </section>
    </>
  );
}
