"use client";

import { Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type CopyButtonProps = {
  getText: () => string;
  label: string;
  successMessage: string;
  failureMessage: string;
  onFailure?: () => void;
  beforeCopy?: () => boolean;
  className?: string;
};

export default function CopyButton({ getText, label, successMessage, failureMessage, onFailure, beforeCopy, className = "" }: CopyButtonProps) {
  const [status, setStatus] = useState<"idle" | "copied" | "failed">("idle");

  useEffect(() => {
    if (status !== "copied") return;
    const t = window.setTimeout(() => setStatus("idle"), 3000);
    return () => window.clearTimeout(t);
  }, [status]);

  const copy = async () => {
    if (beforeCopy && !beforeCopy()) return;
    try {
      if (!navigator.clipboard?.writeText) throw new Error("clipboard unavailable");
      await navigator.clipboard.writeText(getText());
      setStatus("copied");
    } catch {
      onFailure?.();
      setStatus("failed");
    }
  };

  return (
    <div className={className}>
      <button
        type="button"
        onClick={copy}
        className="inline-flex min-h-11 items-center gap-1.5 rounded-full border border-line bg-white px-4 text-[15px] font-bold text-ink transition-colors hover:border-brand-deep hover:text-brand-deep"
      >
        {status === "copied" ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
        {label}
      </button>
      <p role="status" className="mt-1.5 min-h-6 text-[14px] font-semibold text-muted">
        {status === "copied" ? successMessage : status === "failed" ? failureMessage : ""}
      </p>
    </div>
  );
}
