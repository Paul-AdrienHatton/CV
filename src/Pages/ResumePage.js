import React from "react";
import Skills from "../Components/Skills";
import { MainLayout } from "../styles/Layouts";
import Resume from "../Components/Resume";
import styled from "styled-components";
import Title from "../Components/Title";

function ResumePage() {
  return (
    <MainLayout>
      <TitleStyled>
        <Title title={"Mes compétences"} span={"Mes compétences"} />
      </TitleStyled>
      <SectionStyled>
        <Skills />
      </SectionStyled>
      <SecondTitleStyled>
        <Title title={"Résumé"} span={"resume"} />
      </SecondTitleStyled>
      <SectionStyled>
        <Resume />
      </SectionStyled>
    </MainLayout>
  );
}
const TitleStyled = styled.section`
  animation: slide-bottom 1.6s ease-in-out both;
  @keyframes slide-bottom {
    0% {
      transform: translateY(-300px);
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const SecondTitleStyled = styled.section`
  animation: slide-bottom 1.6s ease-in-out both;
  @keyframes slide-bottom {
    0% {
      transform: translateY(-300px);
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;
const SectionStyled = styled.section`
    animation: slide-right 1.6s ease-in-out both;
    @keyframes slide-right {
      0% {
        transform: translateY(100%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
`;
export default ResumePage;
