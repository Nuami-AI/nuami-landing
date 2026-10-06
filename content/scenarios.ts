import type { Localized } from "@/lib/i18n";

export type ScenarioCard = {
  title: string;
  body: string;
};

export type Scenario = {
  id: string;
  label: string;
  question: string;
  situation: ScenarioCard;
  action: ScenarioCard;
  context: ScenarioCard;
};

export const scenarios: Localized<Scenario[]> = {
  ko: [
    {
      id: "cafe",
      label: "카페 이용",
      question: "카페에서 노트북으로 공부하고 싶어요.",
      situation: {
        title: "매장 이용 안내를 먼저 확인해요.",
        body: "노트북 사용 가능 여부와 좌석, 콘센트 위치를 살펴보세요.",
      },
      action: {
        title: "주문하고, 좌석을 확인해요.",
        body: "음료 주문 → 이용 가능한 좌석 확인 → 필요한 경우 직원에게 문의.",
      },
      context: {
        title: "오래 머물 계획이라면 한 번 더 확인해요.",
        body: "혼잡도와 매장별 이용 기준이 다를 수 있어요. ‘노트북을 사용해도 괜찮을까요?’라고 물어볼 수 있어요.",
      },
    },
    {
      id: "bank",
      label: "은행 방문",
      question: "한국에서 은행 계좌를 만들고 싶어요.",
      situation: {
        title: "방문할 은행의 준비사항을 확인해요.",
        body: "신분 확인 서류와 계좌 개설 조건은 은행과 지점에 따라 다를 수 있어요.",
      },
      action: {
        title: "문의하고, 준비한 뒤 방문해요.",
        body: "지점 안내 확인 → 필요한 서류 준비 → 번호표 발급 → 창구에서 계좌 개설 문의.",
      },
      context: {
        title: "방문 전 확인하면 헛걸음을 줄일 수 있어요.",
        body: "‘외국인 유학생인데 계좌 개설에 어떤 서류가 필요한가요?’라고 문의해보세요.",
      },
    },
    {
      id: "professor",
      label: "교수님 연락",
      question: "교수님께 면담을 요청하고 싶어요.",
      situation: {
        title: "누가, 어떤 이유로 연락하는지 정리해요.",
        body: "수업명, 이름, 문의 목적, 가능한 일정을 준비하세요.",
      },
      action: {
        title: "제목과 내용을 짧고 분명하게 써요.",
        body: "인사와 자기소개 → 면담 목적 → 가능한 시간 제안 → 감사 인사.",
      },
      context: {
        title: "상대가 답하기 쉬운 방식으로 요청해요.",
        body: "‘가능하신 시간을 알려주시면 일정에 맞추겠습니다’처럼 정중하게 표현할 수 있어요.",
      },
    },
  ],
  en: [
    {
      id: "cafe",
      label: "At a café",
      question: "I want to study on my laptop at a café.",
      situation: {
        title: "Check the café's policy first.",
        body: "See whether laptops are allowed, and look for available seats and power outlets.",
      },
      action: {
        title: "Order, then find a seat.",
        body: "Order a drink → find an available seat → ask staff if needed.",
      },
      context: {
        title: "Planning to stay a while? Check once more.",
        body: "Policies differ by café and how busy it is. You can ask, “노트북을 사용해도 괜찮을까요?” (Is it okay to use my laptop?)",
      },
    },
    {
      id: "bank",
      label: "Bank visit",
      question: "I want to open a bank account in Korea.",
      situation: {
        title: "Check what the bank requires.",
        body: "ID documents and account opening conditions can vary by bank and branch.",
      },
      action: {
        title: "Ask, prepare, then visit.",
        body: "Check the branch info → prepare documents → take a queue ticket → ask about opening an account at the counter.",
      },
      context: {
        title: "Checking ahead saves you a wasted trip.",
        body: "Try asking, “I'm an international student. What documents do I need to open an account?”",
      },
    },
    {
      id: "professor",
      label: "Emailing a professor",
      question: "I want to request a meeting with my professor.",
      situation: {
        title: "Be clear about who you are and why you're writing.",
        body: "Prepare the course name, your name, the purpose and times you're available.",
      },
      action: {
        title: "Keep the subject and message short and clear.",
        body: "Greeting and introduction → purpose of the meeting → suggested times → thank you.",
      },
      context: {
        title: "Make it easy for them to reply.",
        body: "A polite line like “Please let me know a time that works for you, and I'll adjust my schedule” goes a long way.",
      },
    },
  ],
};
