import React from "react";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { colors } from "../components/Colors";

const DetailsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: ${colors.secondary};
  background-color: black;
  opacity: 0.8;
  display: flex;
  z-index: 2;
  border-radius: 2rem;
  padding: 1rem;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & img {
    height: 60%;
    width: 60%;
  }
`;

const DetailsContent = styled.div`
  width: 80%;
  height: 100%;
  text-align: center;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  & ::-webkit-scrollbar {
    width: 10%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 5%;
  right: 5%;
  padding: 0.5rem;
  cursor: pointer;
  background: none;
  border: none;
`;

const Price = styled.div`
  font-size: 1vw; // Adjust the font size as needed
  color: ${colors.secondary};
  margin-top: 1rem;
`;

const Buy = styled.div`
  border: 1px solid ${colors.secondary};
  padding: 0.5rem;
  width: 10%;
  border-radius: 0.5rem;
  margin-top: 0.5rem;
`;

const DescriptionContainer = styled.div`
  text-align: left;
  width: 100%;
  max-height: 100px; /* Adjust the height as needed */
  overflow-y: auto;
  overflow-wrap: break-word;
`;

const BookDetails = ({ book, onClose }) => {
  const { _id,title, author, description, imageUrl, price } = book;
  

  const formattedPrice = price && typeof price === 'number' ? price.toFixed(2) : 'N/A';

  const getImageUrl = () => `http://localhost:5000/image/${_id}`;
  return (
    <DetailsContainer>
      <CloseButton onClick={onClose}>
        <AiOutlineCloseCircle size={20} color="white" />
      </CloseButton>
      <ImageContainer>
        <img src={getImageUrl()} alt={`${title} Cover`} />
      </ImageContainer>
      <DetailsContent>
        <h2>Title: {title}</h2>
        <p>Author: {author}</p>
        <DescriptionContainer>
          Description:
          <p> {description}</p>
        </DescriptionContainer>
        <Price>Price: ${formattedPrice}</Price>
        {/* Add more details as needed */}
        <Buy>Buy</Buy>
      </DetailsContent>
    </DetailsContainer>
  );
};

export default BookDetails;
