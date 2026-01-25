import { React, useState, useEffect } from "react";
import {
  Container,
  HeroSection,
  HeroLogo,
  TextContainer,
  TitleImage,
  SubText,
  RecruitCard,
  DDayText,
  RecruitText,
  NotifyButton,
  MenuGrid,
  MenuCard,
  CardTitle,
  CardDesc,
  Arrow,
} from "../styles/mainpage.styles";

function MainPage() {
  // 디데이 계산 로직
  const [dDay, setDDay] = useState("");
  useEffect(() => {
    const targetDate = new Date("2026-02-16"); // 모집 시작 날짜
    const today = new Date();
    const timeDiff = targetDate - today; // 시간차 계산 (밀리초 단위)
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); // 일 단위 변환

    if (daysDiff > 0) {
      setDDay(`D-${daysDiff}`);
    } else if (daysDiff === 0) {
      setDDay("D-Day");
    } else {
      setDDay("RECRUITING"); // 날짜 지났을 때
    }
  }, []);

  return (
    <Container>
      {/* 슬로건 섹션 */}
      <HeroSection>
        <HeroLogo src="assets/likelion_inu_logo.png" alt="INU Logo" />
        <TextContainer>
          <TitleImage />
          <SubText>
            멋쟁이사자처럼 인천대학교에서 <br />
            여러분의 아이디어를 현실로 만들어보세요.
          </SubText>
        </TextContainer>
      </HeroSection>

      {/* 모집 안내 섹션 */}
      <RecruitCard>
        <div>
          <RecruitText>14기 아기사자 모집 시작까지</RecruitText>
          <DDayText>{dDay}</DDayText>
          <RecruitText>2026.02.16(월) ~ 2026.03.06(금)</RecruitText>
        </div>
        <NotifyButton href="https://forms.google.com/..." target="_blank">
          알림 신청하기 🔔
        </NotifyButton>
      </RecruitCard>

      {/* 메뉴 섹션 */}
      <MenuGrid>
        <MenuCard to="/about">
          <div>
            <CardTitle>ABOUT</CardTitle>
            <CardDesc>🦁 멋쟁이사자처럼 대학에 대하여</CardDesc>
          </div>
          <Arrow>→</Arrow>
        </MenuCard>

        <MenuCard to="/curriculum">
          <div>
            <CardTitle>CURRICULUM</CardTitle>
            <CardDesc>🚀 1년 동안의 여정</CardDesc>
          </div>
          <Arrow>→</Arrow>
        </MenuCard>

        <MenuCard to="/tracks">
          <div>
            <CardTitle>TRACKS</CardTitle>
            <CardDesc>💻 배울 수 있는 기술 스택</CardDesc>
          </div>
          <Arrow>→</Arrow>
        </MenuCard>

        <MenuCard to="/faq">
          <div>
            <CardTitle>FAQ</CardTitle>
            <CardDesc>❓ 궁금한 점 물어보기</CardDesc>
          </div>
          <Arrow>→</Arrow>
        </MenuCard>
      </MenuGrid>
    </Container>
  );
}

export default MainPage;
