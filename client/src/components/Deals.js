import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { colors } from "./Colors";
import { FaBook } from "react-icons/fa";
import Image1 from "../assets/deals/Image7.png";
import Image2 from "../assets/deals/Image8.png";
import Image3 from "../assets/deals/photo1.avif";
import Image4 from "../assets/deals/photo2.avif";
import Image5 from "../assets/deals/photo3.avif";
import Image6 from "../assets/deals/photo4.avif";
import Image7 from "../assets/deals/photo5.avif";
import Image8 from "../assets/deals/photo6.avif";
import Image9 from "../assets/deals/photo7.avif";
import Image10 from "../assets/deals/photo8.webp";

const Container = styled.div`
  display: grid;
  grid-template-columns: 22% 78%;
  width: 90%;
  margin: 0 auto;
  gap: 5%;
`;

const Offers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2%;

  & h1 {
    background-color: ${colors.tertiary};
    font-size: 1.5vw;
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5%;
    padding: 0.5rem;
    border-radius: 0.5rem;
    margin: 0;
  }
`;
const Books = styled.div`
  & h1 {
    background-color: ${colors.tertiary};
    border-radius: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 1.5vw;
    width: 86%;
    padding: 1% 3%;
    gap: 2%;
    margin: 0;
    margin-bottom: 25px;
  }
`;

const NewArrival = styled.div`
  height: 25%;
  width: 90%;
  background-color: ${colors.tertiary};
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 2%;
  align-items: center;
  padding: 5% 2%;

  & h1 {
    background-color: transparent;
    font-size: 1.5vw;
  }

  & h2 {
    color: ${colors.secondary};
    margin: 0;
    font-size: 1vw;
    font-weight: 500;
  }

  & button {
    width: 60%;
    margin: 0 auto;
    border-radius: 0.5rem;
    box-shadow: none;
    border: 1px solid black;
    padding: 3%;
    font-weight: 900;
  }
`;
const Timer = styled.div`
  height: 15%;
  width: 90%;
  background-color: black;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  padding: 2%;

  & h1 {
    font-size: 1.5vw;
    background-color: transparent;
  }

  & h2 {
    margin: 0;
    font-size: 1vw;
    color: ${colors.secondary};
  }
`;
const BestSellers = styled.div`
  height: 25%;
  width: 90%;
  background-color: ${colors.tertiary};
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2%;
  align-items: center;
  padding: 5% 2%;

  & h1 {
    background-color: transparent;
    font-size: 1.5vw;
    padding: 0;
  }

  & h2 {
    color: ${colors.secondary};
    margin: 0;
    font-size: 1vw;
    font-weight: 500;
  }

  & button {
    width: 60%;
    margin: 0 auto;
    border-radius: 0.5rem;
    box-shadow: none;
    border: 1px solid black;
    padding: 3%;
    font-weight: 900;
  }
`;

const ImgWrapper = styled.div`
  position: relative;
  width: 60%;
  height: 40%;
  margin: 8% 0;
  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & h1 {
    position: absolute;
    top: -15px;
    right: -9px;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    font-size: 1vw;
    background-color: white;
    padding: 5%;
  }
`;

const BoxContent = styled.div`
  background-color: #ffffff73;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    margin: 0 !important;
    font-size: 1.5vw;
  }

  & h2 {
    margin: 0 !important;
    font-size: 1vw;
    font-weight: 500;
  }

  & button {
    padding: 2%;
    width: 25%;
    background-color: white;
    border-radius: 0.5rem;
    margin-top: 2%;
    border: 1px solid;
    font-weight: 700;
  }
`;

const Txt = styled.div`
  padding: 2% 5%;

  & h1 {
    margin: 0;
    font-weight: 500;
  }

  & h2 {
    font-weight: 600;
  }
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50% 50%;
  gap: 2%;
  grid-row-gap: 5%;
  height: 54%;
  width: 92%;
  margin: 10px 0;
`;
const ImageWraper = styled.div`
  background-color: ${colors.tertiary};
  border-radius: 0.5rem;
  & h1 {
    font-size: 1.2vw;
    color: ${colors.secondary};
    text-align: center;
    width: 100%;
    background-color: transparent;
  }

  & h2 {
    margin: 0;
    font-size: 1.2vw;
  }
`;

const ImageContent = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  border-radius: 0.5rem;
`;

const BookContent = styled.div`
  border: 1px solid;
  height: 60%;
  width: 90%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;

const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TimerDisplay = styled.div`
  font-size: 2rem;
`;

const Gener = styled.div`
  height: 22%;
  width: 90%;

  & h1 {
    margin: 20px 0;
    width: 96%;
  }
`;
const GenerContent = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 2%;
  height: 77%;
  margin-top: 5%;
`;

const Button = styled.button`
  width: 60%;
  margin: 0 auto;
  border-radius: 0.5rem;
  box-shadow: none;
  border: 1px solid black;
  padding: 3%;
  font-weight: 900;
`;

const Box = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & h1 {
    background-color: transparent;
    text-align: center;
    display: block;
  }

  &.best-sellers {
    background-image: url(${Image9});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  &.top-picks {
    background-image: url(${Image10});
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

const CountdownTimer = ({ hours = 0, minutes = 0, seconds = 0 }) => {
  const [remainingTime, setRemainingTime] = useState({
    hours,
    minutes,
    seconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(timer);
      } else {
        setRemainingTime((prevState) => {
          if (prevState.seconds > 0) {
            return { ...prevState, seconds: prevState.seconds - 1 };
          } else if (prevState.minutes > 0) {
            return {
              ...prevState,
              minutes: prevState.minutes - 1,
              seconds: 59,
            };
          } else if (prevState.hours > 0) {
            return {
              ...prevState,
              hours: prevState.hours - 1,
              minutes: 59,
              seconds: 59,
            };
          }
          return prevState;
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <TimerWrapper>
      <TimerDisplay>
        {String(remainingTime.hours).padStart(2, "0")}:
        {String(remainingTime.minutes).padStart(2, "0")}:
        {String(remainingTime.seconds).padStart(2, "0")}
      </TimerDisplay>
    </TimerWrapper>
  );
};

function Deals() {
  const navigate = useNavigate();

  const handleExploreClick = (genre) => {
    // Navigate to '/books' route with state
    navigate("/books", {
      state: {
        activeGenre: "Fiction",
      },
    });
  };

  return (
    <Container>
      <Offers>
        <h1>
          <FaBook />
          Featured Deals
        </h1>

        <BestSellers>
          <h1>Bestsellers</h1>
          <h2>by Top Author</h2>
          <ImgWrapper>
            <img src={Image1} alt="Best Sellers" />
            <h1>30% Off</h1>
          </ImgWrapper>
          <Button onClick={() => handleExploreClick("bestSellers")}>
            Explore
          </Button>
        </BestSellers>

        <NewArrival>
          <h1>New Arrival</h1>
          <h2>Meet the latest</h2>
          <ImgWrapper>
            <img src={Image2} alt="New Arrival" />
            <h1>30% Off</h1>
          </ImgWrapper>
          <Button onClick={() => handleExploreClick("bestSellers")}>
            Explore
          </Button>
        </NewArrival>

        <Timer>
          <h1>BOOK SALE</h1>
          <h2>Limited time offer</h2>
          <CountdownTimer hours={0} minutes={10} seconds={0} />
        </Timer>
      </Offers>
      <Books>
        <h1>
          {" "}
          <FaBook /> Top Picks
        </h1>
        <Content>
          <ImageWraper onClick={()=>handleExploreClick("bestseller")} >
            <ImageContent src={Image3} alt="" srcset="" />
            <Txt>
              <h1>Best collection of novels</h1>
              <h2>$8.99</h2>
            </Txt>
          </ImageWraper>
          <ImageWraper onClick={()=>handleExploreClick("bestseller")} >
            <ImageContent src={Image4} alt="" srcset="" />
            <Txt>
              <h1>Best mystrey novels</h1>
              <h2>$11.11</h2>
            </Txt>
          </ImageWraper>
          <ImageWraper onClick={()=>handleExploreClick("bestseller")}>
            <ImageContent src={Image5} alt="" srcset="" />
            <Txt>
              <h1>Best Self-care Books</h1>
              <h2>$14.99</h2>
            </Txt>
          </ImageWraper>
          <ImageWraper onClick={()=>handleExploreClick("bestseller")}>
            <ImageContent src={Image6} alt="" srcset="" />
            <Txt>
              <h1>Best Thrillers</h1>
              <h2>$12.99</h2>
            </Txt>
          </ImageWraper>
          <ImageWraper onClick={()=>handleExploreClick("bestseller")}>
            <ImageContent src={Image7} alt="" srcset="" />
            <Txt>
              <h1>Best Sellers</h1>
              <h2>$10.99</h2>
            </Txt>
          </ImageWraper>
          <ImageWraper onClick={()=>handleExploreClick("bestseller")}>
            <ImageContent src={Image8} alt="" srcset="" />
            <Txt>
              <h1>Best Newly Arrived</h1>
              <h2>$13.99</h2>
            </Txt>
          </ImageWraper>
        </Content>

        <Gener>
          <GenerContent>
            <Box className="best-sellers">
              <BoxContent>
                <h1>Best Sellers</h1>
                <h2>Trending Now,Bookmarks</h2>
                <Button onClick={() => handleExploreClick("bestSellers")}>
                  Explore
                </Button>
              </BoxContent>
            </Box>
            <Box className="top-picks">
              <BoxContent>
                <h1>Top Picks</h1>
                <h2>Top Rated,Best for you</h2>
                <Button onClick={() => handleExploreClick("bestSellers")}>
                  Explore
                </Button>
              </BoxContent>
            </Box>
          </GenerContent>
        </Gener>
      </Books>
    </Container>
  );
}

export default Deals;
