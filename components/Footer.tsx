import Link from "next/link";
import Logo from "@/components/Logo";
import { footer, nav, offices, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="bg-[#2b2c33] text-[#a4a7b1]">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <Logo tone="gray" className="h-7 w-auto" />
            <p className="mt-5 text-[16px] font-semibold text-[#d2d4da]">{footer.tagline}</p>
            <p className="mt-1 text-[15px]">{footer.slogan}</p>
            <a
              href={`mailto:${site.contactEmail}`}
              className="mt-4 inline-flex min-h-11 items-center text-[16px] font-semibold text-[#d2d4da] underline underline-offset-4 hover:text-white"
            >
              {site.contactEmail}
            </a>
          </div>
          <nav aria-label="푸터 메뉴">
            <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-[16px] font-semibold text-[#d2d4da] hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <dl className="mt-10 grid gap-5 border-t border-white/10 pt-8 text-[14px] md:grid-cols-2 md:text-[15px]">
          {offices.map((o) => (
            <div key={o.label}>
              <dt className="font-bold text-[#d2d4da]">{o.label}</dt>
              <dd className="mt-1">{o.address}</dd>
            </div>
          ))}
          {site.legalCompanyName ? (
            <div>
              <dt className="font-bold text-[#d2d4da]">법인명</dt>
              <dd className="mt-1">
                {site.legalCompanyName}
                {site.registrationNumber ? ` · 사업자등록번호 ${site.registrationNumber}` : ""}
              </dd>
            </div>
          ) : null}
        </dl>

        <p className="mt-8 text-[13px] text-[#9a9da8]">{footer.copyright}</p>
      </div>
    </footer>
  );
}
