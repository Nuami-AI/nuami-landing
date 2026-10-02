import Link from "next/link";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="container-x flex min-h-[60vh] flex-col items-start justify-center py-20">
        <p className="eyebrow text-brand-deep">404</p>
        <h1 className="h2 mt-4">찾으시는 페이지가 없어요.</h1>
        <p className="mt-4 text-muted">주소가 바뀌었거나 더 이상 공개되지 않는 페이지입니다.</p>
        <Link href="/" className="btn btn-primary mt-8">
          뉴아미 홈으로
        </Link>
      </main>
      <Footer />
    </>
  );
}
