"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type CopyEmailProps = {
  email: string;
  copyLabel: string;
  copiedMessage: string;
  failedMessage: string;
};

export default function CopyEmail({ email, copyLabel, copiedMessage, failedMessage }: CopyEmailProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");
  const addressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (status !== "copied") return;
    const t = window.setTimeout(() => setStatus("idle"), 3000);
    return () => window.clearTimeout(t);
  }, [status]);

  const selectAddress = () => {
    const node = addressRef.current;
    const selection = window.getSelection();
    if (!node || !selection) return;
    const range = document.createRange();
    range.selectNodeContents(node);
    selection.removeAllRanges();
    selection.addRange(range);
  };

  const copy = async () => {
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      selectAddress();
      setStatus("failed");
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-wrap items-center gap-3">
        <span ref={addressRef} className="text-[20px] font-extrabold tracking-[-0.01em] select-all md:text-[24px]">
          {email}
        </span>
        <button
          type="button"
          onClick={copy}
          className="inline-flex min-h-11 items-center gap-1.5 rounded-full border-2 border-white/60 px-4 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
        >
          {status === "copied" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
          {copyLabel}
        </button>
      </div>
      <p role="status" className="min-h-6 text-[15px] font-semibold text-white">
        {status === "copied" ? copiedMessage : status === "failed" ? failedMessage : ""}
      </p>
    </div>
  );
}
