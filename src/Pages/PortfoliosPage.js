import React, { useState } from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import portfolios from "../data/portfolios";
import Menu from "../Components/Menu";
import Button from "../Components/Button";
import styled from "styled-components";

const allButtons = ["All", ...new Set(portfolios.map((item) => item.category))];

function PortfoliosPage() {
  const [menuItem, setMenuItems] = useState(portfolios);
  const [button] = useState(allButtons);

  const filter = (button) => {
    if (button === "All") {
      setMenuItems(portfolios);
      return;
    }

    const filteredData = portfolios.filter((item) => item.category === button);
    setMenuItems(filteredData);
  };
  return (
    <MainLayout>
      <TitleStyled>
        <Title title={"Portfolios"} span={"portfolios"} />
      </TitleStyled>
      <SectionStyled>
        <InnerLayout>
          <Button filter={filter} button={button} />
          <Menu menuItem={menuItem} />
        </InnerLayout>
      </SectionStyled>
    </MainLayout>
  );
}
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
export default PortfoliosPage;
