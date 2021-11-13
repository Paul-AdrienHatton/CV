import React from "react";
import styled from "styled-components";
import ImageSection from "../Components/ImageSection";
import Title from "../Components/Title";
import { MainLayout } from "../styles/Layouts";
import ServicesSection from "../Components/ServicesSection";

function AboutPage() {
  return (
    <MainLayout>
      <TitleStyled>
        <Title title={"À propos"} span={"À propos"} />
      </TitleStyled>
      <SectionStyled>
        <ImageSection />
      </SectionStyled>
      <SecondTitleStyled>
        <Title title={"Services"} span={"services"} />
      </SecondTitleStyled>
      <SectionStyled>
        <ServicesSection />
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

export default AboutPage;
