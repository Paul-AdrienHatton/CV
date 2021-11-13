import React from "react";
import styled from "styled-components";
import resume from "../img/avatar.png";
import PrimaryButton from "./PrimaryButton";
import myPDF from "../files/cv.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          Je m'appelle <br />
          <span>Paul-Adrien</span>
        </h4>
        <p className="paragraph">
          En reconvertion professionnels et après une formation chez
          OpenClassrooms, je suis à la recherche d'une alternance afin de mettre
          en oeuvre mes acquis et établir une première expèrience professionnel
          en temps que développeur Web.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality </p>
            <p>Languages </p>
            <p>Location</p>
            <p>Recherche</p>
          </div>
          <div className="info">
            <p>: Paul-Adrien Hatton</p>
            <p>: 26</p>
            <p>: Française </p>
            <p>: Anglais, Français </p>
            <p>: Strasbourg, France</p>
            <p>: Alternance</p>
          </div>
        </div>

        <a href={myPDF} target="_blank" rel="noopener noreferrer" download>
          <i className="fas fa-download" />
          <PrimaryButton title={"Download Cv"} />
        </a>
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 65%;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: var(--box-shadow);
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 3rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
