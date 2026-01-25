import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

// 애니메이션
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
`;
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// 전체 컨테이너 (배경, 중앙 정렬)
export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 50px;

  // 배경 및 격자
  background-color: #050505;
  background-image:
    linear-gradient(rgba(255, 119, 16, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 119, 16, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
`;

// 히어로 영역 (메인 로고, 슬로건)
export const HeroSection = styled.section`
  min-height: 60vh;
  display: flex;
  flex-direction: row; // 좌: 로고, 우: 슬로건
  justify-content: center;
  align-items: center;
  gap: 80px;
  padding: 0 50px;
  position: relative;

  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 10px;
    padding-top: 50px;
    min-height: auto;
  }
`;

// 메인 로고 이미지
export const HeroLogo = styled.img`
  width: 300px;
  height: auto;
  object-fit: contain;
  animation: ${float} 5s ease-in-out infinite;

  filter: drop-shadow(0 0 20px rgba(255, 119, 16, 0.3));

  @media (max-width: 768px) {
    width: 80%;
    max-width: 250px;
  }
`;

// 슬로건 이미지
export const TitleImage = styled.div`
  width: 360px;
  max-width: 1000px;
  height: auto;
  margin-bottom: 20px;
  object-fit: contain;

  // 크기, 색상 설정
  aspect-ratio: 2 / 1;
  background: linear-gradient(to right, #ffffff, #0066ff);
  -webkit-mask-image: url("/assets/slogan.png");
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-size: contain;
  -webkit-mask-position: center;
  mask-image: url("/assets/slogan.png");
  mask-repeat: no-repeat;
  mask-size: contain;
  mask-position: center;

  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    width: 90%;
    margin: 0 auto 20px auto;
  }
`;

export const RecruitCard = styled.div`
  width: 90%;
  max-width: 1000px;
  background-color: rgba(30, 30, 30, 0.8);
  border: 1px solid #ff7710;
  border-radius: 20px;
  padding: 40px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;

  animation: fadeIn 1s ease-out;

  @media (max-width: 900px) {
    width: 90%;
    flex-direction: column;
    gap: 30px;
    text-align: center;
    padding: 30px 20px;
  }
`;

export const DDayText = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  color: #ff7710;
  margin: 5px 0px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const RecruitText = styled.p`
  font-size: 1.1rem;
  color: white;
  font-weight: bold;
`;

export const NotifyButton = styled.a`
  background-color: #ff7710;
  color: white;
  padding: 12px 25px;
  border-radius: 30px;
  font-weight: bold;
  text-decoration: none;
  transition: 0.3s;
  box-shadow: 0 4px 15px rgba(255, 119, 16, 0.3);

  &:hover {
    background-color: white;
    color: #ff7710;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 80%;
    display: block;
  }
`;

// 소개글 영역
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

// 소개글 텍스트
export const SubText = styled.p`
  font-size: 1.3rem;
  color: #888;

  @media (max-width: 768px) {
    font-size: 1rem;
    br {
      display: none;
    }
  }
`;

// 카드 메뉴 영역
export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  width: 90%;
  max-width: 1000px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

// 각 항목 카드들
export const MenuCard = styled(Link)`
  background-color: #111;
  padding: 40px;
  border-radius: 20px;
  text-decoration: none;
  border: 1px solid #333;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;

  &:hover {
    background-color: #ff7710;
    transform: translateY(-10px);
    border-color: #ff7710;
  }

  &:hover h2,
  &:hover p {
    color: black;
  }
`;

// 카드 제목
export const CardTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
`;

// 카드 설명
export const CardDesc = styled.p`
  font-size: 1rem;
  color: #888;
`;

// 화살표
export const Arrow = styled.div`
  align-self: flex-end;
  font-size: 2rem;
  color: white;
`;
