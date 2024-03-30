import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Tabs from "../utils/Tabs";
import { useLocation } from "react-router-dom";
import TabContent from "../utils/TabContent";
import { colors } from "../components/Colors";

function Books() {
  const location = useLocation();
  const title = location.state ? location.state.title : null;
  const activeGenreFromLocation = location.state
    ? location.state.activeGenre
    : null;
  const [activeGenre, setActiveGenre] = useState(activeGenreFromLocation);
  const [selectedSortOptions, setSelectedSortOptions] = useState([]);

  const handleOnClick = (genre) => {
    setActiveGenre(genre);
    console.log(activeGenre);
  };

  useEffect(() => {
    if (activeGenre !== null) {
    }
  }, [activeGenre]);

  const handleSortOptionChange = (option) => {
    // Toggle the option in selectedSortOptions
    if (selectedSortOptions.includes(option)) {
      setSelectedSortOptions(
        selectedSortOptions.filter((item) => item !== option)
      );
    } else {
      setSelectedSortOptions([...selectedSortOptions, option]);
    }
  };

  return (
    <Main>
      <Topsection></Topsection>
      <Columns>
        <Sort>
          <SortHeader>Sort by</SortHeader>
          <SortList>
            <ListItems>
              <label
                onClick={() => handleOnClick("bestSeller")}
                onChange={() => handleSortOptionChange("BestSeller")}
                htmlFor="BestSeller"
              >
                BestSeller
              </label>
           
            </ListItems>
            <ListItems>
              <label 
                onClick={() => handleOnClick("topPicks")}
                onChange={() => handleSortOptionChange("topPicks")}
              htmlFor="TopPicks">Top-picks</label>
             
            </ListItems>
            <ListItems>
              <label htmlFor="NewArrival"
                onClick={() => handleOnClick("newArrival")}
                onChange={() => handleSortOptionChange("newArrival")}
              >New Arrival</label>
            </ListItems>
          </SortList>
        </Sort>
        <Conatiner>
          <Filter>
            <Tabs
              title={title}
              defaultTitle="Fiction"
              isActive={activeGenre === "Fiction"}
              onClick={() => handleOnClick("Fiction")}
            />
            <Tabs
              title={title}
              defaultTitle="Non-Fiction"
              isActive={activeGenre === "NonFiction"}
              onClick={() => handleOnClick("NonFiction")}
            />
            <Tabs
              title={title}
              defaultTitle="Mystrey"
              isActive={activeGenre === "Mystrey"}
              onClick={() => handleOnClick("Mystrey")}
            />
            <Tabs
              title={title}
              defaultTitle="Sci-Fi"
              isActive={activeGenre === "SciFi"}
              onClick={() => handleOnClick("SciFi")}
            />
            <Tabs
              title={title}
              defaultTitle="Self-Help"
              isActive={activeGenre === "SelfHelp"}
              onClick={() => handleOnClick("SelfHelp")}
            />
            <Tabs
              title={title}
              defaultTitle="Thriller"
              isActive={activeGenre === "Thriller"}
              onClick={() => handleOnClick("Thriller")}
            />
          </Filter>
          <TabContent
            activeGenre={activeGenre}
            selectedSortOptions={selectedSortOptions}
          />
        </Conatiner>
      </Columns>
    </Main>
  );
}

const Main = styled.div``;
const Sort = styled.div``;

const Topsection = styled.div`
  height: 60vh;
  width: 100%;
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: 15% 85%;
`;

const SortList = styled.ul`
  height: 70%;
  width: 80%;
  margin: 0 auto;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5%;
  padding: 0;
`;
const ListItems = styled.li`
  width: 85%;
  margin: 0 auto;
  text-align: left;
  display: flex;
  gap: 5%;
  border-bottom: 1px solid ${colors.secondary};
  padding: 4% 1%;
`;

const SortHeader = styled.h1`
  width: 80%;
  margin: 0.5rem auto;
`;

const Filter = styled.div`
  display: flex;
  gap: 5%;
  width: 90%;
  height: 5vh;
  margin: 15px auto;
  align-items: center;
`;

const Conatiner = styled.div``;

export default Books;
