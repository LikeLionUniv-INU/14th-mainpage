import styled, { keyframes } from "styled-components";

// 애니메이션
const fadeIn = keyframes`
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

export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 50px;
  animation: ${fadeIn} 0.8s ease-out;
`;

export const Title = styled.h1`
  font-family: "SUITE", sans-serif;
  font-size: 3.5rem;
  font-weight: 900;
  margin-bottom: 15px;

  span {
    color: #ff7710;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const SubText = styled.p`
  color: #ccc;
  font-size: 1.2rem;
  line-height: 1.6;
`;

// 모집 일정 박스
export const ScheduleBox = styled.div`
  width: 100%;
  max-width: 900px;
  background-color: rgba(30, 30, 30, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  animation: ${fadeIn} 0.8s ease-out 0.2s backwards;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 50px;
  }
`;

export const ScheduleItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 10px;
  position: relative;
  flex: 1;

  // 화살표
  &:not(:last-child)::after {
    content: "→";
    position: absolute;
    right: -10px;
    top: 30%;
    color: #555;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    width: 100%;
    &:not(:last-child)::after {
      content: "↓"; // 모바일에선 아래 화살표
      right: auto;
      top: auto;
      bottom: -35px;
    }
  }
`;

export const StepBadge = styled.span`
  background-color: ${(props) => (props.$active ? "#ff7710" : "#333")};
  color: white;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: bold;
`;

export const StepTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${(props) => (props.$active ? "white" : "#888")};
`;

export const StepDate = styled.p`
  font-size: 0.95rem;
  color: #aaa;
`;

// 지원하기 버튼 섹션
export const ButtonSection = styled.div`
  text-align: center;
  animation: ${fadeIn} 0.8s ease-out 0.4s backwards;
`;

export const ApplyBtn = styled.a`
  display: inline-block;
  background-color: ${(props) => (props.$disabled ? "#333" : "#ff7710")};
  color: ${(props) => (props.$disabled ? "#888" : "white")};
  padding: 20px 60px;
  margin-bottom: 20px;
  border-radius: 50px;
  font-size: 1.5rem;
  font-weight: 900;
  text-decoration: none;
  transition: 0.3s;
  cursor: ${(props) => (props.$disabled ? "not-allowed" : "pointer")};
  box-shadow: ${(props) =>
    props.$disabled ? "none" : "0 10px 30px rgba(255, 119, 16, 0.4)"};

  &:hover {
    transform: ${(props) => (props.$disabled ? "none" : "translateY(-5px)")};
    background-color: ${(props) => (props.$disabled ? "#333" : "#ff9944")};
  }
`;

// 주의사항 섹션
export const WarningBox = styled.div`
  margin-top: 30px;
  padding: 20px;
  background-color: rgba(255, 77, 77, 0.1);
  border: 1px solid rgba(255, 77, 77, 0.4);
  border-radius: 10px;
  max-width: 600px;

  p {
    font-size: 0.9rem;
    color: #ffcccc;
    line-height: 1.5;
    margin: 0;
  }
`;
