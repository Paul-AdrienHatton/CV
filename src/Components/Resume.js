import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import SmallTitle from "../Components/SmallTitle";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import SchoolIcon from "@material-ui/icons/School";
import ResumeItem from "../Components/ResumeItem";

function Resume() {
  const briefcase = <BusinessCenterIcon />;
  const school = <SchoolIcon />;
  return (
    <ResumeStyled>
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Expèrience de travail"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2020"}
            title={"Création d’un site web"}
            subTitle={"A.L. BAUR Vigneron Indépendant VOEGTLINSHOFFEN"}
            text={
              "Création d’un site web à titre indépendant pour l’entreprise de vente de vin. Création du site complet avec WIX, design du logo, référencement et mise à jour du site. "
            }
          />
          <ResumeItem
            year={"2019 - 2020"}
            title={"BARMAN"}
            subTitle={"Groupe SAS STRASRESTO"}
            text={
              "Barman dans plusieurs bars du groupe, responsable des réservations clients, gestion du stock et commande des marchandises. Entretien du bar et préparation des boissons chaudes et froides."
            }
          />
          <ResumeItem
            year={"2018 - 2019 "}
            title={"INTÉRIM "}
            subTitle={"Sofame le mans"}
            text={
              "Manutention, montage de mobilier industrielle suivie avec le bureau d’étude, emballage et gestion de l’expédition des commandes. "
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Dîplomes"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2021 - En cours"}
            title={"Formation chez OpenClassrooms"}
            subTitle={"Développeur web"}
            text={
              "Assembler les pages en HTML5 et CSS3 à partir de maquettes graphiques, respecter les normes d’accessibilité et de référencement du W3C, assurer la compatibilité avec les différents navigateurs du marché, mettre en place une communication entre client et serveur avec JavaScript, organiser et gérer la base de données."
            }
          />
          <ResumeItem
            year={"2017 - 2018"}
            title={"Ecofac Business School de Rennes"}
            subTitle={"Communication"}
            text={
              "Première année de BTS communication, apprentissage du marketing, de la Programmation Assisté par Ordinateur, différents projets organisés et suivis (Recherche de sponsor, phoning et mailing pour le projet et le client). Acquis de compétences en stratégie de communication et en stratégie commerciale. "
            }
          />
          <ResumeItem
            year={"2015 - 2016"}
            title={"Université du Mans"}
            subTitle={
              "Langues Littératures Civilisations Étrangères en Anglais"
            }
            text={
              "1ère année de LLCE (Langues Littératures Civilisations Étrangères) apprentissage de la culture et des langues anglophones. Revue de presse, études d'oeuvre anglophones. Expression et compréhension écrite et oral, traduction de texte de l'anglais vers le français et du français vers l'anglais. "
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;
export default Resume;
