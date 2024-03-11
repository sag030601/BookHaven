import React from "react";
import styled from "styled-components";
// import TabsContent from "./TabContent";
import { colors } from "../components/Colors";

function Tabs({ title, defaultTitle = "default", isActive, onClick }) {
  const backgroundColor = isActive ? "#525252" : "Black";
  const textColor = isActive ? "white" : "white";

  return (
    <Conatiner onClick={onClick} backgroundColor={backgroundColor} textColor={textColor}  >
      <StyledH1>{defaultTitle}</StyledH1>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ textColor }) => textColor};
  border: 1px solid;
  width: 8%;
  text-align: center;
  border-radius: 15px;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledH1 = styled.h1`
  font-size: 0.8vw;
`;

export default Tabs;
