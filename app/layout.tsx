import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuami | 문화 행동 실행 플랫폼",
  description: "외국인의 한국 생활 적응을 돕는 AI 기반 문화 행동 실행 플랫폼 Nuami",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
