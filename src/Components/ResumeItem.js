import React from "react";
import styled from "styled-components";

function ResumeItem({ year, title, subTitle, text }) {
  return (
    <ResumeItemStyled>
      <div className="left-content">
        <p>{year}</p>
      </div>
      <div className="right-content">
        <h5>{title}</h5>
        <h6>{subTitle}</h6>
        <p>{text}</p>
      </div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  display: flex;
  @media screen and (max-width: 421px) {
    p,
    h5,
    h6 {
      font-size: 80%;
    }
  }
  &:not(:last-child) {
    padding-bottom: 3rem;
  }
  .left-content {
    width: 50%;
    padding-left: 20px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      left: -8px;
      top: 5px;
      height: 10px;
      width: 10px;
      border-radius: 50%;
      border: 2px solid transparent;
      background-color: var(--background-dark-color);
      box-shadow: var(--box-shadow);
    }
    p {
      display: inline-block;
    }
  }
  .right-content {
    position: relative;
    width: 150%;
    h5 {
      color: var(--primary-color);
      font-size: 2rem;
      padding-bottom: 0.4rem;
    }
    h6 {
      padding-bottom: 0.6rem;
      font-size: 1.5rem;
    }
  }
`;
export default ResumeItem;
