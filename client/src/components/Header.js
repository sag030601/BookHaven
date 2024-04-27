import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { colors } from "./Colors";
import { FaBook, FaSearch, FaShoppingCart, FaUser, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useBookContext } from "../utils/BookContext";

function Header() {
  const { selectedBook } = useBookContext();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const searchInputRef = useRef(null);
  const searchContentRef = useRef(null);

  const handleHomeClick = () => {
    navigate("/");
  };

  const handleCartClick = () => {
    navigate("/payment", { state: { selectedBook } });
  };

  const handleSearch = async () => {
    try {
      const response = await fetch("http://localhost:5000/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ searchTerm }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    // Implement real-time search by calling handleSearch whenever searchTerm changes
    handleSearch();

    // Add event listener to handle clicks outside search content and search input
    const handleClickOutside = (event) => {
      if (
        searchContentRef.current &&
        !searchContentRef.current.contains(event.target) &&
        !searchInputRef.current.contains(event.target)
      ) {
        setShowSearchInput(false);
        setSearchTerm(""); // Clear the search term
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [searchTerm]);

  const handleSearchIconClick = () => {
    setShowSearchInput(true);
    searchInputRef.current?.focus(); // Use optional chaining to access the focus method
  };

  const handleCloseButtonClick = () => {
    setShowSearchInput(false);
    setSearchTerm(""); // Clear the search term
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
        <Right showSearchInput={showSearchInput}>
          {showSearchInput ? (
            <SearchInputContainer>
              <SearchInput
                type="text"
                placeholder="Search title..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                ref={searchInputRef}
                fullWidth={showSearchInput} // Pass a prop to the input indicating if it's full width
              />
              <CloseButton onClick={handleCloseButtonClick}>
                <StyledCloseIcon />
              </CloseButton>
            </SearchInputContainer>
          ) : (
            <StyledSearch onClick={handleSearchIconClick} />
          )}
          <StyledCart onClick={handleCartClick} />
          <StyledUser />
        </Right>
      </Content>
      {searchTerm && ( // Display search content only if searchTerm is not empty
        <SearchContent visible={searchResults.length > 0} ref={searchContentRef}>
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
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
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
  justify-content: ${(props) => (props.showSearchInput ? "flex-start" : "space-around")};
  width: ${(props) => (props.showSearchInput ? "100%" : "10%")};
  height: 100%;
`;

const StyledUser = styled(FaUser)`
  font-size: 1.2vw;
`;
const StyledSearch = styled(FaSearch)`
  font-size: 1.2vw;
  cursor: pointer;
`;
const StyledCart = styled(FaShoppingCart)`
  font-size: 1.2vw;
`;

const SearchInputContainer = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  width: ${(props) => (props.fullWidth ? "calc(100% - 40px)" : "auto")}; /* Adjust width */
  height: 30px;
  padding: 5px;
  border-radius: 5px;
  border: ${(props) => (props.fullWidth ? "none" : `1px solid ${colors.secondary}`)}; /* Remove border if full width */
`;

const CloseButton = styled.button`
  position: absolute;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
`;

const StyledCloseIcon = styled(FaTimes)`
  font-size: 1.2vw;
  color: ${colors.secondary}; /* Match the color to the theme */
`;

const SearchContent = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  width: 100%;
  max-height: 200px; /* Adjust as needed */
  overflow-y: auto;
  background-color: white;
  border: 1px solid ${colors.secondary};
  border-top: none;
  border-radius: 0 0 5px 5px;
  display: ${(props) => (props.visible ? "block" : "none")};
`;

const BookItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid ${colors.secondary};

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
  width: 100px;
  height: auto;
  margin-right: 20px;
`;

export default Header;
