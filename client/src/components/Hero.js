import React from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import heroRight from "../assets/hero/right.png";
import Color, { colors } from "./Colors";

function Hero() {
  return (
    <Conatiner>
      <Left>
        <LeftContent>
          <h1>Explore a world of literary treasures for every reader</h1>
          <h2>Browse by genre, author, or featured picks!</h2>
          <Search>
            <Input>
              <input />
              <Styledsearch />
            </Input>
            <button>Search</button>
          </Search>
        </LeftContent>
      </Left>
      <Right>
        <RightImg>
          <img src={heroRight} alt="Hero Right" />
        </RightImg>
      </Right>
    </Conatiner>
  );
}

const Conatiner = styled.div`
  height: 70vh;
  display: grid;
  grid-template-columns: 60% 40%;
  /* border: 1px solid black; */
`;

const Search = styled.div`
  display: flex;
  gap: 2%;
  width: 100%;
  height: 2.2rem;

  & button {
    width: 15%;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0px 0px;
    border: 1px solid rgb(3, 3, 3);
    font-weight: bolder;
  }
`;

const Left = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-size: 3vw;
    font-weight: bolder;
    margin: 0;
  }

  & h2 {
    width: 100%;
    font-size: 1.5;
    font-weight: 400;
    color: ${colors.secondary};
  }
`;

const LeftContent = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Right = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 90%;
    height: 80%;
    object-fit: cover;
  }
`;

const RightImg = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  & input {
    width: 100%;
    height: 100%;
    border: 1px solid ${colors.secondary};
    border-radius: 10px;
  }
`;

const Styledsearch = styled(FaSearch)`
  position: absolute;
  height: 100%;
  right: 5%;
  top: 0;
  font-weight: bolder;
`;

export default Hero;
