import React from 'react'
import styled from 'styled-components'
import { colors } from './Colors'
const Container = styled.div`
background-color: ${colors.tertiary};
padding: 2% 5%;
display: grid;
grid-template-columns: 40% 60%;
`

const Brand = styled.div`
display: flex;
align-items: center;
font-size: 1.5vw;

`
const Links = styled.div`
display: grid;
grid-template-columns: repeat(3,1fr);
gap: 2%;

& h1 {
  font-size: 1vw;
}

& h1:not(:first-child){
  color: ${colors.secondary};
}
`
function Footer() {
  return (
    <Container>
      <Brand>
      <h1>BOOKHAVEN</h1>
      </Brand>
      <Links>
      <h1>Authors</h1>
      <h1>Best Sellers</h1>
      <h1>Twitter</h1>
      <h1>Pinterest</h1>
      <h1>Join our community</h1>
      <h1>Write a review</h1>
      <h1>Become a seller</h1>
      <h1>Book reviews</h1>
      <h1>Discount on first</h1>
      </Links>
    </Container>
  )
}

export default Footer