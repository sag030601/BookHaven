import React from "react";
import styled from "styled-components";
import { colors } from "./Colors";
import { FaBook, FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../utils/BookContext";

function Header() {
  const { selectedBook } = useBookContext();
  const navigate = useNavigate(); 
  const handleHomeClick = () => {
    navigate("/");
  };
  const handleCartClick = () => {
    navigate("/payment", { state: { selectedBook } });
  };
  return (
    <Container>
      <Content>
        <Left>
          <StyledBook />
          <ul>
            <li onClick={handleHomeClick}>Home</li>
            <li>genres</li>
            <li>blogs</li>
            <li>contact</li>
          </ul>
        </Left>
        <Right>
          <Styledsearch />
          <Styledcart onClick={handleCartClick} />
          <Styleduser />
        </Right>
      </Content>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
`;

const Content = styled.div`
  position: relative;
  display: flex;
  width: 90%;
  height: 100%;
  border-bottom: 1px solid ${colors.secondary};
`;

const StyledBook = styled(FaBook)`
  font-size: 2vw;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: 70%;

  & ul {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 40%;
    text-transform: uppercase;
    font-weight: bolder;
  }
`;
const Right = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 10%;
  height: 100%;
`;

const Styleduser = styled(FaUser)`
  font-size: 1.2vw;
`;
const Styledsearch = styled(FaSearch)`
  font-size: 1.2vw;
`;
const Styledcart = styled(FaShoppingCart)`
  font-size: 1.2vw;
`;

export default Header;
