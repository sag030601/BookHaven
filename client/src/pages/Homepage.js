import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Geners from "../components/Geners";
import styled from "styled-components";
import Deals from "../components/Deals";
import Footer from "../components/Footer";

function Homepage(isLoggedIn) {
  return (
    <>
      <Hero />
      <Geners isLoggedIn={isLoggedIn} />
      <Deals/>
      <Footer/>

    </>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  /* Add other styles as needed */
`;

export default Homepage;
