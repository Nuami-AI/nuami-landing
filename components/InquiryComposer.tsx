"use client";

import { CalendarDays, CheckCircle2, ChevronDown, Send } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useRef, useState, type FormEvent } from "react";
import {
  EMAIL_MAX,
  MESSAGE_MAX,
  NAME_MAX,
  ORGANIZATION_MAX,
  inquiryTypes,
  resolveInquiryType,
  validateInquiry,
  type InquiryErrors,
  type InquiryType,
} from "@/content/inquiry";
import { site } from "@/content/site";
import { isEventActive } from "@/lib/event";

type ComposerProps = { initialType: InquiryType; fromEvent: boolean };
type FieldKey = keyof InquiryErrors;
type Status = "idle" | "sending" | "sent" | "failed";

const FIELD_ORDER: FieldKey[] = ["organization", "name", "email", "message"];

const inputClass = (invalid: boolean) =>
  `mt-2 block min-h-12 w-full rounded-[14px] border bg-white px-4 text-[16px] outline-none focus:border-brand-deep ${
    invalid ? "border-[#c4321f]" : "border-line"
  }`;

function Composer({ initialType, fromEvent }: ComposerProps) {
  const [type, setType] = useState<InquiryType>(initialType);
  const [values, setValues] = useState({ organization: "", name: "", email: "", message: "" });
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [notice, setNotice] = useState("");
  const [eventActive, setEventActive] = useState(false);
  const refs = useRef<Partial<Record<FieldKey, HTMLInputElement | HTMLTextAreaElement | null>>>({});
  const uid = useId();

  useEffect(() => {
    setType(initialType);
  }, [initialType]);

  useEffect(() => {
    setEventActive(fromEvent && isEventActive(site.event));
  }, [fromEvent]);

  const update = (key: FieldKey, value: string) => {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
    if (status === "sent" || status === "failed") {
      setStatus("idle");
      setNotice("");
    }
  };

  const focusFirstError = (next: InquiryErrors) => {
    const first = FIELD_ORDER.find((key) => next[key]);
    if (first) refs.current[first]?.focus();
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "sending") return;

    const next = validateInquiry(values);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setNotice("");
      focusFirstError(next);
      return;
    }

    setStatus("sending");
    setNotice("문의를 보내는 중입니다.");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type, ...values, website }),
      });
      const data: { error?: string; errors?: InquiryErrors } = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (data.errors) {
          setErrors(data.errors);
          focusFirstError(data.errors);
        }
        setStatus("failed");
        setNotice(data.error ?? "문의를 보내지 못했습니다. 잠시 후 다시 시도해주세요.");
        return;
      }
      setStatus("sent");
      setNotice("문의가 전달되었습니다. 입력하신 이메일로 회신드리겠습니다.");
      setValues({ organization: "", name: "", email: "", message: "" });
    } catch {
      setStatus("failed");
      setNotice("네트워크 문제로 문의를 보내지 못했습니다. 잠시 후 다시 시도해주세요.");
    }
  };

  const fieldId = (key: FieldKey) => `${uid}-${key}`;
  const errorId = (key: FieldKey) => `${uid}-${key}-error`;
  const countId = `${uid}-count`;

  const fieldProps = (key: FieldKey) => ({
    id: fieldId(key),
    required: true,
    value: values[key],
    "aria-invalid": errors[key] ? true : undefined,
    "aria-describedby": errors[key] ? errorId(key) : undefined,
  });

  const fieldError = (field: FieldKey) =>
    errors[field] ? (
      <p id={errorId(field)} className="mt-2 text-[14px] font-semibold text-[#c4321f]">
        {errors[field]}
      </p>
    ) : null;

  const required = <span className="font-normal text-brand-deep">(필수)</span>;

  return (
    <form noValidate onSubmit={onSubmit}>
      <div className="md:hidden">
        <h2 className="text-[24px] font-extrabold tracking-[-0.02em]">
          <label htmlFor={`${uid}-type`}>문의 목적을 선택해주세요</label>
        </h2>
        <div className="relative mt-5">
          <select
            id={`${uid}-type`}
            value={type}
            onChange={(e) => setType(e.target.value as InquiryType)}
            aria-describedby={`${uid}-type-desc`}
            className="block min-h-14 w-full appearance-none rounded-[14px] border border-brand-deep bg-lavender py-3 pr-12 pl-4 text-[17px] font-extrabold text-ink outline-none focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-deep"
          >
            {inquiryTypes.map((t) => (
              <option key={t.id} value={t.id}>
                {t.title}
              </option>
            ))}
          </select>
          <ChevronDown
            size={20}
            aria-hidden
            className="pointer-events-none absolute top-1/2 right-4 -translate-y-1/2 text-brand-deep"
          />
        </div>
        <p id={`${uid}-type-desc`} className="mt-3 text-[15px] text-muted">
          {inquiryTypes.find((t) => t.id === type)?.description}
        </p>
      </div>

      <fieldset className="hidden md:block">
        <legend className="w-full">
          <h2 className="text-[24px] font-extrabold tracking-[-0.02em] md:text-[30px]">문의 목적을 선택해주세요</h2>
        </legend>
        <div className="mt-6 grid gap-3 md:grid-cols-2 md:gap-4">
          {inquiryTypes.map((t, i) => {
            const checked = t.id === type;
            return (
              <label
                key={t.id}
                className={`relative flex min-h-[132px] cursor-pointer flex-col rounded-[20px] border p-6 transition-colors has-[:focus-visible]:outline-3 has-[:focus-visible]:outline-offset-3 has-[:focus-visible]:outline-brand-deep ${
                  checked ? "border-brand-deep bg-lavender" : "border-line bg-white hover:border-brand-deep"
                }`}
              >
                <input type="radio" name="inquiry-type" value={t.id} checked={checked} onChange={() => setType(t.id)} className="sr-only" />
                <span className="flex items-center justify-between">
                  <span aria-hidden className={`text-[14px] font-extrabold ${checked ? "text-brand-deep" : "text-muted"}`}>
                    0{i + 1}
                  </span>
                  <span
                    aria-hidden
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full border-2 ${checked ? "border-brand-deep" : "border-[#c4c8d0]"}`}
                  >
                    {checked ? <span className="h-2.5 w-2.5 rounded-full bg-brand-deep" /> : null}
                  </span>
                </span>
                <span className="mt-3 text-[19px] font-extrabold md:text-[21px]">{t.title}</span>
                <span className="mt-1.5 text-[15px] text-muted md:text-[16px]">{t.description}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-14 grid gap-10 border-t border-line pt-12 md:mt-20 md:grid-cols-[35fr_65fr] md:gap-14 md:pt-16">
        <div>
          <h2 className="text-[24px] font-extrabold tracking-[-0.02em] md:text-[30px]">문의 작성</h2>
          <p className="mt-3 text-[16px] text-muted">
            작성하신 내용은 뉴아미 담당자에게 바로 전달됩니다. 확인 후 입력하신 이메일로 회신드리겠습니다.
          </p>
          {eventActive ? (
            <div className="mt-8 rounded-[20px] border border-line bg-white p-6">
              <p className="flex items-center gap-2 text-[14px] font-bold text-brand-deep">
                <CalendarDays size={16} aria-hidden />
                {site.event.title}
              </p>
              <p className="mt-2 text-[16px] text-ink">
                {site.event.dateLabel}, {site.event.venue}에서 뉴아미를 만나보세요. 현장 미팅이나 행사 관련 문의도 기타 문의로 남겨주세요.
              </p>
            </div>
          ) : null}
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor={fieldId("organization")} className="text-[15px] font-bold">
                기관/회사명 {required}
              </label>
              <input
                {...fieldProps("organization")}
                ref={(el) => {
                  refs.current.organization = el;
                }}
                type="text"
                autoComplete="organization"
                maxLength={ORGANIZATION_MAX}
                onChange={(e) => update("organization", e.target.value)}
                className={inputClass(!!errors.organization)}
              />
              {fieldError("organization")}
            </div>
            <div>
              <label htmlFor={fieldId("name")} className="text-[15px] font-bold">
                담당자명 {required}
              </label>
              <input
                {...fieldProps("name")}
                ref={(el) => {
                  refs.current.name = el;
                }}
                type="text"
                autoComplete="name"
                maxLength={NAME_MAX}
                onChange={(e) => update("name", e.target.value)}
                className={inputClass(!!errors.name)}
              />
              {fieldError("name")}
            </div>
          </div>

          <div>
            <label htmlFor={fieldId("email")} className="text-[15px] font-bold">
              이메일 {required}
            </label>
            <input
              {...fieldProps("email")}
              ref={(el) => {
                refs.current.email = el;
              }}
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={EMAIL_MAX}
              placeholder="회신받을 이메일 주소"
              onChange={(e) => update("email", e.target.value)}
              className={inputClass(!!errors.email)}
            />
            {fieldError("email")}
          </div>

          <div aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor={`${uid}-website`}>웹사이트</label>
            <input id={`${uid}-website`} type="text" tabIndex={-1} autoComplete="off" value={website} onChange={(e) => setWebsite(e.target.value)} />
          </div>

          <div>
            <label htmlFor={fieldId("message")} className="text-[15px] font-bold">
              문의 내용 {required}
            </label>
            <textarea
              {...fieldProps("message")}
              ref={(el) => {
                refs.current.message = el;
              }}
              rows={8}
              maxLength={MESSAGE_MAX}
              onChange={(e) => update("message", e.target.value)}
              aria-describedby={`${errors.message ? `${errorId("message")} ` : ""}${countId}`}
              className={`${inputClass(!!errors.message)} resize-y py-3 leading-relaxed`}
            />
            <div className="mt-2 flex items-start justify-between gap-4 text-[14px]">
              <p id={errorId("message")} className="font-semibold text-[#c4321f]">
                {errors.message}
              </p>
              <p id={countId} className="shrink-0 text-muted">
                {values.message.length.toLocaleString()} / {MESSAGE_MAX.toLocaleString()}자
              </p>
            </div>
          </div>

          <div>
            <button type="submit" disabled={status === "sending"} className="btn btn-primary w-full disabled:cursor-wait disabled:opacity-60 sm:w-auto">
              <Send size={18} aria-hidden />
              {status === "sending" ? "보내는 중…" : "문의 보내기"}
            </button>
          </div>

          <p
            role="status"
            className={`flex min-h-6 items-start gap-2 text-[15px] font-semibold ${status === "failed" ? "text-[#c4321f]" : "text-ink"}`}
          >
            {status === "sent" ? <CheckCircle2 size={18} aria-hidden className="mt-0.5 shrink-0 text-brand-deep" /> : null}
            {notice}
          </p>
        </div>
      </div>
    </form>
  );
}

function ComposerFromQuery() {
  const raw = useSearchParams().get("type");
  return <Composer initialType={resolveInquiryType(raw)} fromEvent={raw === "event"} />;
}

export default function InquiryComposer() {
  return (
    <Suspense fallback={<Composer initialType="institution" fromEvent={false} />}>
      <ComposerFromQuery />
    </Suspense>
  );
}
