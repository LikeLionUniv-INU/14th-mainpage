import React from "react";
import {
  fadeIn,
  Container,
  SloganSection,
  SloganTitle,
  SloganDesc,
  ValueGrid,
  ValueCard,
  IconWrapper,
  BrandStoryCard,
  BrandTitle,
  BrandDesc,
  VisitButton,
} from "../styles/about.styles";

function About() {
  return (
    <Container>
      {/* 슬로건 섹션 */}
      <SloganSection>
        <SloganTitle>POSSIBILITY TO REALITY</SloganTitle>
        <SloganDesc>
          멋쟁이사자처럼 대학은 국내 최대 규모의 IT 창업 동아리입니다.
          <br />
          우리는 기술을 통해 아이디어를 실현하고, 세상을 변화시킵니다.
        </SloganDesc>
      </SloganSection>

      {/* 카드 섹션 */}
      <ValueGrid>
        <ValueCard>
          <IconWrapper>💻</IconWrapper>
          <h3>실전형 코딩 교육</h3>
          <p>
            비전공자도 가능!
            <br />
            내 아이디어를 웹 서비스로
            <br />
            직접 구현할 수 있는 기술을 배워요.
          </p>
        </ValueCard>

        <ValueCard>
          <IconWrapper>🤝</IconWrapper>
          <h3>네트워킹 & 협업</h3>
          <p>
            전국 80여 개 대학,
            <br />
            2천 명 이상의 아기사자들과 함께
            <br />
            교류하며 성장해요.
          </p>
        </ValueCard>

        <ValueCard>
          <IconWrapper>🔥</IconWrapper>
          <h3>아이디어톤 & 해커톤</h3>
          <p>
            몰입하는 즐거움.
            <br />
            대학 최대 규모 해커톤을 통해
            <br />팀 프로젝트의 정수를 경험해요.
          </p>
        </ValueCard>
      </ValueGrid>

      {/* 공식 홈페이지 링크 */}
      <BrandStoryCard href="https://likelion.university/" target="_blank">
        <BrandTitle>LIKELION UNIV. Official Brand Story</BrandTitle>
        <BrandDesc>
          멋쟁이사자처럼 대학이 걸어온 길과 철학이 궁금하신가요?
          <br />
          공식 홈페이지에서 더 자세한 이야기를 확인해보세요.
        </BrandDesc>
        <VisitButton>공식 홈페이지 바로가기 ↗</VisitButton>
      </BrandStoryCard>
    </Container>
  );
}

export default About;
