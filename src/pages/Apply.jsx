import React, { useState, useEffect } from "react";
import {
  Container,
  TitleSection,
  Title,
  SubText,
  ScheduleBox,
  ScheduleItem,
  StepBadge,
  StepTitle,
  StepDate,
  ButtonSection,
  ApplyBtn,
  WarningBox,
} from "../styles/apply.styles";

function Apply() {
  const [recruitState, setRecruitState] = useState("BEFORE"); // 지원 날짜 계산 (BEFORE, ING, END)

  useEffect(() => {
    const now = new Date();
    const start = new Date("2026-02-16T00:00:00"); // 모집 시작일
    const end = new Date("2026-03-06T16:00:00"); // 모집 마감일

    if (now < start) {
      setRecruitState("BEFORE");
    } else if (now >= start && now <= end) {
      setRecruitState("ING");
    } else {
      setRecruitState("END");
    }
  }, []);

  // 상태별 버튼 텍스트 & 링크 설정
  const getButtonConfig = () => {
    switch (recruitState) {
      case "BEFORE":
        return {
          text: "아직 모집 기간이 아니에요",
          link: "#",
          disabled: true,
        };
      case "ING":
        return {
          text: "14기 아기사자 지원하기 🚀",
          link: "https://forms.gle/zMQufHqMTpiw2M4s7", // 지원 구글폼 주소
          disabled: false,
        };
      case "END":
        return {
          text: "모집이 마감되었어요",
          link: "#",
          disabled: true,
        };
      default:
        return { text: "Loading...", link: "#", disabled: true };
    }
  };

  const btnConfig = getButtonConfig();

  return (
    <Container>
      <TitleSection>
        <Title>
          BE <span>LIKELION</span>
        </Title>
        <SubText>
          이제 여러분의 차례입니다.
          <br />
          멋쟁이사자처럼 인천대학교 14기 아기사자를 모집합니다.
        </SubText>
      </TitleSection>

      {/* 일정 타임라인 */}
      <ScheduleBox>
        <ScheduleItem>
          <StepBadge $active={recruitState === "ING"}>STEP 01</StepBadge>
          <StepTitle $active={recruitState === "ING"}>1차 서류 접수</StepTitle>
          <StepDate>2/16(월) ~ 3/6(금) 16:00</StepDate>
        </ScheduleItem>

        <ScheduleItem>
          <StepBadge>STEP 02</StepBadge>
          <StepTitle>1차 합격 발표</StepTitle>
          <StepDate>3/6(금)</StepDate>
        </ScheduleItem>

        <ScheduleItem>
          <StepBadge>STEP 03</StepBadge>
          <StepTitle>2차 면접</StepTitle>
          <StepDate>3/7(토) ~ 3/8(일)</StepDate>
        </ScheduleItem>

        <ScheduleItem>
          <StepBadge>STEP 04</StepBadge>
          <StepTitle>최종 합격 발표</StepTitle>
          <StepDate>3/8(일)</StepDate>
        </ScheduleItem>
      </ScheduleBox>

      {/* 지원하기 버튼 */}
      <ButtonSection>
        <ApplyBtn
          href={btnConfig.link}
          target={btnConfig.disabled ? "_self" : "_blank"} // 활성화되면 새창열기
          $disabled={btnConfig.disabled}
          onClick={(e) => btnConfig.disabled && e.preventDefault()} // 비활성일 때 클릭 막기
        >
          {btnConfig.text}
        </ApplyBtn>

        {/* 지원 주의사항 */}
        <WarningBox>
          <p>
            📢 <strong>주의사항</strong>
            <br />
            <br />
            - 구글폼은 임시 저장이 되지 않습니다. 다른 곳에 내용을 미리 작성한
            후 붙여넣는 것을 권장합니다.
            <br />- 제출 후에는 수정이 불가능하니 신중하게 작성해주세요.
            <br />- 지원 관련 문의는 인스타그램 @likelion_inu로 부탁드립니다.
          </p>
        </WarningBox>
      </ButtonSection>
    </Container>
  );
}

export default Apply;
