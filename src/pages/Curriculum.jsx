import React from "react";
import {
  Container,
  TitleSection,
  MainTitle,
  SubDesc,
  TimelineWrapper,
  TimelineItem,
  ContentCard,
  DateBadge,
  EventTitle,
  EventDesc,
  CardImage,
} from "../styles/curriculum.styles";

function Curriculum() {
  const roadmapData = [
    {
      date: "2/16 - 3/6",
      title: "아기사자 모집 & 선발",
      desc: "서류 및 면접전형을 통해 14기 아기사자를 선발해요.\n열정 가득한 여러분을 기다리고 있어요.",
      image: "/assets/icon.png",
    },
    {
      date: "3월 - 6월",
      title: "1학기 정규 세션",
      desc: "파트별(기획/디자인/프론트엔드/백엔드)로 스터디를 진행하며\n웹 개발의 기초부터 심화까지 탄탄하게 다져요.\n* 파트별 세부 커리큘럼은 트랙 메뉴를 참고해 주세요.",
      image: "/assets/curriculum/study.png",
    },
    {
      date: "4월",
      title: "교내 축제 서비스 제작",
      desc: "교내 축제 부스를 운영해요. 작년에는 재학생 600명 이상이 이용한 키워드 소개팅 서비스를 만들었어요.",
      image: "/assets/curriculum/ting.png",
    },
    {
      date: "5월",
      title: "중앙 아이디어톤",
      desc: "전국 멋사대학 학생들끼리 창의적인 서비스 아이디어를 기획하고 발표하는 자리예요.",
      image: "/assets/curriculum/ideathon.jpg",
    },
    {
      date: "6월 - 7월",
      title: "MT",
      desc: "쉴 땐 확실히 쉬어야 하는 법, \n한 학기 동안 쌓인 스트레스를 풀고 모두가 하나로 뭉쳐요.",
      image: "/assets/curriculum/MT.png",
    },
    {
      date: "7월",
      title: "인천대 미니 해커톤",
      desc: "곧 다가올 해커톤에 대비해 교내에서 팀을 이뤄 연습해요.\n해커톤의 처음부터 끝까지 미리 경험해볼 수 있는 좋은 기회예요.",
      image: "/assets/curriculum/mini-hakathon.png",
    },
    {
      date: "7월 - 8월",
      title: "중앙 해커톤",
      desc: "멋사의 꽃! 전국 멋사대학 학생들이 한 장소에 모여 그동안 배운 기술로 실제 서비스를 구현하는 하이라이트 행사예요.",
      image: "/assets/curriculum/hakathon.png",
    },
    {
      date: "9월 - 12월",
      title: "권역별 연합 해커톤 & 자율 스터디",
      desc: "경기/인천 지역 연합 해커톤과 연계 프로젝트를 통해\n실전 경험을 쌓고 포트폴리오를 완성해요.",
      image: "/assets/curriculum/contest.png",
    },
  ];

  return (
    <Container>
      <TitleSection>
        <MainTitle>
          1 YEAR <span>ROADMAP</span>
        </MainTitle>
        <SubDesc>
          멋쟁이사자처럼 인천대학교의 1년 여정을 소개합니다.
          <br />
          몰입과 성장의 사이클을 함께하세요.
        </SubDesc>
      </TitleSection>

      {/* 로드맵 섹션 */}
      <TimelineWrapper>
        {roadmapData.map((item, index) => (
          <TimelineItem key={index}>
            <ContentCard>
              {item.image && <CardImage src={item.image} alt={item.title} />}
              <DateBadge>{item.date}</DateBadge>
              <EventTitle>{item.title}</EventTitle>
              <EventDesc>{item.desc}</EventDesc>
            </ContentCard>
          </TimelineItem>
        ))}
      </TimelineWrapper>
    </Container>
  );
}

export default Curriculum;
