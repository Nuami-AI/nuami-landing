import "server-only";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { buildInquiryBody, buildInquirySubject, isInquiryType, validateInquiry, type InquiryFields } from "@/content/inquiry";
import { MAIL_LOGO_CID, buildInquiryHtml } from "@/lib/mail/inquiryTemplate";
import { MAIL_LOGO_PNG_BASE64 } from "@/lib/mail/logo";

export const runtime = "nodejs";

const toText = (value: unknown) => (typeof value === "string" ? value : "");
const singleLine = (value: string) => value.replace(/\s+/g, " ").trim();

export async function POST(request: Request) {
  let payload: Record<string, unknown>;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // 봇이 채우는 숨김 필드
  if (toText(payload.website)) {
    return NextResponse.json({ ok: true });
  }

  if (!isInquiryType(payload.type)) {
    return NextResponse.json({ error: "문의 목적을 선택해주세요." }, { status: 400 });
  }

  const fields: InquiryFields = {
    type: payload.type,
    organization: singleLine(toText(payload.organization)),
    name: singleLine(toText(payload.name)),
    email: toText(payload.email).trim(),
    message: toText(payload.message).trim(),
  };

  const errors = validateInquiry(fields);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "입력 내용을 확인해주세요.", errors }, { status: 400 });
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, INQUIRY_TO } = process.env;
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS || !SMTP_FROM || !INQUIRY_TO) {
    console.error("[inquiry] SMTP 환경 변수가 설정되지 않았습니다.");
    return NextResponse.json({ error: "지금은 문의를 보낼 수 없습니다. 잠시 후 다시 시도해주세요." }, { status: 503 });
  }

  const port = Number(SMTP_PORT) || 465;
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: port === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  });

  const subject = `${buildInquirySubject(fields.type)} ${fields.organization} / ${fields.name}`;

  try {
    await transporter.sendMail({
      from: { name: "NUAMI 웹사이트", address: SMTP_FROM },
      to: INQUIRY_TO,
      replyTo: { name: fields.name, address: fields.email },
      subject,
      text: buildInquiryBody(fields),
      html: buildInquiryHtml(fields, subject),
      attachments: [
        {
          filename: "nuami-logo.png",
          content: Buffer.from(MAIL_LOGO_PNG_BASE64, "base64"),
          contentType: "image/png",
          cid: MAIL_LOGO_CID,
        },
      ],
    });
  } catch (error) {
    console.error("[inquiry] 메일 발송 실패", error);
    return NextResponse.json({ error: "문의를 보내지 못했습니다. 잠시 후 다시 시도해주세요." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
