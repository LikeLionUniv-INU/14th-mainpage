import React from "react";
import {
  Container,
  HeaderSection,
  Title,
  SubText,
  GridContainer,
  TrackCard,
  PartTitle,
  PartDesc,
  TechStackBox,
  TechBadge,
  RecommendBox,
  RecommendTitle,
  RecommendList,
} from "../styles/tracks.styles";

function Tracks() {
  const tracksData = [
    {
      part: "기획 | PM",
      desc: "서비스의 시작과 끝을 책임져요. 문제를 정의하고, 해결책을 설계하며, 팀이 나아갈 방향을 제시해요.",
      techs: ["#Figma", "#Notion", "#User Flow", "#Wireframe"],
      recommend: [
        "평소 '이런 서비스 있으면 좋겠다' 생각을 자주 하시는 분",
        "팀원들과 소통하며 의견을 조율하는 것을 좋아하시는 분",
        "논리적인 사고로 문제를 해결하고 싶으신 분",
      ],
    },
    {
      part: "디자인 | Design",
      desc: "UI/UX 경험을 설계하고 시각화해요. 사용자 중심의 인터페이스를 통해 서비스의 가치를 전달해요.",
      techs: ["#Figma", "#Wireframe", "#Prototyping", "#UI/UX"],
      recommend: [
        "사용자 입장에서 이용하기 편한 디자인을 고민하시는 분",
        "머릿속 아이디어를 시각적으로 표현하는 것을 좋아하시는 분",
        "디테일에 강하고 꼼꼼하신 분",
      ],
    },
    {
      part: "프론트엔드 | Frontend",
      desc: "사용자가 마주하는 화면을 개발해요. 디자이너의 시안을 웹 브라우저 위에서 살아숨쉬게 만들어요.",
      techs: ["#HTML/CSS", "#JavaScript", "#React", "#API"],
      recommend: [
        "내가 짠 코드가 화면에 바로바로 나타나는 것이 재밌으신 분",
        "사용자 인터랙션과 애니메이션 구현에 관심이 있으신 분",
        "디자인 감각과 논리적 사고를 동시에 키우고 싶으신 분",
      ],
    },
    {
      part: "백엔드 | Backend",
      desc: "보이지 않는 곳에서 데이터를 처리해요. 서버를 구축하고 API를 통해 서비스의 심장을 만들어요.",
      techs: ["#Java", "#Django", "#AWS", "#Database"],
      recommend: [
        "데이터가 어떻게 이동하고 저장되는지 원리가 궁금하신 분",
        "논리적인 로직을 짜고 시스템을 구축하는 데 흥미가 있으신 분",
        "안정적이고 효율적인 서버 구조를 고민해보고 싶으신 분",
      ],
    },
  ];

  return (
    <Container>
      <HeaderSection>
        <Title>
          4 <span>TRACKS</span>
        </Title>
        <SubText>
          멋쟁이사자처럼 인천대학교는 4가지 파트로 나누어 전문적인 학습을
          진행합니다.
          <br />
          나에게 맞는 파트를 선택하고 깊이 있게 성장해보세요.
        </SubText>
      </HeaderSection>

      {/* 각 파트 소개 섹션 */}
      <GridContainer>
        {tracksData.map((item, index) => (
          <TrackCard key={index}>
            <div>
              <PartTitle>{item.part}</PartTitle>
              <PartDesc>{item.desc}</PartDesc>

              <TechStackBox>
                {item.techs.map((tech, i) => (
                  <TechBadge key={i}>{tech}</TechBadge>
                ))}
              </TechStackBox>
            </div>

            <RecommendBox>
              <RecommendTitle>✅ 이런 분들께 추천해요</RecommendTitle>
              <RecommendList>
                {item.recommend.map((rec, i) => (
                  <li key={i}>{rec}</li>
                ))}
              </RecommendList>
            </RecommendBox>
          </TrackCard>
        ))}
      </GridContainer>
    </Container>
  );
}

export default Tracks;
