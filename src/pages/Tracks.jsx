import { React, useState } from "react";
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
  TabContainer,
  TabButton,
  TrackContainer,
  StepCard,
  StepNumber,
  StepTitle,
  StepList,
} from "../styles/tracks.styles";

function Tracks() {
  // 전체 트랙 설명
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
      techs: ["#Java", "#Django", "#Spring", "#Database"],
      recommend: [
        "데이터가 어떻게 이동하고 저장되는지 원리가 궁금하신 분",
        "논리적인 로직을 짜고 시스템을 구축하는 데 흥미가 있으신 분",
        "안정적이고 효율적인 서버 구조를 고민해보고 싶으신 분",
      ],
    },
  ];

  // 파트별 세부 커리큘럼 설명
  const [activeTab, setActiveTab] = useState("design");
  const trackData = {
    design: [
      {
        step: "STEP 01",
        title: "문제 정의와 사용자 이해",
        contents: [
          "IT 서비스 협업 구조의 이해",
          "Figma 입문 & 사용자 시나리오 제작",
          "IA (정보 구조) 설계 및 구조화",
        ],
      },
      {
        step: "STEP 02",
        title: "흐름 설계와 UI 구조화",
        contents: [
          "사용자 플로우 (User Flow) 설계",
          "컴포넌트 활용 & Auto Layout",
          "와이어프레임 제작",
          "1차 UX 테스트 및 피드백",
        ],
      },
      {
        step: "STEP 03",
        title: "명세화와 협업 프로세스",
        contents: [
          "기능 명세서 작성 및 구체화",
          "디자인 시스템 기초 구축",
          "High-Fi UI 디자인 & 2차 UX 테스트",
          "개발 핸드오프 및 협업 마무리",
        ],
      },
    ],
    frontend: [
      {
        step: "STEP 01",
        title: "웹 마크업과 스타일링",
        contents: [
          "HTML & CSS 핵심 문법",
          "CSS 레이아웃 & 반응형 설계",
          "JavaScript 기초 & DOM 조작",
          "비동기 처리(Async) & 데이터 흐름",
        ],
      },
      {
        step: "STEP 02",
        title: "React 핵심 개념",
        contents: [
          "React 시작하기 & 컴포넌트 사고",
          "상태(State) 관리와 Effect",
          "React Router와 동적 라우팅",
          "Styled-components 스타일링",
        ],
      },
      {
        step: "STEP 03",
        title: "서비스 구조 설계와 실전 연동",
        contents: [
          "TypeScript 기본 문법",
          "Supabase 연동 (BaaS)",
          "최종 서비스 구현 및 디버깅",
          "프로젝트 배포 및 최적화",
        ],
      },
    ],
    backend: [
      {
        step: "STEP 01",
        title: "Java Core & OOP",
        contents: [
          "Java 핵심 문법 이해",
          "객체지향 I (클래스와 캡슐화)",
          "객체지향 II (상속/다형성/추상화)",
          "Java Collections Framework",
        ],
      },
      {
        step: "STEP 02",
        title: "Spring Boot & API",
        contents: [
          "Spring의 핵심 (IoC/DI) 이해",
          "Spring Boot 환경 구축",
          "REST API 설계 및 CRUD 구현",
          "계층형 아키텍처(Layered Arch) 이해",
        ],
      },
      {
        step: "STEP 03",
        title: "JPA와 데이터베이스",
        contents: [
          "JPA 기초 & 영속성 컨텍스트",
          "Entity 매핑 및 연관관계 설정",
          "트랜잭션(Transaction) 관리",
          "최종 프로젝트 완성 및 배포",
        ],
      },
    ],
  };

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

      {/* 파트별 세부 커리큘럼 */}
      <HeaderSection style={{ marginBottom: "30px" }}>
        <Title>
          TRACK <span>CURRICULUM</span>
        </Title>
        <SubText>
          각 파트별 세부 커리큘럼을 소개합니다.
          <br />* 세부 내용은 스터디 일정에 따라 조정될 수 있어요.
        </SubText>
      </HeaderSection>

      <TabContainer>
        <TabButton
          $active={activeTab === "design"}
          onClick={() => setActiveTab("design")}
        >
          기획 | 디자인
        </TabButton>
        <TabButton
          $active={activeTab === "frontend"}
          onClick={() => setActiveTab("frontend")}
        >
          프론트엔드
        </TabButton>
        <TabButton
          $active={activeTab === "backend"}
          onClick={() => setActiveTab("backend")}
        >
          백엔드
        </TabButton>
      </TabContainer>

      <TrackContainer>
        {trackData[activeTab].map((item, index) => (
          <StepCard key={index}>
            <StepNumber>{item.step}</StepNumber>
            <StepTitle>{item.title}</StepTitle>
            <StepList>
              {item.contents.map((content, idx) => (
                <li key={idx}>{content}</li>
              ))}
            </StepList>
          </StepCard>
        ))}
      </TrackContainer>
    </Container>
  );
}

export default Tracks;
