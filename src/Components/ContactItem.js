import React from "react";
import styled from "styled-components";

function ContactItem({ title, icon, cont1, cont2 }) {
  return (
    <ContactItemStyled>
      <div className="left-content">{icon}</div>
      <div className="right-content">
        <h6>{title}</h6>
        <p>{cont1}</p>
        <p>{cont2}</p>
      </div>
    </ContactItemStyled>
  );
}

const ContactItemStyled = styled.div`
  padding: 1.5rem 2rem;
  background-color: var(--background-light-color);
  border-radius: 5px;
  display: flex;
  align-items: center;
  transition: all 0.4s ease-in-out;
  box-shadow: var(--box-shadow);
  &:hover {
    transform: translateY(2px);
  }
  &:not(:last-child) {
    margin-bottom: 2.5rem;
  }
  .left-content {
    padding: 1.5rem;
    border-radius: 5px;
    border: 0px solid var(--border-color);
    box-shadow: var(--inset-box-shadow);
    font-size: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.5rem;
    svg {
      font-size: 2.3rem;
    }
  }

  .right-content {
    h6 {
      color: var(--white-color);
      font-size: 1.2rem;
      padding-bottom: 0.6rem;
    }
    p {
      padding: 0.1rem 0;
      font-size: 12px;
    }
  }
`;

export default ContactItem;
