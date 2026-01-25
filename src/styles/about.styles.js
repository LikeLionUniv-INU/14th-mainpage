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
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #050505;
  color: white;

  /* 배경 그리드 (메인페이지와 통일) */
  background-image:
    linear-gradient(rgba(255, 119, 16, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 119, 16, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
`;

export const SloganSection = styled.div`
  text-align: center;
  margin-bottom: 80px;
  animation: ${fadeIn} 1s ease-out;
`;

export const SloganTitle = styled.h1`
  font-family: "SUITE", sans-serif;
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 20px;
  background: linear-gradient(to right, #ffffff, #ff7710);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const SloganDesc = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.6;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 20px;
  }
`;

// 카드 섹션
export const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  width: 100%;
  max-width: 1000px;
  margin-bottom: 100px;
  animation: ${fadeIn} 1s ease-out 0.3s backwards;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

export const ValueCard = styled.div`
  background: rgba(20, 20, 20, 0.8);
  border: 1px solid #333;
  padding: 40px 30px;
  border-radius: 20px;
  text-align: center;
  transition: 0.3s;

  &:hover {
    border-color: #ff7710;
    transform: translateY(-10px);
    background: rgba(30, 30, 30, 0.9);
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: white;
  }

  p {
    color: #888;
    line-height: 1.5;
    font-size: 0.95rem;
  }
`;

export const IconWrapper = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

// 공식 링크 섹션
export const BrandStoryCard = styled.a`
  width: 100%;
  max-width: 800px;
  background: linear-gradient(135deg, #1a1a1a 0%, #000000 100%);
  border: 1px solid #444;
  border-radius: 20px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  transition: 0.3s;
  animation: ${fadeIn} 1s ease-out 0.6s backwards;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #ff7710;
    box-shadow: 0 0 30px rgba(255, 119, 16, 0.2);

    h2 {
      color: #ff7710;
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const BrandTitle = styled.h2`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  margin-bottom: 10px;
  transition: 0.3s;
  text-align: center;
`;

export const BrandDesc = styled.p`
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 30px;
  text-align: center;
`;

export const VisitButton = styled.span`
  padding: 12px 30px;
  background-color: white;
  color: black;
  font-weight: bold;
  border-radius: 30px;
  font-size: 1rem;
`;
