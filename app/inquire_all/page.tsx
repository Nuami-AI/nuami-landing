import type { Metadata } from "next";
import InquiryComposer from "@/components/InquiryComposer";
import PageHeading from "@/components/PageHeading";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata: Metadata = pageMetadata({ ...seo.inquire, path: "/inquire_all" });

export default function InquirePage() {
  return (
    <>
      <PageHeading
        eyebrow="CONTACT NUAMI"
        pageName="문의"
        title="다음 행동을 함께 만들까요?"
        description="기관 적용과 실증 협업, 서비스 체험, 새로운 제안을 기다립니다."
      />
      <section aria-label="문의 작성" className="bg-white pt-12 pb-20 md:pt-16 md:pb-28">
        <div className="container-x">
          <InquiryComposer />
        </div>
      </section>
    </>
  );
}
