import Link from "next/link";
import Logo from "@/components/Logo";
import { footer, nav, offices, site } from "@/content/site";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="container-x py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16">
          <div>
            <Logo className="h-7 w-auto" />
            <p className="mt-5 text-[16px] font-semibold text-ink">{footer.tagline}</p>
            <p className="mt-1 text-[15px] text-muted">{footer.slogan}</p>
            <a href={`mailto:${site.contactEmail}`} className="text-link mt-4 text-[16px]">
              {site.contactEmail}
            </a>
          </div>
          <nav aria-label="푸터 메뉴">
            <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex min-h-11 items-center text-[16px] font-semibold text-ink hover:text-brand-deep">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <dl className="mt-10 grid gap-5 border-t border-line pt-8 text-[14px] md:grid-cols-2 md:text-[15px]">
          {offices.map((o) => (
            <div key={o.label}>
              <dt className="font-bold text-ink">{o.label}</dt>
              <dd className="mt-1 text-muted">{o.address}</dd>
            </div>
          ))}
          {site.legalCompanyName ? (
            <div>
              <dt className="font-bold text-ink">법인명</dt>
              <dd className="mt-1 text-muted">
                {site.legalCompanyName}
                {site.registrationNumber ? ` · 사업자등록번호 ${site.registrationNumber}` : ""}
              </dd>
            </div>
          ) : null}
        </dl>

        <p className="mt-8 text-[13px] text-muted">{footer.copyright}</p>
      </div>
    </footer>
  );
}
