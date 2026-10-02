"use client";

import { CalendarDays, Mail } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useId, useRef, useState, type FormEvent } from "react";
import CopyButton from "@/components/CopyButton";
import {
  MAILTO_MAX,
  MESSAGE_MAX,
  buildInquiryBody,
  buildInquirySubject,
  inquiryTypes,
  resolveInquiryType,
  type InquiryType,
} from "@/content/inquiry";
import { site } from "@/content/site";
import { isEventActive } from "@/lib/event";

type ComposerProps = { initialType: InquiryType; fromEvent: boolean };

function Composer({ initialType, fromEvent }: ComposerProps) {
  const [type, setType] = useState<InquiryType>(initialType);
  const [organization, setOrganization] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [previewRequest, setPreviewRequest] = useState(0);
  const [eventActive, setEventActive] = useState(false);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const previewRef = useRef<HTMLTextAreaElement>(null);
  const emailRef = useRef<HTMLSpanElement>(null);
  const uid = useId();

  useEffect(() => {
    setType(initialType);
  }, [initialType]);

  useEffect(() => {
    setEventActive(fromEvent && isEventActive(site.event));
  }, [fromEvent]);

  const subject = buildInquirySubject(type);
  const body = buildInquiryBody({ type, organization, name, message });
  const fullText = `수신: ${site.contactEmail}\n제목: ${subject}\n\n${body}`;

  const validate = () => {
    if (!message.trim()) {
      setError("문의 내용을 입력해주세요.");
      messageRef.current?.focus();
      return false;
    }
    setError("");
    return true;
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    if (href.length > MAILTO_MAX) {
      setNotice("내용이 길어 메일 앱으로 바로 전달하기 어렵습니다. ‘문의 내용 복사’를 눌러 메일에 붙여 넣어주세요.");
      return;
    }
    setNotice("메일 앱을 여는 중입니다. 열리지 않으면 ‘문의 내용 복사’로 내용을 옮겨 이메일로 보내주세요.");
    window.location.href = href;
  };

  const selectNode = (node: HTMLElement | null) => {
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  useEffect(() => {
    if (!previewRequest) return;
    previewRef.current?.focus();
    previewRef.current?.select();
  }, [previewRequest]);

  const showPreview = previewRequest > 0;
  const showPreviewForManualCopy = () => setPreviewRequest((n) => n + 1);

  const messageId = `${uid}-message`;
  const errorId = `${uid}-error`;
  const countId = `${uid}-count`;

  return (
    <form noValidate onSubmit={onSubmit}>
      <fieldset>
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
            작성한 내용으로 메일 초안을 만듭니다. 메일 앱에서 내용을 확인한 뒤 직접 전송해주세요. 입력한 내용은 이 사이트에 저장되지 않습니다.
          </p>
          <div className="mt-8 rounded-[20px] bg-surface p-6">
            <p className="flex items-center gap-2 text-[14px] font-bold text-muted">
              <Mail size={16} aria-hidden />
              업무 이메일
            </p>
            <span ref={emailRef} className="mt-2 block text-[20px] font-extrabold tracking-[-0.01em] select-all">
              {site.contactEmail}
            </span>
            <CopyButton
              className="mt-3"
              getText={() => site.contactEmail}
              label="이메일 복사"
              successMessage="이메일 주소를 복사했습니다."
              failureMessage="주소를 선택했습니다. 직접 복사해주세요."
              onFailure={() => selectNode(emailRef.current)}
            />
          </div>
          {eventActive ? (
            <div className="mt-4 rounded-[20px] border border-line bg-white p-6">
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
              <label htmlFor={`${uid}-org`} className="text-[15px] font-bold">
                기관/회사명 <span className="font-normal text-muted">(선택)</span>
              </label>
              <input
                id={`${uid}-org`}
                type="text"
                autoComplete="organization"
                maxLength={100}
                value={organization}
                onChange={(e) => setOrganization(e.target.value)}
                className="mt-2 block min-h-12 w-full rounded-[14px] border border-line bg-white px-4 text-[16px] outline-none focus:border-brand-deep"
              />
            </div>
            <div>
              <label htmlFor={`${uid}-name`} className="text-[15px] font-bold">
                담당자명 <span className="font-normal text-muted">(선택)</span>
              </label>
              <input
                id={`${uid}-name`}
                type="text"
                autoComplete="name"
                maxLength={50}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 block min-h-12 w-full rounded-[14px] border border-line bg-white px-4 text-[16px] outline-none focus:border-brand-deep"
              />
            </div>
          </div>

          <div>
            <label htmlFor={messageId} className="text-[15px] font-bold">
              문의 내용 <span className="font-normal text-brand-deep">(필수)</span>
            </label>
            <textarea
              id={messageId}
              ref={messageRef}
              required
              rows={8}
              maxLength={MESSAGE_MAX}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                if (error && e.target.value.trim()) setError("");
              }}
              aria-invalid={error ? true : undefined}
              aria-describedby={`${error ? `${errorId} ` : ""}${countId}`}
              className={`mt-2 block w-full resize-y rounded-[14px] border bg-white px-4 py-3 text-[16px] leading-relaxed outline-none focus:border-brand-deep ${
                error ? "border-[#c4321f]" : "border-line"
              }`}
            />
            <div className="mt-2 flex items-start justify-between gap-4 text-[14px]">
              <p id={errorId} className="font-semibold text-[#c4321f]">
                {error}
              </p>
              <p id={countId} className="shrink-0 text-muted">
                {message.length.toLocaleString()} / {MESSAGE_MAX.toLocaleString()}자
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div>
              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                <Mail size={18} aria-hidden />
                메일 앱에서 문의 보내기
              </button>
              <p className="mt-2 text-[14px] text-muted">메일 앱이 열리면 내용을 확인한 뒤 전송해주세요.</p>
            </div>
            <CopyButton
              getText={() => fullText}
              beforeCopy={validate}
              label="문의 내용 복사"
              successMessage="문의 내용을 복사했습니다. 메일에 붙여 넣어 보내주세요."
              failureMessage="복사하지 못했습니다. 아래 내용을 직접 복사해주세요."
              onFailure={showPreviewForManualCopy}
            />
          </div>

          <p role="status" className="min-h-6 text-[15px] font-semibold text-ink">
            {notice}
          </p>

          {showPreview ? (
            <div>
              <label htmlFor={`${uid}-preview`} className="text-[15px] font-bold">
                복사할 문의 내용
              </label>
              <textarea
                id={`${uid}-preview`}
                ref={previewRef}
                readOnly
                rows={10}
                value={fullText}
                className="mt-2 block w-full rounded-[14px] border border-line bg-surface px-4 py-3 text-[15px] leading-relaxed"
              />
            </div>
          ) : null}
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
