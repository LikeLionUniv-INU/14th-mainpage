import React, { useState } from "react";
import {
  Container,
  HeaderSection,
  Title,
  SubText,
  FAQWrapper,
  FAQItem,
  QuestionBox,
  ArrowIcon,
  AnswerBox,
  ContactLink,
} from "../styles/faq.styles";

function FAQ() {
  // 질문 토글창 관리
  const [activeIndices, setActiveIndices] = useState([]);
  const toggleFAQ = (index) => {
    if (activeIndices.includes(index)) {
      setActiveIndices(activeIndices.filter((i) => i !== index));
    } else {
      setActiveIndices([...activeIndices, index]);
    }
  };

  const faqData = [
    {
      question: "비전공자도 지원할 수 있나요?",
      answer:
        "물론입니다! 지난 기수에서도 공학계열뿐만 아니라 인문/상경/예체능계열 아기사자들 모두가 프로젝트를 만들고 성공적으로 수료했습니다.\n최초 멋사의 모토가 '기술적 장벽 때문에 생각을 표현하지 못한 비전공자분들과 감동의 순간을 만들자'인 만큼, 인천대학교 멋사도 전공 무관하게 해당 분야에 열정을 가진 분들을 기다립니다.",
    },
    {
      question: "코딩을 한 번도 해본 적이 없는데 괜찮나요?",
      answer:
        "매주 진행되는 파트별 스터디는 해당 분야에 배경지식이 없다고 가정하고 기초부터 배우기 때문에 괜찮습니다.\n다만 한정된 시간인 만큼 성장하고자 하는 의지와 학습에 투자할 시간은 필수로 마련해야 합니다.",
    },
    {
      question: "정기 세션(스터디) 일정은 어떻게 되나요?",
      answer:
        "정기 세션은 주 1회 1-2시간 정도 진행됩니다. 요일은 부원 모집 완료 후 각 파트별로 의논해 정해질 예정입니다.\n* 시험기간에는 쉬어갑니다.",
    },
    {
      question: "노트북이 필수인가요?",
      answer:
        "실습 위주로 진행되기 때문에 개인 노트북 지참은 필수입니다. 윈도우와 Mac 모두 가능합니다.",
    },
    {
      question: "막학기/휴학생도 지원 가능한가요?",
      answer:
        "재학생과 휴학생 모두 지원 가능합니다. 다만 1년 동안 책임감을 가지고 끝까지 활동하실 수 있는 분이어야 합니다.",
    },
    {
      question: "활동비(회비)가 있나요?",
      answer:
        "동아리방 비품 구매, OT/MT/해커톤 등 여러 행사의 원활한 운영을 위해 학기당 25,000원의 회비가 존재합니다.\n회비 사용 내역은 요청 시 언제든 투명하게 공개됩니다.",
    },
  ];

  return (
    <Container>
      <HeaderSection>
        <Title>FAQ</Title>
        <SubText>
          지원자분들이 자주 묻는 질문을 모았습니다.
          <br />더 궁금한 점이 있으시다면 아래 링크로 언제든 문의해주세요.
        </SubText>
      </HeaderSection>

      {/* 질문 섹션 */}
      <FAQWrapper>
        {faqData.map((item, index) => (
          <FAQItem key={index} $isOpen={activeIndices.includes(index)}>
            <QuestionBox
              onClick={() => toggleFAQ(index)}
              $isOpen={activeIndices.includes(index)}
            >
              <h3>
                <span className="q-mark">Q.</span>
                {item.question}
              </h3>
              <ArrowIcon $isOpen={activeIndices.includes(index)}>▼</ArrowIcon>
            </QuestionBox>

            <AnswerBox $isOpen={activeIndices.includes(index)}>
              <p>{item.answer}</p>
            </AnswerBox>
          </FAQItem>
        ))}
      </FAQWrapper>

      {/* 추가 링크 */}
      <ContactLink href="https://instagram.com/likelion_inu" target="_blank">
        더 궁금한 점이 있으신가요? 인스타그램 DM으로 물어보기 ↗
      </ContactLink>
    </Container>
  );
}

export default FAQ;
