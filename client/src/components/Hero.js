import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import heroRight from "../assets/hero/right.png";
import Color, { colors } from "./Colors";

function Hero() {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const searchContainerRef = useRef(null);

  const handleSearch = async () => {
    try {
      const response = await fetch("http://localhost:5000/search", {
        // Send request to /search endpoint
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm }), // Include searchTerm in request body
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      console.log(response)

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Perform search when searchTerm changes
    handleSearch();
  }, [searchTerm]);

  // Close search results when clicked outside the search container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchContainerRef.current && !searchContainerRef.current.contains(event.target)) {
        setSearchResults([]); // Hide search results
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Container>
      <Left>
        <LeftContent>
          <h1>Explore a world of literary treasures for every reader</h1>
          <h2>Browse by genre, author, or featured picks!</h2>
          <Search ref={searchContainerRef}>
            <Input>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by title, author, or genre"
              />
              <StyledSearch />
            </Input>
            <button onClick={handleSearch}>Search</button>
          </Search>
          <SearchContent>
            {searchResults.map((result) => (
              <BookItem key={result._id}>
                <BookImage src={`http://localhost:5000/image/${result._id}`} alt={result.title} />
                <div>
                  <h3>{result.title}</h3>
                  <p>by {result.author}</p>
                </div>
              </BookItem>
            ))}
          </SearchContent>
        </LeftContent>
      </Left>
      <Right>
        <RightImg>
          <img src={heroRight} alt="Hero Right" />
        </RightImg>
      </Right>
    </Container>
  );
}

const Container = styled.div`
  height: 70vh;
  display: grid;
  grid-template-columns: 60% 40%;
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

const StyledSearch = styled(FaSearch)`
  position: absolute;
  height: 100%;
  right: 5%;
  top: 0;
  font-weight: bolder;
`;

const SearchContent = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 15em;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const BookItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  h3 {
    margin: 0;
    font-size: 1.2rem;
  }

  p {
    margin: 0;
    color: ${colors.secondary};
  }
`;

const BookImage = styled.img`
  width: 100px; /* Adjust the width as needed */
  height: auto;
  margin-right: 20px;
`;

export default Hero;
