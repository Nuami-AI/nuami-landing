import { Button, Card, CardContent, CardHeader, CardTitle } from "@nuami-ai/nuami-design";

const steps = [
  ["01", "링크 붙여넣기", "유튜브/숏폼 링크를 그대로 붙여넣어요."],
  ["02", "상황 분석", "콘텐츠 맥락과 채널 상태를 자동 분석해요."],
  ["03", "실행 카드 받기", "바로 실행할 우선순위 액션을 받아요."],
];

export default function HomePage() {
  return (
    <div className="bg-background text-text-strong">
      <section className="bg-[linear-gradient(145deg,#6D48F2,#8C6BFF_55%,#A58DFF)] py-16 sm:py-20">
        <div className="mx-auto w-full max-w-5xl px-5 text-center">
          <p className="text-xs font-bold tracking-[0.24em] text-white/85">NUAMI LANDING</p>
          <h1 className="mt-3 text-5xl font-black leading-[0.96] text-white sm:text-7xl">
            COOKIERUN
            <br />
            CREATOR
            <br />
            FAMILY
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-sm text-white/90 sm:text-base">
            크리에이터 패밀리를 위한 운영 안내 랜딩페이지
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <Button
              variant="secondary"
              size="secondary"
              className="!bg-white !text-brand-primary hover:!bg-white/90 focus-visible:!ring-white/50"
            >
              가이드 시작
            </Button>
            <Button
              variant="outline"
              size="secondary"
              className="!border-white/70 !bg-transparent !text-white hover:!bg-white/10 focus-visible:!ring-white/50"
            >
              데모 보기
            </Button>
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl px-5 py-12">
        <section className="text-center">
          <p className="text-xs font-bold tracking-[0.2em] text-accent-700">문제 인식</p>
          <h2 className="mt-2 text-3xl font-extrabold">우리 크리에이터를 위한 안내가 필요해요</h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-text-secondary">
            sample.tsx 메시지를 바탕으로 레퍼런스 느낌의 세로형 랜딩 구조로 새롭게 구성했습니다.
          </p>
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <Card>
            <CardHeader className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-700">01</p>
              <CardTitle>영상은 봤는데 실행이 어려워요</CardTitle>
            </CardHeader>
            <CardContent className="text-text-secondary">
              콘텐츠를 이해하는 것과 실제 운영 액션으로 옮기는 것은 다릅니다.
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.18em] text-accent-700">02</p>
              <CardTitle>채널마다 방식이 달라 혼란스러워요</CardTitle>
            </CardHeader>
            <CardContent className="text-text-secondary">
              플랫폼별 운영 규칙을 한 번에 정리해 실패를 줄여야 합니다.
            </CardContent>
          </Card>
        </section>
      </main>

      <section className="bg-muted py-14">
        <div className="mx-auto w-full max-w-5xl px-5">
          <h2 className="text-center text-3xl font-extrabold">누구나 쉽게 따라하는 3단계</h2>
          <div className="mt-7 grid gap-4 sm:grid-cols-3">
            {steps.map(([num, title, desc]) => (
              <Card key={num}>
                <CardHeader className="space-y-2">
                  <p className="text-xs font-semibold tracking-[0.18em] text-accent-700">{num}</p>
                  <CardTitle>{title}</CardTitle>
                </CardHeader>
                <CardContent className="text-text-secondary">{desc}</CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <main className="mx-auto w-full max-w-5xl px-5 py-12">
        <section className="rounded-xl border bg-card p-7 shadow-sd-0">
          <p className="text-xs font-semibold tracking-[0.18em] text-accent-700">핵심 기능</p>
          <h2 className="mt-2 text-3xl font-extrabold">상황별 맞춤 실행 카드</h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {[
              "콘텐츠 기획 템플릿 자동 제안",
              "업로드 루틴 체크리스트 제공",
              "팬 커뮤니케이션 문구 추천",
              "브랜드 협업 진행 플로우 안내",
            ].map((item) => (
              <div key={item} className="rounded-lg bg-muted px-4 py-3 text-sm font-semibold text-text-primary">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-xl bg-accent-700 p-8 text-white">
          <p className="text-xs font-semibold tracking-[0.2em] text-white/80">CREATOR IMPACT</p>
          <p className="mt-3 text-sm text-white/85">실행률 개선</p>
          <p className="mt-1 text-6xl font-black leading-none">+89%</p>
          <p className="mt-3 text-sm leading-6 text-white/85">
            지금 무엇을 해야 하는지 알려주는 경험에 집중한 랜딩 구조입니다.
          </p>
        </section>
      </main>

      <footer className="bg-text-primary py-11 text-white">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-start justify-between gap-4 px-5 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-white/75">COOKIE RUN CREATOR FAMILY</p>
            <p className="mt-2 text-sm text-white/80">지금 필요한 운영 액션을 빠르게 안내합니다.</p>
          </div>
          <Button size="secondary" className="bg-brand-500 text-white hover:bg-brand-600">
            무료로 시작하기
          </Button>
        </div>
      </footer>
    </div>
  );
}
