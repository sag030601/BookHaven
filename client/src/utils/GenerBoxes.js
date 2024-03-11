import React from "react";
import styled from "styled-components";
import { colors } from "../components/Colors";

function GenerBoxes({ title, imageUrl ,onclick,isActive }) {
    const handleClick = ()=>{
        onclick()
    }
  return (
    <Box onClick={handleClick} isActive={isActive} >
      <h1>{title}</h1>
      <img src={imageUrl} alt="box img" />
    </Box>
  );
}

const Box = styled.div`
  height: 50%;
  width: 70%;
  border-radius: 1rem;
  background-color: ${colors.tertiary};
  overflow-x: hidden;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;

  & h1{
    font-size: 1.2vw;
    font-weight: bolder;
    text-align: center;
  }

  & img {
    background: transparent;
    margin: 0 auto;
  }
`;

export default GenerBoxes;
