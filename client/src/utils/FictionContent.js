// // import React, { useEffect, useState } from "react";
// // import styled from "styled-components";
// // import { colors } from "../components/Colors";
// // import axios from "axios";
// // import BookDetails from "./BookDetails";

// // const Container = styled.div`
// //   width: 90%;
// //   margin: 0 auto;
// //   position: relative;

// //   & h1 {
// //     font-size: 2vw;
// //   }
// // `;

// // const BooksInfo = styled.div`
// //   display: flex;
// //   gap: 10%;
// //   justify-content: space-between;
// //   align-items: center;
// //   margin: 5px 0;
// //   width: 70%;
// // `;

// // const Buy = styled.div`
// //   width: 70%;
// //   display: flex;
// //   justify-content: space-between;
// //   gap: 10%;
// //   font-size: 1vw;

// //   & button {
// //     border-radius: 0.5rem;
// //     box-shadow: none;
// //     border: 1px solid;
// //     padding: 0 1vw;
// //   }
// // `;

// // const Availability = styled.div`
// //   font-size: 0.8vw;
// //   color: ${colors.secondary};
// // `;

// // const Price = styled.div`
// //   font-size: 0.8vw;
// //   color: ${colors.secondary};
// // `;

// // const Books = styled.div`
// //   display: flex;
// //   justify-content: space-between;
// //   gap: 5%;
// //   height: 45vh;
// //   overflow-x: scroll;
// //   width: auto;

// //   &::-webkit-scrollbar {
// //     width: 0px;
// //   }
// // `;

// // const BooksContent = styled.div`
// //   display: flex;
// //   min-width: 12vw; /* Set a minimum width */
// //   width: 100%;
// //   box-sizing: border-box;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   border-radius: 1rem;
// //   padding: 0.5rem;
// //   background-color: ${colors.tertiary};

// //   & img {
// //     width: 60%;
// //     height: 60%;
// //     object-fit: cover;
// //     border-radius: 0.5rem;
// //   }
// // `;

// // const More = styled.div`
// //   font-size: 0.8vw;
// //   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
// //   position: absolute;
// //   bottom: 10px;
// //   width: 100%;
// //   padding: 0.5rem;
// //   background-color: ${colors.tertiary};
// //   opacity: ${(props) => (props.visible ? 1 : 0)};
// //   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
// //   transition: opacity 0.3s, transform 0.3s;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   border-radius: 0.5rem;
// //   cursor: pointer;
// // `;

// // const BookContainer = styled.div`
// //   position: relative;

// //   &:hover ${More} {
// //     visibility: ${(props) => (props.hovered ? "visible" : "hidden")};
// //     opacity: ${(props) => (props.hovered ? 1 : 0)};
// //     transform: translateY(${(props) => (props.hovered ? "0%" : "-100%")});
// //   }
// // `;

// // function FictionContent() {
// //   // const [books, setBooks] = useState([]);
// //   const [fictionImages, setFictionImages] = useState([]);
// //   const [selectedBook, setSelectedBook] = useState(null);
// //   const [hoveredBook, setHoveredBook] = useState(null);

// //   useEffect(() => {
// //     const fetchFictionImages = async () => {
// //       try {
// //         const response = await axios.get(
// //           "http://localhost:5000/images/Fiction",
// //           { withCredentials: true }
// //         );
// //         setFictionImages(response.data);
// //       } catch (error) {
// //         console.error("Error fetching fiction images:", error);
// //       }
// //     };

// //     fetchFictionImages();
// //   }, []);

// //   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

// //   const handleMoreClick = (book) => {
// //     console.log("Selected Book:", book);
// //     setSelectedBook({
// //       title: book.title,
// //       author: book.author,
// //       description: book.description,
// //       imageUrl: getImageUrl(book._id), // Assuming _id is the image identifier
// //       price: book.price,
// //       // Add other properties as needed
// //     });
// //   };

// //   const handleMouseEnter = (book) => {
// //     setHoveredBook(book);
// //   };

// //   const handleMouseLeave = () => {
// //     setHoveredBook(null);
// //   };

// //   const handleCloseDetails = () => {
// //     setSelectedBook(null);
// //   };

// //   return (
// //     <Container>
// //       <h1> Best Sellers For Fiction Genre</h1>
// //       <Books>
// //         {fictionImages.map((image, index) => (
// //           <BookContainer
// //             key={image._id}
// //             hovered={hoveredBook === image || selectedBook === image}
// //             onMouseEnter={() => handleMouseEnter(image)}
// //             onMouseLeave={handleMouseLeave}
// //           >
// //             <BooksContent>
// //               <img
// //                 src={getImageUrl(image._id)}
// //                 alt="Book Cover"
// //                 crossOrigin="anonymous"
// //               />
// //               <BooksInfo>
// //                 <Price>Price: ${image.price.toFixed(2)}</Price>
// //                 <Availability>In-stock</Availability>
// //               </BooksInfo>
// //               <Buy>
// //                 <button>Buy</button>
// //                 Available
// //               </Buy>
// //             </BooksContent>
// //             <More
// //               visible={hoveredBook === image || selectedBook === image}
// //               onClick={() => handleMoreClick(image)}
// //             >
// //               More Details
// //             </More>
// //           </BookContainer>
// //         ))}
// //       </Books>
// //       {selectedBook && (
// //         <BookDetails book={selectedBook} onClose={handleCloseDetails} />
// //       )}
// //     </Container>
// //   );
// // }

// // export default FictionContent;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import { colors } from "../components/Colors";
// import axios from "axios";
// import BookDetails from "./BookDetails";

// const Container = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   position: relative;

//   & h1 {
//     font-size: 2vw;
//   }
// `;

// const BooksInfo = styled.div`
//   display: flex;
//   gap: 10%;
//   justify-content: space-between;
//   align-items: center;
//   margin: 5px 0;
//   width: 70%;
// `;

// const Buy = styled.div`
//   width: 70%;
//   display: flex;
//   justify-content: space-between;
//   gap: 10%;
//   font-size: 1vw;

//   & button {
//     border-radius: 0.5rem;
//     box-shadow: none;
//     border: 1px solid;
//     padding: 0 1vw;
//   }
// `;

// const Availability = styled.div`
//   font-size: 0.8vw;
//   color: ${colors.secondary};
// `;

// const Price = styled.div`
//   font-size: 0.8vw;
//   color: ${colors.secondary};
// `;

// const Books = styled.div`
//   display: flex;
//   justify-content: space-between;
//   gap: 5%;
//   height: 45vh;
//   overflow-x: scroll;
//   width: auto;

//   &::-webkit-scrollbar {
//     width: 0px;
//   }
// `;

// const BooksContent = styled.div`
//   display: flex;
//   min-width: 12vw;
//   width: 100%;
//   box-sizing: border-box;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 1rem;
//   padding: 0.5rem;
//   background-color: ${colors.tertiary};

//   & img {
//     width: 60%;
//     height: 60%;
//     object-fit: cover;
//     border-radius: 0.5rem;
//   }
// `;

// const More = styled.div`
//   font-size: 0.8vw;
//   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
//   position: absolute;
//   bottom: 10px;
//   width: 100%;
//   padding: 0.5rem;
//   background-color: ${colors.tertiary};
//   opacity: ${(props) => (props.visible ? 1 : 0)};
//   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
//   transition: opacity 0.3s, transform 0.3s;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 0.5rem;
//   cursor: pointer;
// `;

// const BookContainer = styled.div`
//   position: relative;

//   &:hover ${More} {
//     visibility: ${(props) => (props.hovered ? "visible" : "hidden")};
//     opacity: ${(props) => (props.hovered ? 1 : 0)};
//     transform: translateY(${(props) => (props.hovered ? "0%" : "-100%")});
//   }
// `;

// const FictionContent = () => {
//   const [fictionImages, setFictionImages] = useState([]);
//   const [selectedBook, setSelectedBook] = useState(null);
//   const [hoveredBook, setHoveredBook] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [displayedBook, setDisplayedBook] = useState(null);

//   const navigate = useNavigate();

//   const checkLoginStatus = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/checkLoginStatus",
//         { withCredentials: true }
//       );
//       setIsLoggedIn(response.data.loggedIn);
//     } catch (error) {
//       console.error("Error checking login status:", error);
//     }
//   };

//   const fetchFictionImages = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/images/Fiction", {
//         withCredentials: true,
//       });
//       setFictionImages(response.data);
//     } catch (error) {
//       console.error("Error fetching fiction images:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchData = async () => {
//       await fetchFictionImages();
//       await checkLoginStatus();
//     };

//     fetchData();
//   }, []); // Run only once on component mount

//   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

//   const handleMoreClick = (book) => {
//     setDisplayedBook(book); // Update displayedBook state
//     setSelectedBook((prevSelectedBook) => {
//       const newSelectedBook = [...prevSelectedBook, book];
//       console.log("Selected Book:", newSelectedBook);
//       return newSelectedBook;
//     });
//   };
//   };

//   const handleMouseEnter = (book) => {
//     setHoveredBook(book);
//   };

//   const handleMouseLeave = () => {
//     setHoveredBook(null);
//   };

//   const handleBuyClick = async () => {
//     try {
//       if (isLoggedIn) {
//         const totalPrice = (selectedBook || [])
//           .reduce((sum, book) => sum + book.price, 0)
//           .toFixed(2);
//         navigate("/payment", {
//           state: {
//             selectedBook: [...(selectedBook || []), book],
//             totalPrice: totalPrice,
//           },
//         });
//         await checkLoginStatus();
//       } else {
//         navigate("/register");
//       }
//     } catch (error) {
//       console.error("Error checking login status:", error);
//     }
//   };

//   const handleCloseDetails = () => {
//     setDisplayedBook(null); //
//     setSelectedBook(null);
//   };

//   return (
//     <Container>
//       <h1> Best Sellers For Fiction Genre</h1>
//       <Books>
//         {fictionImages.map((image, index) => (
//           <BookContainer
//             key={image._id}
//             hovered={hoveredBook === image || selectedBook === image}
//             onMouseEnter={() => handleMouseEnter(image)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <BooksContent>
//               <img
//                 src={getImageUrl(image._id)}
//                 alt="Book Cover"
//                 crossOrigin="anonymous"
//               />
//               <BooksInfo>
//                 <Price>Price: ${image.price.toFixed(2)}</Price>
//                 <Availability>In-stock</Availability>
//               </BooksInfo>
//               <Buy>
//                 <button onClick={handleBuyClick}>Buy</button>
//                 Available
//               </Buy>
//             </BooksContent>
//             <More
//               visible={hoveredBook === image || selectedBook === image}
//               onClick={() => handleMoreClick(image)}
//             >
//               More Details
//             </More>
//           </BookContainer>
//         ))}
//       </Books>
//       {displayedBook && (
//         <BookDetails book={displayedBook} onClose={handleCloseDetails} />
//       )}
//     </Container>
//   );
// };

// export default FictionContent;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../components/Colors";
import axios from "axios";
import BookDetails from "./BookDetails";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;

  & h1 {
    font-size: 2vw;
  }
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
  font-size: 1vw;

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
  height: 45vh;
  overflow-x: scroll;
  width: auto;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const BooksContent = styled.div`
  display: flex;
  min-width: 12vw;
  width: 100%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: ${colors.tertiary};

  & img {
    width: 60%;
    height: 60%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const More = styled.div`
  font-size: 0.8vw;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  position: absolute;
  bottom: 10px;
  width: 100%;
  padding: 0.5rem;
  background-color: ${colors.tertiary};
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
  transition: opacity 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const BookContainer = styled.div`
  position: relative;

  &:hover ${More} {
    visibility: ${(props) => (props.hovered ? "visible" : "hidden")};
    opacity: ${(props) => (props.hovered ? 1 : 0)};
    transform: translateY(${(props) => (props.hovered ? "0%" : "-100%")});
  }
`;

const FictionContent = () => {
  const [fictionImages, setFictionImages] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [hoveredBook, setHoveredBook] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [displayedBook, setDisplayedBook] = useState(null);

  const navigate = useNavigate();

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/checkLoginStatus",
        { withCredentials: true }
      );
      setIsLoggedIn(response.data.loggedIn);
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  const fetchFictionImages = async () => {
    try {
      const response = await axios.get("http://localhost:5000/images/Fiction", {
        withCredentials: true,
      });
      setFictionImages(response.data);
    } catch (error) {
      console.error("Error fetching fiction images:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchFictionImages();
      await checkLoginStatus();
    };

    fetchData();
  }, []); // Run only once on component mount

  const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

  const handleMoreClick = (book) => {
    setDisplayedBook(book);
    setSelectedBook((prevSelectedBook) => {
      const newSelectedBook = [...prevSelectedBook, book];
      return newSelectedBook;
    });
  };

  const handleMouseEnter = (book) => {
    setHoveredBook(book);
  };

  const handleMouseLeave = () => {
    setHoveredBook(null);
  };

  const handleBuyClick = async (book) => {
    try {
      if (isLoggedIn) {
        const updatedSelectedBooks = [...selectedBook , book];
        const totalPrice = (selectedBook || [])
          .reduce((sum, book) => sum + book.price, 0)
          .toFixed(2);
        navigate("/payment", {
          state: {
            selectedBook: [...(selectedBook || []), book],
            totalPrice: totalPrice,
          },
        });
        await checkLoginStatus();
      } else {
        navigate("/register", { state: { selectedBook: [book] } });
      }
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  const handleCloseDetails = () => {
    setDisplayedBook(null);
    setSelectedBook([]);
  };

  return (
    <Container>
      <h1> Best Sellers For Fiction Genre</h1>
      <Books>
        {fictionImages.map((image, index) => (
          <BookContainer
            key={image._id}
            hovered={hoveredBook === image || selectedBook === image}
            onMouseEnter={() => handleMouseEnter(image)}
            onMouseLeave={handleMouseLeave}
          >
            <BooksContent>
              <img
                src={getImageUrl(image._id)}
                alt="Book Cover"
                crossOrigin="anonymous"
              />
              <BooksInfo>
                <Price>Price: ${image.price.toFixed(2)}</Price>
                <Availability>In-stock</Availability>
              </BooksInfo>
              <Buy>
                <button onClick={() => handleBuyClick(image)}>Buy</button>
                Available
              </Buy>
            </BooksContent>
            <More
              visible={hoveredBook === image || selectedBook === image}
              onClick={() => handleMoreClick(image)}
            >
              More Details
            </More>
          </BookContainer>
        ))}
      </Books>
      {displayedBook && (
        <BookDetails book={displayedBook} onClose={handleCloseDetails} />
      )}
    </Container>
  );
};

export default FictionContent;
