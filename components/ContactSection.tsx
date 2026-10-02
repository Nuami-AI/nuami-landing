import { ArrowUpRight, MapPin } from "lucide-react";
import CopyEmail from "@/components/CopyEmail";
import EventNotice from "@/components/EventNotice";
import { buildMailto, contact, site } from "@/content/site";

export default function ContactSection() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y pt-0 md:pt-0">
      <div className="container-x" data-reveal>
        <div className="on-dark relative overflow-hidden rounded-[28px] bg-brand px-6 py-12 text-white sm:px-10 md:rounded-[32px] md:px-14 md:py-16 lg:px-16">
          <span aria-hidden className="sticker absolute top-6 right-6 hidden rotate-[4deg] md:inline-flex">
            NEXT ACTION →
          </span>
          <h2 id="contact-title" className="h2 max-w-[16ch]">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-[36rem] text-white/90">{contact.description}</p>

          <div className="mt-6">
            <EventNotice />
          </div>

          <a href={buildMailto()} className="btn btn-accent mt-6 w-full sm:w-auto">
            {contact.cta}
            <ArrowUpRight size={18} aria-hidden />
          </a>

          <div className="mt-8 border-t border-white/25 pt-6">
            <CopyEmail
              email={site.contactEmail}
              copyLabel={contact.copyLabel}
              copiedMessage={contact.copiedMessage}
              failedMessage={contact.copyFailedMessage}
            />
          </div>
        </div>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {contact.offices.map((o) => (
            <li key={o.label} className="flex items-start gap-3 rounded-[20px] bg-lavender p-5 md:p-6">
              <MapPin size={20} aria-hidden className="mt-1 shrink-0 text-brand-deep" />
              <div>
                <p className="text-[16px] font-extrabold">{o.label}</p>
                <p className="mt-1 text-[15px] text-ink/80 md:text-[16px]">{o.address}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
