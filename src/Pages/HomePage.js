import React from "react";
import styled from "styled-components";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import Particle from "../Components/Particle";
import Typing from "react-typing-animation";

function HomePage() {
  const AnimatedTypingComponent = () => (
    <Typing loop={true} speed={1}>
      <span>je m'appelle Paul-Adrien</span>
      <Typing.Delay ms={3000} />
      <Typing.Backspace count={30} />
      <Typing.Reset count={1} delay={2000} />
      <span>je suis développeur web junior</span>
      <Typing.Delay ms={3000} />
      <Typing.Backspace count={30} />
      <Typing.Reset count={1} delay={2000} />
      <span>je recherche une alternance</span>
      <Typing.Delay ms={3000} />
      <Typing.Backspace count={30} />
      <Typing.Reset count={1} delay={2000} />
    </Typing>
  );
  return (
    <HomePageStyled>
      <div className="particle-con">
        <Particle />
      </div>
      <div className="typography">
        <h1 className="title">Bonjour</h1>
        <div>
          <AnimatedTypingComponent />
        </div>
        <br />
        <p>
          Actuellement titulaire du diplôme de développeur web chez
          OpenClassrooms, je suis à la recherche d'une alternance afin de
          poursuivre mes études dans le domaine du développement web. Vous
          trouverez sur ce site mes informations personnelles et
          professionnelles, ainsi que la possibilité de télécharger directement
          un Cv au format pdf, bonne visite à vous.
        </p>
        <div className="icons">
          <a
            href="https://github.com/Paul-AdrienHatton?tab=repositories"
            className="icon i-github"
            aria-label="Mon repository github"
          >
            <GithubIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/paul-adrien-hatton-351887136/"
            className="icon i-linkedIn"
            aria-label="Mon profil LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://www.instagram.com/pauladrienhatton/"
            className="icon i-instagram"
            aria-label="Mon profil Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
      </div>
    </HomePageStyled>
  );
}

const HomePageStyled = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  .styles_typicalWrapper__1_Uvh {
    color: var(--primary-color);
    font-size: 3rem;
    font-family: "Nunito", sans-serif;
  }
  .typography {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    width: 80%;
    span {
      font-size: 30px;
      color: var(--primary-color);
    }
    .icons {
      display: flex;
      justify-content: center;
      margin-top: 1rem;
      .icon {
        border: 2px solid var(--border-color);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        box-shadow: var(--box-shadow);
        &:hover {
          border: 2px solid var(--primary-color);
          color: var(--primary-color);
          transform: translateY(1px);
        }
        &:not(:last-child) {
          margin-right: 1rem;
        }
        svg {
          margin: 0.5rem;
        }
      }
      .i-github {
        &:hover {
          border: 2px solid #5f4687;
          color: #5f4687;
        }
      }
      .i-instagram {
        &:hover {
          border: 2px solid #da1b60;
          color: #da1b60;
        }
      }
    }
  }
  .icon:hover::after,
  .infobulle:focus::after {
    content: attr(aria-label);
    position: absolute;
    bottom: -2.4em;
    left: 50%;
    transform: translateX(-50%);
    z-index: 1;
    white-space: nowrap;
  }
  @media screen and (max-width: 768px) {
    .title {
      font-size: 2.5rem;
    }
    .styles_typicalWrapper__1_Uvh {
      font-size: 1rem;
    }
  }
  @media screen and (max-width: 450px) {
    h1 {
      margin-top: 200px;
    }
    .typography {
      span {
        font-size: 20px;
      }
  }
`;

export default HomePage;
