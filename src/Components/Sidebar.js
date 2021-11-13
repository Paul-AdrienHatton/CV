import React from "react";
import styled from "styled-components";
import Navigation from "./Navigation";

function Sidebar({ navToggle }) {
  return (
    <SidebarStyled className={`${navToggle ? "nav-toggle" : navToggle}`}>
      <Navigation />
    </SidebarStyled>
  );
}

const SidebarStyled = styled.div`
  width: 16.3rem;
  position: fixed;
  height: 95%;
  border-radius: 10px;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  border-left: 1px solid rgba(255, 255, 255, 0.3);
  margin: 0;
  backdrop-filter: blur(3px);
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.4s ease-in-out;
  z-index: 20;

  @media screen and (max-width: 4000px) {
    margin: 10px 0 0px 10px;
    transform: translateX(-120%);
    z-index: 20;
  }
  @media screen and (max-width: 500px) {
    width: 13rem;
  }
`;

export default Sidebar;
