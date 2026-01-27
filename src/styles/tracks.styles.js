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

export const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 70px;
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
    font-size: 2rem;
  }
`;

export const SubText = styled.p`
  color: #aaa;
  font-size: 1.2rem;
  line-height: 1.6;
`;

// 2x2 그리드
export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  width: 100%;
  max-width: 1000px;
  padding-bottom: 70px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const TrackCard = styled.div`
  background-color: rgba(30, 30, 30, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 40px;
  transition: 0.3s;
  animation: ${fadeIn} 0.8s ease-out backwards;
  display: flex;
  flex-direction: column;
  gap: 20px;

  // 카드별 등장 시간차
  &:nth-child(1) {
    animation-delay: 0.1s;
  }
  &:nth-child(2) {
    animation-delay: 0.2s;
  }
  &:nth-child(3) {
    animation-delay: 0.3s;
  }
  &:nth-child(4) {
    animation-delay: 0.4s;
  }

  &:hover {
    border-color: #ff7710;
    transform: translateY(-10px);
    background-color: rgba(40, 40, 40, 0.8);

    h2 {
      color: #ff7710;
    }
  }
`;

export const PartTitle = styled.h2`
  font-family: "SUITE", sans-serif;
  font-size: 2rem;
  font-weight: 800;
  color: white;
  transition: 0.3s;
`;

export const PartDesc = styled.p`
  font-size: 1rem;
  color: #ccc;
  line-height: 1.6;
  min-height: 50px;
  margin: 10px 0px;
`;

export const TechStackBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TechBadge = styled.span`
  background-color: rgba(255, 255, 255, 0.1);
  color: #ddd;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

// 추천 대상 박스
export const RecommendBox = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 15px;
  margin-top: auto;
`;

export const RecommendTitle = styled.h4`
  color: #ff7710;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const RecommendList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    font-size: 0.9rem;
    color: #bbb;
    margin-bottom: 5px;
    position: relative;
    padding-left: 15px;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #666;
    }
  }
`;

// 여기서부터 파트별 세부 커리큘럼 섹션
export const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

export const TabButton = styled.button`
  background: ${(props) =>
    props.$active ? "#ff7710" : "rgba(255, 255, 255, 0.05)"};
  color: ${(props) => (props.$active ? "#fff" : "#aaa")};
  border: 1px solid
    ${(props) => (props.$active ? "#ff7710" : "rgba(255, 255, 255, 0.1)")};
  padding: 12px 24px;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: "SUITE", sans-serif;

  &:hover {
    background: ${(props) =>
      props.$active ? "#ff7710" : "rgba(255, 255, 255, 0.1)"};
    transform: translateY(-2px);
  }
`;

export const TrackContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const StepCard = styled.div`
  background: rgba(20, 20, 20, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  text-align: left;
  transition: 0.3s;

  &:hover {
    border-color: #ff7710;
    transform: translateY(-5px);
  }
`;

export const StepNumber = styled.div`
  color: #ff7710;
  font-size: 0.9rem;
  font-weight: 800;
  margin-bottom: 10px;
  letter-spacing: 1px;
`;

export const StepTitle = styled.h3`
  color: white;
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const StepList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    color: #ccc;
    font-size: 0.95rem;
    margin-bottom: 8px;
    position: relative;
    padding-left: 15px;

    &::before {
      content: "•";
      color: #ff7710;
      position: absolute;
      left: 0;
    }
  }
`;
