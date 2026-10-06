import { getInquiryTitle, type InquiryFields } from "@/content/inquiry";
import { offices as officesByLocale } from "@/content/site";

const offices = officesByLocale.ko;

export const MAIL_LOGO_CID = "nuami-logo@nuami.kr";

const HOMEPAGE_URL = "https://nuami.kr";
const COMPANY_NAME = "Nuami Inc.";

const BRAND = "#8651f2";
const BRAND_SOFT = "#f7f4fd";
const ACCENT = "#f97e6d";
const FONT = "'Pretendard','Apple SD Gothic Neo','Malgun Gothic','맑은 고딕',Dotum,sans-serif";

const escapeHtml = (value: string) =>
  value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const formatReceivedAt = (date: Date) =>
  new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).format(date);

const infoRow = (label: string, value: string, first = false) => `
            <p style="margin:${first ? "0" : "16px 0 0 0"};font-family:${FONT};font-size:15px;font-weight:400;line-height:150%">
              <span style="display:inline-block;width:92px;color:#6e6e79;vertical-align:top">${label}</span>
              <span style="display:inline-block;width:18px;color:#6e6e79;vertical-align:top">:</span>
              <span style="display:inline-block;font-weight:700;color:#202129;vertical-align:top;word-break:break-all">${value}</span>
            </p>`;

export function buildInquiryHtml(fields: InquiryFields, subject: string, receivedAt = new Date()): string {
  const organization = escapeHtml(fields.organization);
  const name = escapeHtml(fields.name);
  const email = escapeHtml(fields.email);
  const type = escapeHtml(getInquiryTitle(fields.type));
  const message = escapeHtml(fields.message).replace(/\r?\n/g, "<br>");
  const officeLines = offices.map((o) => `<p style="margin:3px 0 0 0">${escapeHtml(o.address)}</p>`).join("");

  return `<!doctype html>
<html lang="ko">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(subject)}</title></head>
<body style="margin:0;padding:0;background:#f7f8fa">
<table width="640" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;max-width:640px;height:auto;margin:40px auto;padding:0;border-collapse:collapse;border-top:30px solid ${BRAND};border-spacing:0;background:#ffffff">
  <tbody style="margin:0">
  <tr style="margin:0">
    <td style="margin:0;padding:40px 8% 0 8%;border-collapse:collapse">
      <img src="cid:${MAIL_LOGO_CID}" width="104" height="29" alt="nuami" style="display:block;width:104px;height:29px;border:0">
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding-top:56px;font-family:${FONT};font-size:30px;line-height:120%;color:#202129;text-align:center;font-weight:700;letter-spacing:-1px">
      뉴아미 웹사이트
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding-top:10px;font-family:${FONT};font-size:30px;line-height:120%;color:#202129;text-align:center;font-weight:700;letter-spacing:-1px">
      <span style="color:${BRAND}">새로운 문의</span>가 도착했습니다.
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding:56px 8% 0 8%">
      <div style="display:block;width:100%;height:0;font-size:0;line-height:0;border-bottom:2px solid #202129">&nbsp;</div>
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding-left:11%;padding-right:11%">
      <p style="margin:25px 0 0 0;font-family:${FONT};font-size:16px;font-weight:700;line-height:180%;color:#202129"><span style="color:${BRAND}">${organization}</span> ${name}님의 <span style="color:${ACCENT}">[${type}]</span> 문의가 접수되었습니다.</p>
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding:30px 11% 0 11%">
      <table width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="width:100%;height:auto;margin:0;padding:0;border-collapse:collapse;border-spacing:0;background:${BRAND_SOFT}">
        <tbody><tr style="margin:0">
          <td style="margin:0;padding:28px 30px">${infoRow("문의 유형", type, true)}${infoRow("기관/회사명", organization)}${infoRow("담당자명", name)}${infoRow("이메일", `<a href="mailto:${email}" style="color:${BRAND};text-decoration:none">${email}</a>`)}${infoRow("접수일시", escapeHtml(formatReceivedAt(receivedAt)))}
          </td>
        </tr>
      </tbody></table>
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding:30px 11% 0 11%">
      <p style="margin:0;font-family:${FONT};font-size:15px;font-weight:700;color:#202129">문의 내용</p>
      <div style="margin:12px 0 0 0;padding:22px 24px;border:1px solid #e6e8ed;font-family:${FONT};font-size:15px;line-height:180%;color:#202129;word-break:break-all">${message}</div>
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding:0;height:56px;font-size:0;line-height:0">&nbsp;</td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding:15px 6% 15px 8%;font-family:${FONT};font-size:12px;line-height:150%;color:#cccccc;background:#202129">
      본 메일은 발신전용입니다. <a href="${HOMEPAGE_URL}" target="_blank" style="color:#ffffff;text-decoration:underline">홈페이지 바로가기</a>
    </td>
  </tr>
  <tr style="margin:0">
    <td style="margin:0;padding:30px 8%;font-family:${FONT};font-size:12px;line-height:140%;color:#888888">
      <p style="margin:0">뉴아미<span style="padding:0 8px;color:#c3c2c2">|</span>${COMPANY_NAME}</p>
      ${officeLines}
      <p style="margin:3px 0 0 0">COPYRIGHT © ${new Date().getFullYear()} ${COMPANY_NAME} All rights reserved.</p>
    </td>
  </tr>
  </tbody>
</table>
</body>
</html>`;
}
