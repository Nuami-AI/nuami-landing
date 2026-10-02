import type { Metadata } from "next";
import { MapPin } from "lucide-react";
import InquiryComposer from "@/components/InquiryComposer";
import PageHeading from "@/components/PageHeading";
import { offices, seo } from "@/content/site";
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
      <section aria-labelledby="office-title" className="border-t border-line bg-surface py-14 md:py-20">
        <div className="container-x">
          <h2 id="office-title" className="text-[22px] font-extrabold tracking-[-0.02em] md:text-[26px]">
            사업장
          </h2>
          <ul className="mt-6 grid gap-6 md:grid-cols-2">
            {offices.map((o) => (
              <li key={o.label} className="flex gap-3">
                <MapPin size={20} aria-hidden className="mt-1 shrink-0 text-brand-deep" />
                <div>
                  <h3 className="text-[17px] font-extrabold">{o.label}</h3>
                  <p className="mt-1 text-[16px] text-muted">{o.address}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
