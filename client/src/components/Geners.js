import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import GenerBoxes from "../utils/GenerBoxes";
import Image from "../assets/geners/Image.png";
import Image1 from "../assets/geners/Image1.png";
import Image2 from "../assets/geners/Image2.png";
import Image3 from "../assets/geners/Image3.png";
import Image4 from "../assets/geners/Image4.png";
import Image5 from "../assets/geners/Image5.png";

function Geners({ isloggedIn }) {
  const navigate = useNavigate();
  const [activeGenre, setActiveGenre] = useState(null);
  const handleOnClick = (genre) => {
    setActiveGenre(genre);
    navigate("/books", { state: { activeGenre: genre } });
  };

  return (
    <Content>
      <StyledH1>Genres</StyledH1>
      <Container>
        <GenerBoxes
          title={"Fiction"}
          imageUrl={Image}
          onclick={() => handleOnClick("Fiction")}
          isActive={activeGenre === "Fiction"}
        />
        <GenerBoxes
          title={"Non-fiction"}
          imageUrl={Image1}
          onclick={() => handleOnClick("Non-Fiction")}
          isActive={activeGenre === "Non-Fiction"}
        />
        <GenerBoxes
          title={"Mystery"}
          imageUrl={Image2}
          onclick={() => handleOnClick("Mystrey")}
          isActive={activeGenre === "Mystrey"}
        />
        <GenerBoxes
          title={"Sci-Fi"}
          imageUrl={Image3}
          onclick={() => handleOnClick("Sci-Fi")}
          isActive={activeGenre === "Sci-Fi"}
        />
        <GenerBoxes
          title={"Self-Help"}
          imageUrl={Image4}
          onclick={() => handleOnClick("Self-Help")}
          isActive={activeGenre === "Self-Help"}
        />
        <GenerBoxes
          title={"Thriller"}
          imageUrl={Image5}
          onclick={() => handleOnClick("Thriller")}
          isActive={activeGenre === "Thriller"}
        />
      </Container>
    </Content>
  );
}

const Content = styled.div`
  height: 70vh;
`;

const StyledH1 = styled.h1`
  font-size: 2vw;
  text-align: center;
  margin: 0;
`;

const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  height: 70%;
`;

export default Geners;

// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import Tabs from "../utils/Tabs";
// import { useLocation } from "react-router-dom";
// import TabContent from "../utils/TabContent";
// import FictionContent from "../utils/FictionContent";
// import NonFictionContent from "../utils/NonFictionContent";
// import MystreyContent from "../utils/MystreyContent";
// import SciFiContent from "../utils/SciFiContent";
// import SelfHelpContent from "../utils/SelfHelpContent";
// import ThrillerContent from "../utils/ThrillerContent";

// function Books() {
//   const location = useLocation();
//   const title = location.state ? location.state.title : null;
//   const activeGenreFromLocation = location.state
//     ? location.state.activeGenre
//     : null;
//   const [activeGenre, setActiveGenre] = useState(activeGenreFromLocation);

//   const handleOnClick = (genre) => {
//     setActiveGenre(genre);
//   };

//   useEffect(() => {
//     console.log(`Active Genre: ${activeGenre}`);
//   }, [activeGenre]);

//   return (
//     <Container>
//       <Filter>
//         <Tabs
//           title={title}
//           defaultTitle="Fiction"
//           isActive={activeGenre === "Fiction"}
//           onClick={() => handleOnClick("Fiction")}
//         />
//         <Tabs
//           title={title}
//           defaultTitle="Non-Fiction"
//           isActive={activeGenre === "Non-Fiction"}
//           onClick={() => handleOnClick("Non-Fiction")}
//         />
//         <Tabs
//           title={title}
//           defaultTitle="Mystrey"
//           isActive={activeGenre === "Mystrey"}
//           onClick={() => handleOnClick("Mystrey")}
//         />
//         <Tabs
//           title={title}
//           defaultTitle="Sci-Fi"
//           isActive={activeGenre === "Sci-Fi"}
//           onClick={() => handleOnClick("Sci-Fi")}
//         />
//         <Tabs
//           title={title}
//           defaultTitle="Self-Help"
//           isActive={activeGenre === "Self-Help"}
//           onClick={() => handleOnClick("Self-Help")}
//         />
//         <Tabs
//           title={title}
//           defaultTitle="Thriller"
//           isActive={activeGenre === "Thriller"}
//           onClick={() => handleOnClick("Thriller")}
//         />
//       </Filter>

//       <TabContent>
//         {activeGenre === "Fiction" && <FictionContent />}
//         {activeGenre === "Non-Fiction" && <NonFictionContent />}
//         {activeGenre === "Mystrey" && <MystreyContent />}
//         {activeGenre === "Sci-Fi" && <SciFiContent />}
//         {activeGenre === "Self-Help" && <SelfHelpContent />}
//         {activeGenre === "Thriller" && <ThrillerContent />}
//       </TabContent>
//     </Container>
//   );
// }

// const Filter = styled.div`
//   display: flex;
//   gap: 5%;
//   width: 90%;
//   margin: 15px auto;
// `;

// const Container = styled.div``;

// export default Books;
