import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "../components/Colors";
import axios from "axios";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const BooksInfo = styled.div`
  display: flex;
  gap: 10%;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
  width: 70%;
`;

const Buy = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  gap: 10%;

  & button {
    border-radius: 0.5rem;
    box-shadow: none;
    border: 1px solid;
    padding: 0 1vw;
  }
`;

const Availability = styled.div`
  font-size: 0.8vw;
  color: ${colors.secondary};
`;

const Price = styled.div`
  font-size: 0.8vw;
  color: ${colors.secondary};
`;

const Books = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5%;
  height: 40vh;
`;

const BooksContent = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.2rem;
  background-color: ${colors.tertiary};

  & img {
    width: 80%;
    height: 70%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

function ThrillerContent() {
  // const [books, setBooks] = useState([]);
  const [fictionImages, setFictionImages] = useState([]);

  useEffect(() => {
    const fetchFictionImages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/images/Thriller",
          { withCredentials: true }
        );
        setFictionImages(response.data);
      } catch (error) {
        console.error("Error fetching fiction images:", error);
      }
    };

    fetchFictionImages();
  }, []);

  const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

  return (
    <Container>
      <h1>Fiction Best Sellers</h1>
      <Books>
        {fictionImages.map((image) => (
          <BooksContent key={image._id}>
              <img
                src={getImageUrl(image._id)}
                alt="Book Cover"
                crossOrigin="anonymous"
              />
            <BooksInfo>
              <Price>Price: $14.99</Price>
              <Availability>In-stock</Availability>
            </BooksInfo>
            <Buy>
              <button>Buy</button>
              Available
            </Buy>
          </BooksContent>
        ))}
      </Books>
    </Container>
  );
}

export default ThrillerContent;
