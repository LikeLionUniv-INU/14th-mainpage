import styled from "styled-components";
import { Link } from "react-router-dom";

// 헤더
export const HeaderContainer = styled.header`
  width: 100%;
  padding: 0 40px;
  height: 95px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  background-color: rgba(5, 5, 5, 0.7);
  backdrop-filter: blur(10px);
  z-index: 100;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    padding: 0 20px;
    height: 70px;
  }
`;

// 헤더 박스 (아이콘, 텍스트 묶음)
export const LogoBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
  }
`;

// 헤더 아이콘
export const HeaderIcon = styled.img`
  height: 40px;
  width: auto;

  @media (max-width: 768px) {
    height: 36px;
  }
`;

// 네비게이션 그룹 (PC)
export const PcNavGroup = styled.nav`
  display: flex;
  align-items: center;
  gap: 30px;

  @media (max-width: 768px) {
    display: none; /* 모바일에서는 햄버거 메뉴가 필요하지만 일단 숨김 */
  }
`;

// 메뉴 아이템
export const NavItem = styled(Link)`
  font-size: 0.9rem;
  font-weight: 600;
  color: ${(props) =>
    props.$active ? "#ff7710" : "#b0b0b0"}; /* 현재 페이지면 주황색 */
  transition: 0.3s;
  position: relative;

  &:hover {
    color: white;
  }

  // 활성화되었을 때 밑줄 효과
  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => (props.$active ? "100%" : "0")};
    height: 2px;
    background-color: #ff7710;
    transition: width 0.3s;
  }
`;

// 지원하기 버튼
export const ApplyButton = styled(Link)`
  padding: 8px 20px;
  background-color: #ff7710;
  color: white;
  font-size: 0.9rem;
  font-weight: bold;
  border-radius: 20px;
  transition: 0.3s;
  text-align: center;

  &:hover {
    background-color: #ff9944;
    transform: translateY(-2px);
  }
`;

// 헤더 텍스트
export const HeaderText = styled.h1`
  font-size: 20px;
  font-weight: 800;
  color: white;
`;

// ------------------- 모바일 전용 스타일 -------------------

// 햄버거 아이콘 (작대기 3개)
export const HamburgerBtn = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;
  z-index: 1001;

  @media (max-width: 768px) {
    display: flex;
  }

  span {
    display: block;
    width: 25px;
    height: 3px;
    background-color: white;
    border-radius: 3px;
    transition: all 0.3s ease-in-out;
  }

  // 햄버거가 X로 변신하는 애니메이션
  ${(props) =>
    props.$isOpen &&
    `
    span:nth-child(1) { transform: translateY(8px) rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }
  `}
`;

// 모바일 메뉴 박스
export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(5, 5, 5, 0.98);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  transform: ${(props) =>
    props.$isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
`;

export const MobileNavItem = styled(Link)`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${(props) => (props.$active ? "#ff7710" : "white")};
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #ff7710;
  }
`;
