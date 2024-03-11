import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Geners from "../components/Geners";
import styled from "styled-components";

function Homepage(isLoggedIn) {
  return (
    <>
      <Hero />
      <Geners isLoggedIn={isLoggedIn} />
    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  /* Add other styles as needed */
`;

export default Homepage;
