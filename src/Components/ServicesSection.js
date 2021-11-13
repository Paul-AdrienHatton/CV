import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import ServiceCard from "../Components/ServiceCard";
import design from "../img/design.svg";
import frontend from "../img/frontend.svg";
import backend from "../img/backend.svg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <div className="services">
          <ServiceCard
            image={design}
            title={"Intégrateur Web"}
            paragraph={
              "Développement avec les langages de base HTML et CSS, en respectant les normes WCAG."
            }
          />
          <div className="mid-card">
            <ServiceCard
              image={frontend}
              title={"Frontend"}
              paragraph={
                "Développement de site côté frontend avec l'utilisation du language et des différents frameworks JavaScript."
              }
            />
          </div>
          <ServiceCard
            image={backend}
            title={"Backend"}
            paragraph={
              "Développement de site côté backend avec Node.js, notion de SQL et MongoDB pour les Bases de données."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default ServicesSection;
