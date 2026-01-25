import styled, { keyframes } from "styled-components";

// 애니메이션
export const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 100px 20px 100px;
  background-color: #050505;
  color: white;

  background-image:
    linear-gradient(rgba(255, 119, 16, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 119, 16, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 60px;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const Title = styled.h1`
  font-family: "SUITE", sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 20px;

  span {
    color: #ff7710;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

export const SubText = styled.p`
  color: #aaa;
  font-size: 1.2rem;
  line-height: 1.6;
`;

// 질문 리스트 박스
export const FAQWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;
`;

// 개별 질문 박스
export const FAQItem = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  border: 1px solid
    ${(props) => (props.$isOpen ? "#ff7710" : "rgba(255, 255, 255, 0.1)")};
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #ff7710;
  }
`;

// 질문 부분
export const QuestionBox = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${(props) => (props.$isOpen ? "#ff7710" : "white")};
    margin: 0;
    transition: color 0.3s;
  }

  span.q-mark {
    color: #ff7710;
    margin-right: 10px;
    font-weight: 900;
  }
`;

// 화살표 아이콘
export const ArrowIcon = styled.span`
  font-size: 1rem;
  color: #888;
  transition: transform 0.3s ease;
  transform: ${(props) => (props.$isOpen ? "rotate(180deg)" : "rotate(0deg)")};
`;

// 답변 부분
export const AnswerBox = styled.div`
  max-height: ${(props) => (props.$isOpen ? "300px" : "0")};
  opacity: ${(props) => (props.$isOpen ? "1" : "0")};
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  background-color: rgba(0, 0, 0, 0.2);

  word-break: keep-all;
  white-space: pre-line;

  p {
    padding: 20px 25px;
    color: #ccc;
    line-height: 1.6;
    font-size: 1rem;
    margin: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }
`;

// 추가 문의 링크
export const ContactLink = styled.a`
  margin-top: 60px;
  color: #888;
  font-size: 1rem;
  text-align: center;
  text-decoration: underline;
  cursor: pointer;
  transition: 0.3s;
  animation: ${fadeIn} 0.8s ease-out 0.5s backwards;

  &:hover {
    color: #ff7710;
  }
`;
