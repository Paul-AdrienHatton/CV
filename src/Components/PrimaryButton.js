import React from "react";
import styled from "styled-components";

function PrimaryButton({ title }) {
  return <PrimaryButtonStyled>{title}</PrimaryButtonStyled>;
}

const PrimaryButtonStyled = styled.a`
  background-color: var(--background-light-color);
  padding: 0.8rem 2.5rem;
  color: var(--white-color);
  cursor: pointer;
  display: inline-block;
  font-size: inherit;
  text-transform: uppercase;
  position: relative;
  transition: all 0.4s ease-in-out;
  box-shadow: var(--box-shadow);
  border-radius: 10px;
  &:hover {
    transform: translateY(2px);
    background-color: var(--btn-hover);
  }
`;
export default PrimaryButton;
