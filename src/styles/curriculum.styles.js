import styled, { keyframes } from "styled-components";

// 애니메이션
const slideUp = keyframes`
  from { opacity: 0; transform: translateY(30px); }
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

  background-image:
    linear-gradient(rgba(255, 119, 16, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 119, 16, 0.1) 1px, transparent 1px);
  background-size: 50px 50px;
`;

export const TitleSection = styled.div`
  text-align: center;
  margin-bottom: 70px;
  animation: ${slideUp} 0.8s ease-out;
`;

export const MainTitle = styled.h1`
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

export const SubDesc = styled.p`
  font-family: "Pretendard", sans-serif;
  font-size: 1.2rem;
  color: #ccc;
  line-height: 1.6;
`;

// 타임라인 전체 박스
export const TimelineWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px 0;

  // 가운데 수직선
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    background-color: #333;
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -1px;
  }

  // 모바일: 선을 왼쪽으로 옮김
  @media (max-width: 768px) {
    &::after {
      left: 20px;
    }
  }
`;

// 각 컨텐츠 카드
export const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
  animation: ${slideUp} 0.8s ease-out;
  animation-fill-mode: both;

  // 짝수/홀수 번째 애니메이션 딜레이
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
  &:nth-child(5) {
    animation-delay: 0.5s;
  }

  // 왼쪽 배치
  left: 0;
  text-align: right;

  // 오른쪽 배치
  &:nth-child(even) {
    left: 50%;
    text-align: left;
  }

  // 중앙 원
  &::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 20px;
    right: -10px;
    background-color: #111;
    border: 3px solid #ff7710;
    top: 25px;
    border-radius: 50%;
    z-index: 1;
  }

  // 오른쪽 배치일 때 위치 수정
  &:nth-child(even)::after {
    left: -10px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 50px;
    padding-right: 20px;
    text-align: left; // 모바일은 무조건 왼쪽 정렬
    left: 0 !important; // 지그재그 해제

    // 모바일 원 위치 통일
    &::after {
      left: 11px !important;
    }

    &:nth-child(even) {
      left: 0;
    }
  }
`;

export const ContentCard = styled.div`
  padding: 20px;
  background-color: rgba(30, 30, 30, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  position: relative;
  transition: 0.3s;

  &:hover {
    background-color: rgba(40, 40, 40, 0.8);
    border-color: #ff7710;
    transform: translateY(-5px);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover; // 비율 유지하면서 꽉 채우기
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

export const DateBadge = styled.span`
  display: inline-block;
  background-color: #ff7710;
  color: white;
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: bold;
  margin: 15px 0px;
  box-shadow: 0 4px 10px rgba(255, 119, 16, 0.3);
`;

export const EventTitle = styled.h2`
  font-family: "SUITE", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;
`;

export const EventDesc = styled.p`
  font-size: 0.95rem;
  color: #aaa;
  line-height: 1.6;

  word-break: keep-all;
  white-space: pre-line;
`;
