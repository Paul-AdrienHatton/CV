import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ContactItem from "../Components/ContactItem";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function ContactPage() {
  const phone = <PhoneIcon />;
  const email = <EmailIcon />;
  const location = <LocationOnIcon />;
  const linkedin = <LinkedInIcon />;
  return (
    <MainLayout>
      <ContactPageStyled>
        <TitleStyled>
          <Title title={"Contact"} span={"Contact"} />
        </TitleStyled>
        <SectionStyled>
          <InnerLayout className={"contact-section"}>
            <div className="left-content">
              <div className="contact-title">
                <h4>Prendre contact</h4>
              </div>
              <p>Vous pouvez me joindre aux coordonnées suivantes :</p>
              <br />
              <p>Ou me contacter directement sur mon profil linkedIn </p>
              <br />
              <div className="linkedin">
                <ContactItem
                  title={""}
                  icon={linkedin}
                  cont2={
                    <a
                      href="https://www.linkedin.com/in/paul-adrien-hatton-351887136/"
                      className="icon i-linkedIn"
                      aria-label="Mon profil LinkedIn"
                    >
                      Mon profil LinkedIn
                    </a>
                  }
                />
              </div>
            </div>
            <div className="right-content">
              <ContactItem
                title={"Téléphone"}
                icon={phone}
                cont1={"07.81.13.46.41"}
              />
              <ContactItem
                title={"Email"}
                icon={email}
                cont2={"hattonpauladrien@gmail.com"}
              />
              <ContactItem
                title={"Localisation"}
                icon={location}
                cont2={"Strasbourg, 67000"}
              />
            </div>
          </InnerLayout>
        </SectionStyled>
      </ContactPageStyled>
    </MainLayout>
  );
}

const ContactPageStyled = styled.section`
  .contact-section {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    @media screen and (max-width: 978px) {
      grid-template-columns: repeat(1, 1fr);
      .f-button {
        margin-bottom: 3rem;
      }
    }
    .linkedin {
      text-align: center;
      margin-top: 0.5rem;
      margin-bottom: 3rem;
    }
    .icon:hover {
      color: var(--primary-color);
    }
    .right-content {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
    }
    .contact-title {
      h4 {
        color: var(--white-color);
        padding: 1rem 0;
        font-size: 1.8rem;
      }
    }
  }
`;
const TitleStyled = styled.section`
  animation: slide-bottom 1.6s ease-in-out both;
  @keyframes slide-bottom {
    0% {
      transform: translateY(-300px);
    }
    100% {
      transform: translateY(0);
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

export default ContactPage;
