import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  HeaderContainer,
  LogoBox,
  HeaderIcon,
  HeaderText,
  PcNavGroup,
  NavItem,
  ApplyButton,
  MobileMenu,
  MobileNavItem,
  HamburgerBtn,
} from "../styles/header.styles";

function Header() {
  const { pathname } = useLocation(); // 현재 내가 어느 페이지에 있는지 확인
  const [isOpen, setIsOpen] = useState(false); // 메뉴 열림 상태 관리

  // 페이지 이동하면 모바일 메뉴 자동으로 닫기
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // 메뉴 열렸을 때 스크롤 막기
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <HeaderContainer>
      <LogoBox to="/">
        <HeaderIcon src="/assets/icon.png" alt="icon" />
        <HeaderText>LIKELION INU</HeaderText>
      </LogoBox>

      {/* PC 메뉴 */}
      <PcNavGroup>
        <NavItem to="/about" $active={pathname === "/about"}>
          ABOUT
        </NavItem>
        <NavItem to="/curriculum" $active={pathname === "/curriculum"}>
          CURRICULUM
        </NavItem>
        <NavItem to="/tracks" $active={pathname === "/tracks"}>
          TRACKS
        </NavItem>
        <NavItem to="/faq" $active={pathname === "/faq"}>
          FAQ
        </NavItem>
        <ApplyButton to="/apply">APPLY</ApplyButton>
      </PcNavGroup>

      {/* 모바일 햄버거 버튼 */}
      <HamburgerBtn onClick={() => setIsOpen(!isOpen)} $isOpen={isOpen}>
        <span />
        <span />
        <span />
      </HamburgerBtn>

      {/* 모바일 메뉴 오버레이 */}
      <MobileMenu $isOpen={isOpen}>
        <MobileNavItem to="/about" $active={pathname === "/about"}>
          ABOUT
        </MobileNavItem>
        <MobileNavItem to="/curriculum" $active={pathname === "/curriculum"}>
          CURRICULUM
        </MobileNavItem>
        <MobileNavItem to="/tracks" $active={pathname === "/tracks"}>
          TRACKS
        </MobileNavItem>
        <MobileNavItem to="/faq" $active={pathname === "/faq"}>
          FAQ
        </MobileNavItem>

        {/* 지원하기 버튼 */}
        <ApplyButton
          to="/apply"
          style={{ fontSize: "1.2rem", padding: "15px 40px" }}
        >
          지원하기
        </ApplyButton>
      </MobileMenu>
    </HeaderContainer>
  );
}

export default Header;
