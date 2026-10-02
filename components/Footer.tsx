import Logo from "@/components/Logo";
import { footer, site } from "@/content/site";

export default function Footer() {
  const legal = [
    site.legalCompanyName,
    site.registrationNumber ? `사업자등록번호 ${site.registrationNumber}` : null,
    site.foundedAt ? `설립 ${site.foundedAt}` : null,
  ].filter(Boolean);

  return (
    <footer className="border-t border-line">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between md:py-12">
        <div>
          <Logo className="h-6 w-auto" />
          <p className="mt-4 text-[15px] font-semibold text-ink">{footer.tagline}</p>
          <p className="mt-1 text-[15px] text-muted">{footer.slogan}</p>
          {legal.length ? <p className="mt-3 text-[14px] text-muted">{legal.join(" · ")}</p> : null}
        </div>
        <div className="flex flex-col gap-1 text-[14px] text-muted md:items-end">
          <a href={`mailto:${site.contactEmail}`} className="inline-flex min-h-11 items-center font-semibold text-ink hover:text-brand-deep">
            {site.contactEmail}
          </a>
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
