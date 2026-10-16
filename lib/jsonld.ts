import { offices, site } from "@/content/site";

// 구글 사이트 이름에 쓰는 값. 페이지 제목이나 슬로건이 아니라 브랜드 이름만 둔다.
const siteName = "뉴아미";
const alternateName = "Nuami";

export function homeJsonLd() {
  if (!site.canonicalUrl) return null;
  const url = site.canonicalUrl.replace(/\/$/, "");
  const orgId = `${url}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: siteName,
        alternateName,
        url,
        email: site.contactEmail,
        logo: {
          "@type": "ImageObject",
          url: `${url}/brand/mark.png`,
          width: 192,
          height: 192,
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: offices.ko[0]?.address,
          addressCountry: "KR",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        name: siteName,
        alternateName: [alternateName],
        url,
        inLanguage: "ko-KR",
        publisher: { "@id": orgId },
      },
    ],
  };
}
