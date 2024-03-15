import React,{useState,useEffect} from "react";
import styled from "styled-components";
import Tabs from "../utils/Tabs";
import { useLocation  } from "react-router-dom";
import TabContent from "../utils/TabContent";


function Books() {
  const location = useLocation();
  const title = location.state ? location.state.title : null;
  const activeGenreFromLocation = location.state ? location.state.activeGenre : null;
  const [activeGenre, setActiveGenre] = useState(activeGenreFromLocation);

  const handleOnClick = (genre) => {
    setActiveGenre(genre);
  };

    useEffect(() => {
    if (activeGenre !== null) {
    }
  }, [activeGenre]);

  return (
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

      <TabContent activeGenre={activeGenre} />
    </Conatiner>
  );
}

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
