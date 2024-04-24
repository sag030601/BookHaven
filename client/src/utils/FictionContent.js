// // // // // // // import React, { useEffect, useState } from "react";
// // // // // // // import { useNavigate } from "react-router-dom";
// // // // // // // import styled from "styled-components";
// // // // // // // import { colors } from "../components/Colors";
// // // // // // // import axios from "axios";
// // // // // // // import BookDetails from "./BookDetails";

// // // // // // // const Container = styled.div`
// // // // // // //   width: 90%;
// // // // // // //   margin: 0 auto;
// // // // // // //   position: relative;

// // // // // // //   & h1 {
// // // // // // //     font-size: 2vw;
// // // // // // //   }
// // // // // // // `;

// // // // // // // const BooksInfo = styled.div`
// // // // // // //   display: flex;
// // // // // // //   gap: 10%;
// // // // // // //   justify-content: space-between;
// // // // // // //   align-items: center;
// // // // // // //   margin: 5px 0;
// // // // // // //   width: 70%;
// // // // // // // `;

// // // // // // // const Buy = styled.div`
// // // // // // //   width: 70%;
// // // // // // //   display: flex;
// // // // // // //   justify-content: space-between;
// // // // // // //   gap: 10%;
// // // // // // //   font-size: 1vw;

// // // // // // //   & button {
// // // // // // //     border-radius: 0.5rem;
// // // // // // //     box-shadow: none;
// // // // // // //     border: 1px solid;
// // // // // // //     padding: 0 1vw;
// // // // // // //   }
// // // // // // // `;

// // // // // // // const Availability = styled.div`
// // // // // // //   font-size: 0.8vw;
// // // // // // //   color: ${colors.secondary};
// // // // // // // `;

// // // // // // // const Price = styled.div`
// // // // // // //   font-size: 0.8vw;
// // // // // // //   color: ${colors.secondary};
// // // // // // // `;

// // // // // // // const Books = styled.div`
// // // // // // //   display: flex;
// // // // // // //   justify-content: space-between;
// // // // // // //   gap: 5%;
// // // // // // //   height: 45vh;
// // // // // // //   overflow-x: scroll;
// // // // // // //   width: auto;

// // // // // // //   &::-webkit-scrollbar {
// // // // // // //     width: 0px;
// // // // // // //   }
// // // // // // // `;

// // // // // // // const BooksContent = styled.div`
// // // // // // //   display: flex;
// // // // // // //   min-width: 12vw;
// // // // // // //   width: 100%;
// // // // // // //   box-sizing: border-box;
// // // // // // //   flex-direction: column;
// // // // // // //   justify-content: center;
// // // // // // //   align-items: center;
// // // // // // //   border-radius: 1rem;
// // // // // // //   padding: 0.5rem;
// // // // // // //   background-color: ${colors.tertiary};

// // // // // // //   & img {
// // // // // // //     width: 60%;
// // // // // // //     height: 60%;
// // // // // // //     object-fit: cover;
// // // // // // //     border-radius: 0.5rem;
// // // // // // //   }
// // // // // // // `;

// // // // // // // const More = styled.div`
// // // // // // //   font-size: 0.8vw;
// // // // // // //   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
// // // // // // //   position: absolute;
// // // // // // //   bottom: 10px;
// // // // // // //   width: 100%;
// // // // // // //   padding: 0.5rem;
// // // // // // //   background-color: ${colors.tertiary};
// // // // // // //   opacity: ${(props) => (props.visible ? 1 : 0)};
// // // // // // //   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
// // // // // // //   transition: opacity 0.3s, transform 0.3s;
// // // // // // //   display: flex;
// // // // // // //   align-items: center;
// // // // // // //   justify-content: center;
// // // // // // //   border-radius: 0.5rem;
// // // // // // //   cursor: pointer;
// // // // // // // `;

// // // // // // // const BookContainer = styled.div`
// // // // // // //   position: relative;

// // // // // // //   &:hover ${More} {
// // // // // // //     visibility: ${(props) => (props.hovered ? "visible" : "hidden")};
// // // // // // //     opacity: ${(props) => (props.hovered ? 1 : 0)};
// // // // // // //     transform: translateY(${(props) => (props.hovered ? "0%" : "-100%")});
// // // // // // //   }
// // // // // // // `;

// // // // // // // const FictionContent = ({activeGenre}) => {
// // // // // // //   const [fictionImages, setFictionImages] = useState([]);
// // // // // // //   const [selectedBook, setSelectedBook] = useState([]);
// // // // // // //   const [hoveredBook, setHoveredBook] = useState(null);
// // // // // // //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // // // // // //   const [displayedBook, setDisplayedBook] = useState(null);

// // // // // // //   const navigate = useNavigate();

// // // // // // //   const checkLoginStatus = async () => {
// // // // // // //     try {
// // // // // // //       const response = await axios.get(
// // // // // // //         "http://localhost:5000/checkLoginStatus",
// // // // // // //         { withCredentials: true }
// // // // // // //       );
// // // // // // //       setIsLoggedIn(response.data.loggedIn);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error checking login status:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const fetchFictionImages = async () => {
// // // // // // //     try {
// // // // // // //       const response = await axios.get(`http://localhost:5000/images/${activeGenre}`, {
// // // // // // //         withCredentials: true,
// // // // // // //       });
// // // // // // //       console.log(response.data)
// // // // // // //       setFictionImages(response.data);
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error fetching fiction images:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchData = async () => {
// // // // // // //       await fetchFictionImages();
// // // // // // //       await checkLoginStatus();
// // // // // // //     };

// // // // // // //     fetchData();
// // // // // // //   }, []); // Run only once on component mount

// // // // // // //   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

// // // // // // //   const handleMoreClick = (book) => {
// // // // // // //     setDisplayedBook(book);
// // // // // // //     setSelectedBook((prevSelectedBook) => {
// // // // // // //       const newSelectedBook = [...prevSelectedBook, book];
// // // // // // //       return newSelectedBook;
// // // // // // //     });
// // // // // // //   };

// // // // // // //   const handleMouseEnter = (book) => {
// // // // // // //     setHoveredBook(book);
// // // // // // //   };

// // // // // // //   const handleMouseLeave = () => {
// // // // // // //     setHoveredBook(null);
// // // // // // //   };

// // // // // // //   const handleBuyClick = async (book) => {
// // // // // // //     try {
// // // // // // //       if (isLoggedIn) {
// // // // // // //         const updatedSelectedBooks = [...selectedBook , book];
// // // // // // //         setSelectedBook(updatedSelectedBooks);
// // // // // // //         const totalPrice = updatedSelectedBooks.reduce(
// // // // // // //         (sum, book) => sum + book.price,
// // // // // // //         0
// // // // // // //       ).toFixed(2);
// // // // // // //         navigate("/payment", {
// // // // // // //           state: {
// // // // // // //             selectedBook: updatedSelectedBooks,
// // // // // // //             totalPrice: totalPrice,
// // // // // // //           },
// // // // // // //         });
// // // // // // //         await checkLoginStatus();
// // // // // // //       } else {
// // // // // // //         navigate("/register", { state: { selectedBook: [book] } });
// // // // // // //       }
// // // // // // //     } catch (error) {
// // // // // // //       console.error("Error checking login status:", error);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleCloseDetails = () => {
// // // // // // //     setDisplayedBook(null);
// // // // // // //     setSelectedBook([]);
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Container>
// // // // // // //       <h1> Best Sellers For Fiction Genre</h1>
// // // // // // //       <Books>
// // // // // // //         {fictionImages.map((image, index) => (
// // // // // // //           <BookContainer
// // // // // // //             key={image._id}
// // // // // // //             hovered={hoveredBook === image || selectedBook.some(book => book._id === image._id)}
// // // // // // //             onMouseEnter={() => handleMouseEnter(image)}
// // // // // // //             onMouseLeave={handleMouseLeave}
// // // // // // //           >
// // // // // // //             <BooksContent>
// // // // // // //               <img
// // // // // // //                 src={getImageUrl(image._id)}
// // // // // // //                 alt="Book Cover"
// // // // // // //                 crossOrigin="anonymous"
// // // // // // //               />
// // // // // // //               <BooksInfo>
// // // // // // //                 <Price>Price: ${image.price.toFixed(2)}</Price>
// // // // // // //                 <Availability>In-stock</Availability>
// // // // // // //               </BooksInfo>
// // // // // // //               <Buy>
// // // // // // //                 <button onClick={() => handleBuyClick(image)}>Buy</button>
// // // // // // //                 Available
// // // // // // //               </Buy>
// // // // // // //             </BooksContent>
// // // // // // //             <More
// // // // // // //               visible={hoveredBook === image || selectedBook === image}
// // // // // // //               onClick={() => handleMoreClick(image)}
// // // // // // //             >
// // // // // // //               More Details
// // // // // // //             </More>
// // // // // // //           </BookContainer>
// // // // // // //         ))}
// // // // // // //       </Books>
// // // // // // //       {displayedBook && (
// // // // // // //         <BookDetails book={displayedBook} onClose={handleCloseDetails} />
// // // // // // //       )}
// // // // // // //     </Container>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default FictionContent;

// // // // // // import React, { useEffect, useState } from "react";
// // // // // // import { useNavigate } from "react-router-dom";
// // // // // // import styled from "styled-components";
// // // // // // import { colors } from "../components/Colors";
// // // // // // import axios from "axios";
// // // // // // import BookDetails from "./BookDetails";

// // // // // // const Container = styled.div`
// // // // // //   width: 90%;
// // // // // //   margin: 0 auto;
// // // // // //   position: relative;

// // // // // //   & h1 {
// // // // // //     font-size: 2vw;
// // // // // //   }
// // // // // // `;

// // // // // // const BooksInfo = styled.div`
// // // // // //   display: flex;
// // // // // //   gap: 10%;
// // // // // //   justify-content: space-between;
// // // // // //   align-items: center;
// // // // // //   margin: 5px 0;
// // // // // //   width: 70%;
// // // // // // `;

// // // // // // const Buy = styled.div`
// // // // // //   width: 70%;
// // // // // //   display: flex;
// // // // // //   justify-content: space-between;
// // // // // //   gap: 10%;
// // // // // //   font-size: 1vw;

// // // // // //   & button {
// // // // // //     border-radius: 0.5rem;
// // // // // //     box-shadow: none;
// // // // // //     border: 1px solid;
// // // // // //     padding: 0 1vw;
// // // // // //   }
// // // // // // `;

// // // // // // const Availability = styled.div`
// // // // // //   font-size: 0.8vw;
// // // // // //   color: ${colors.secondary};
// // // // // // `;

// // // // // // const Price = styled.div`
// // // // // //   font-size: 0.8vw;
// // // // // //   color: ${colors.secondary};
// // // // // // `;

// // // // // // const Books = styled.div`
// // // // // //   display: flex;
// // // // // //   justify-content: space-between;
// // // // // //   gap: 5%;
// // // // // //   height: 45vh;
// // // // // //   overflow-x: scroll;
// // // // // //   width: auto;

// // // // // //   &::-webkit-scrollbar {
// // // // // //     width: 0px;
// // // // // //   }
// // // // // // `;

// // // // // // const BooksContent = styled.div`
// // // // // //   display: flex;
// // // // // //   min-width: 12vw;
// // // // // //   width: 100%;
// // // // // //   box-sizing: border-box;
// // // // // //   flex-direction: column;
// // // // // //   justify-content: center;
// // // // // //   align-items: center;
// // // // // //   border-radius: 1rem;
// // // // // //   padding: 0.5rem;
// // // // // //   background-color: ${colors.tertiary};

// // // // // //   & img {
// // // // // //     width: 60%;
// // // // // //     height: 60%;
// // // // // //     object-fit: cover;
// // // // // //     border-radius: 0.5rem;
// // // // // //   }
// // // // // // `;

// // // // // // const More = styled.div`
// // // // // //   font-size: 0.8vw;
// // // // // //   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
// // // // // //   position: absolute;
// // // // // //   bottom: 10px;
// // // // // //   width: 100%;
// // // // // //   padding: 0.5rem;
// // // // // //   background-color: ${colors.tertiary};
// // // // // //   opacity: ${(props) => (props.visible ? 1 : 0)};
// // // // // //   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
// // // // // //   transition: opacity 0.3s, transform 0.3s;
// // // // // //   display: flex;
// // // // // //   align-items: center;
// // // // // //   justify-content: center;
// // // // // //   border-radius: 0.5rem;
// // // // // //   cursor: pointer;
// // // // // // `;

// // // // // // const BookContainer = styled.div`
// // // // // //   position: relative;

// // // // // //   &:hover ${More} {
// // // // // //     visibility: ${(props) => (props.hovered ? "visible" : "hidden")};
// // // // // //     opacity: ${(props) => (props.hovered ? 1 : 0)};
// // // // // //     transform: translateY(${(props) => (props.hovered ? "0%" : "-100%")});
// // // // // //   }
// // // // // // `;

// // // // // // const fetchFictionImages = async (activeGenre) => {
// // // // // //   try {
// // // // // //     const response = await axios.get(
// // // // // //       `http://localhost:5000/images/${activeGenre}`,
// // // // // //       {
// // // // // //         withCredentials: true,
// // // // // //       }
// // // // // //     );
// // // // // //     console.log(response.data);
// // // // // //     return response.data;
// // // // // //   } catch (error) {
// // // // // //     console.error("Error fetching fiction images:", error);
// // // // // //     return [];
// // // // // //   }
// // // // // // };

// // // // // // const FictionContent = ({ activeGenre }) => {
// // // // // //   const [fictionImages, setFictionImages] = useState([]);
// // // // // //   const [selectedBook, setSelectedBook] = useState([]);
// // // // // //   const [hoveredBook, setHoveredBook] = useState(null);
// // // // // //   const [isLoggedIn, setIsLoggedIn] = useState(false);
// // // // // //   const [displayedBook, setDisplayedBook] = useState(null);

// // // // // //   const navigate = useNavigate();

// // // // // //   const checkLoginStatus = async () => {
// // // // // //     try {
// // // // // //       const response = await axios.get(
// // // // // //         "http://localhost:5000/checkLoginStatus",
// // // // // //         {
// // // // // //           withCredentials: true,
// // // // // //         }
// // // // // //       );
// // // // // //       setIsLoggedIn(response.data.loggedIn);
// // // // // //     } catch (error) {
// // // // // //       console.error("Error checking login status:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   useEffect(() => {
// // // // // //     const fetchData = async () => {
// // // // // //       const fictionImagesData = await fetchFictionImages(activeGenre);
// // // // // //       setFictionImages(fictionImagesData);
// // // // // //       await checkLoginStatus();
// // // // // //     };

// // // // // //     fetchData();
// // // // // //   }, [activeGenre]); // Run only once on component mount or when activeGenre changes

// // // // // //   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

// // // // // //   const handleMoreClick = (book) => {
// // // // // //     setDisplayedBook(book);
// // // // // //     setSelectedBook((prevSelectedBook) => {
// // // // // //       const newSelectedBook = [...prevSelectedBook, book];
// // // // // //       return newSelectedBook;
// // // // // //     });
// // // // // //   };

// // // // // //   const handleMouseEnter = (book) => {
// // // // // //     setHoveredBook(book);
// // // // // //   };

// // // // // //   const handleMouseLeave = () => {
// // // // // //     setHoveredBook(null);
// // // // // //   };

// // // // // //   const handleBuyClick = async (book) => {
// // // // // //     try {
// // // // // //       if (isLoggedIn) {
// // // // // //         const updatedSelectedBooks = [...selectedBook, book];
// // // // // //         setSelectedBook(updatedSelectedBooks);
// // // // // //         const totalPrice = updatedSelectedBooks
// // // // // //           .reduce((sum, book) => sum + book.price, 0)
// // // // // //           .toFixed(2);
// // // // // //         navigate("/payment", {
// // // // // //           state: {
// // // // // //             selectedBook: updatedSelectedBooks,
// // // // // //             totalPrice: totalPrice,
// // // // // //           },
// // // // // //         });
// // // // // //         await checkLoginStatus();
// // // // // //       } else {
// // // // // //         navigate("/register", { state: { selectedBook: [book] } });
// // // // // //       }
// // // // // //     } catch (error) {
// // // // // //       console.error("Error checking login status:", error);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleCloseDetails = () => {
// // // // // //     setDisplayedBook(null);
// // // // // //     setSelectedBook([]);
// // // // // //   };

// // // // // //   return (
// // // // // //     <Container>
// // // // // //       <h1> Best Sellers For Fiction Genre</h1>
// // // // // //       <Books>
// // // // // //         {fictionImages.map((image, index) => (
// // // // // //           <BookContainer
// // // // // //             key={image._id}
// // // // // //             hovered={
// // // // // //               hoveredBook === image ||
// // // // // //               selectedBook.some((book) => book._id === image._id)
// // // // // //             }
// // // // // //             onMouseEnter={() => handleMouseEnter(image)}
// // // // // //             onMouseLeave={handleMouseLeave}
// // // // // //           >
// // // // // //             <BooksContent>
// // // // // //               <img
// // // // // //                 src={getImageUrl(image._id)}
// // // // // //                 alt="Book Cover"
// // // // // //                 crossOrigin="anonymous"
// // // // // //               />
// // // // // //               <BooksInfo>
// // // // // //                 <Price>Price: ${image.price.toFixed(2)}</Price>
// // // // // //                 <Availability>In-stock</Availability>
// // // // // //               </BooksInfo>
// // // // // //               <Buy>
// // // // // //                 <button onClick={() => handleBuyClick(image)}>Buy</button>
// // // // // //                 Available
// // // // // //               </Buy>
// // // // // //             </BooksContent>
// // // // // //             <More
// // // // // //               visible={
// // // // // //                 hoveredBook === image ||
// // // // // //                 selectedBook.some((book) => book._id === image._id)
// // // // // //               }
// // // // // //               onClick={() => handleMoreClick(image)}
// // // // // //             >
// // // // // //               More Details
// // // // // //             </More>
// // // // // //           </BookContainer>
// // // // // //         ))}
// // // // // //       </Books>
// // // // // //       {displayedBook && (
// // // // // //         <BookDetails book={displayedBook} onClose={handleCloseDetails} />
// // // // // //       )}
// // // // // //     </Container>
// // // // // //   );
// // // // // // };

// // // // // // export default FictionContent;

// // // // // import React, { useEffect, useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import styled from "styled-components";
// // // // // import axios from "axios";
// // // // // import BookDetails from "./BookDetails";
// // // // // import { useBookContext } from "../utils/BookContext";

// // // // // const Container = styled.div`
// // // // //   width: 90%;
// // // // //   margin: 0 auto;
// // // // //   position: relative;

// // // // //   & h1 {
// // // // //     font-size: 2vw;
// // // // //   }
// // // // // `;

// // // // // const Books = styled.div`
// // // // //   display: flex;
// // // // //   justify-content: space-between;
// // // // //   gap: 5%;
// // // // //   height: 45vh;
// // // // //   width: auto;
// // // // //   flex-wrap: wrap;

// // // // //   &::-webkit-scrollbar {
// // // // //     width: 0px;
// // // // //   }
// // // // // `;

// // // // // const BookContainer = styled.div`
// // // // //   position: relative;
// // // // //   height: 100%;
// // // // //   width: 14vw;
// // // // // `;

// // // // // const BooksContent = styled.div`
// // // // //   display: flex;
// // // // //   gap: 2%;
// // // // //   height: 85%;
// // // // //   box-sizing: border-box;
// // // // //   flex-direction: column;
// // // // //   justify-content: center;
// // // // //   align-items: center;
// // // // //   border-radius: 1rem;
// // // // //   padding: 1rem;
// // // // //   background-color: #e0e0e0;

// // // // //   & img {
// // // // //     width: 60%;
// // // // //     height: 65%;
// // // // //     object-fit: cover;
// // // // //     border-radius: 0.5rem;
// // // // //   }
// // // // // `;

// // // // // const More = styled.div`
// // // // //   font-size: 0.8vw;
// // // // //   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
// // // // //   position: absolute;
// // // // //   bottom: 0%;
// // // // //   width: 100%;
// // // // //   padding: 0.5rem 0;
// // // // //   background-color: #e0e0e0;
// // // // //   opacity: ${(props) => (props.visible ? 1 : 0)};
// // // // //   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
// // // // //   transition: opacity 0.3s, transform 0.3s;
// // // // //   display: flex;
// // // // //   align-items: center;
// // // // //   justify-content: center;
// // // // //   border-radius: 0.5rem;
// // // // //   cursor: pointer;
// // // // // `;

// // // // // const BuyButton = styled.button`
// // // // //   border-radius: 0.5rem;
// // // // //   box-shadow: none;
// // // // //   border: 1px solid;
// // // // //   padding: 0 1vw;
// // // // //   height: 10%;
// // // // //   width: 40%;
// // // // //   background: transparent;
// // // // // `;

// // // // // const FictionContent = ({ activeGenre }) => {
// // // // //   const [fictionImages, setFictionImages] = useState([]);
// // // // //   const [hoveredBook, setHoveredBook] = useState(null);
// // // // //   const { selectedBooks, setBooks } = useBookContext();
// // // // //   const [displayedBook, setDisplayedBook] = useState(null);
// // // // //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Define isLoggedIn state

// // // // //   const navigate = useNavigate();

// // // // //   useEffect(() => {
// // // // //     const fetchFictionImages = async () => {
// // // // //       try {
// // // // //         const response = await axios.get(
// // // // //           `http://localhost:5000/images/${activeGenre}`,
// // // // //           { withCredentials: true }
// // // // //         );
// // // // //         setFictionImages(response.data);
// // // // //       } catch (error) {
// // // // //         console.error("Error fetching fiction images:", error);
// // // // //       }
// // // // //     };

// // // // //     fetchFictionImages();
// // // // //   }, [activeGenre]);

// // // // //   useEffect(() => {
// // // // //     console.log("isLoggedIn updated:", isLoggedIn);
// // // // //   }, [isLoggedIn]);

// // // // //     const checkLoginStatus = async () => {
// // // // //     try {
// // // // //       const response = await axios.get(
// // // // //         "http://localhost:5000/checkLoginStatus",
// // // // //         {
// // // // //           withCredentials: true,
// // // // //         }
// // // // //       );
// // // // //       console.log(response.data)
// // // // //       setIsLoggedIn(response.data.loggedIn);
// // // // //     } catch (error) {
// // // // //       console.error("Error checking login status:", error);
// // // // //     }
// // // // //   };

// // // // //   const handleBuyClick = async (book) => {
// // // // //     try {
// // // // //       await checkLoginStatus();
// // // // //       if (isLoggedIn) {
// // // // //         // Add the selected book to the array in the context
// // // // //         setBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);

// // // // //         const totalPrice = selectedBooks
// // // // //           .reduce((sum, book) => sum + book.price, 0)
// // // // //           .toFixed(2);

// // // // //         navigate("/payment", {
// // // // //           state: {
// // // // //             selectedBook: [...selectedBooks, book], // Include the newly selected book
// // // // //             totalPrice: totalPrice,
// // // // //           },
// // // // //         });
// // // // //       } else {
// // // // //         navigate("/register", { state: { selectedBook: [book] } });
// // // // //       }
// // // // //     } catch (error) {
// // // // //       console.error("Error checking login status:", error);
// // // // //     }
// // // // //   };

// // // // //   // const handleMoreClick = async (book) => {
// // // // //   //   try {
// // // // //   //     const response = await axios.get(
// // // // //   //       "http://localhost:5000/checkLoginStatus",
// // // // //   //       { withCredentials: true }
// // // // //   //     );
// // // // //   //     const isLoggedIn = response.data.loggedIn;

// // // // //   //     if (isLoggedIn) {
// // // // //   //       setBooks((prevSelectedBooks) => [...prevSelectedBooks, book]);
// // // // //   //       navigate("/payment");
// // // // //   //     } else {
// // // // //   //       navigate("/register", { state: { selectedBook: [book] } });
// // // // //   //     }
// // // // //   //   } catch (error) {
// // // // //   //     console.error("Error checking login status:", error);
// // // // //   //   }
// // // // //   // };

// // // // //   const handleMoreClick = (book) => {
// // // // //     setDisplayedBook(book);
// // // // //     setBooks((prevSelectedBook) => {
// // // // //       const newSelectedBook = [...prevSelectedBook, book];
// // // // //       return newSelectedBook;
// // // // //     });
// // // // //   };

// // // // //   const handleMouseEnter = (book) => {
// // // // //     setHoveredBook(book);
// // // // //   };

// // // // //   const handleMouseLeave = () => {
// // // // //     setHoveredBook(null);
// // // // //   };

// // // // //   const handleCloseDetails = () => {
// // // // //     setDisplayedBook(null);
// // // // //     setBooks([]);
// // // // //   };

// // // // //   const BookTitle = styled.div`
// // // // //     font-size: 1vw; /* Adjust as needed */
// // // // //     max-width: 80%;
// // // // //   `;

// // // // //   const BookPrice = styled.div`
// // // // //     font-size: 0.8vw; /* Adjust as needed */
// // // // //   `;

// // // // //   return (
// // // // //     <Container>
// // // // //       <h1>Best Sellers For Fiction Genre</h1>
// // // // //       <Books>
// // // // //         {fictionImages.map((image, index) => (
// // // // //           <BookContainer
// // // // //             key={image._id}
// // // // //             onMouseEnter={() => handleMouseEnter(image)}
// // // // //             onMouseLeave={handleMouseLeave}
// // // // //           >
// // // // //             <BooksContent>
// // // // //               <img
// // // // //                 src={`http://localhost:5000/image/${image._id}`}
// // // // //                 alt="Book Cover"
// // // // //               />
// // // // //               <BookTitle>{image.title}</BookTitle>
// // // // //               <BookPrice>Price: ${image.price.toFixed(2)}</BookPrice>{" "}
// // // // //               {/* Render price */}
// // // // //               <BuyButton onClick={() => handleBuyClick(image)}>Buy</BuyButton>
// // // // //               <More
// // // // //                 visible={hoveredBook === image}
// // // // //                 onClick={() => handleMoreClick(image)}
// // // // //               >
// // // // //                 More Details
// // // // //               </More>
// // // // //             </BooksContent>
// // // // //           </BookContainer>
// // // // //         ))}
// // // // //       </Books>
// // // // //       {displayedBook && (
// // // // //         <BookDetails book={displayedBook} onClose={handleCloseDetails} />
// // // // //       )}
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default FictionContent;

// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import styled from "styled-components";
// // import axios from "axios";
// // import BookDetails from "./BookDetails";
// // import { useBookContext } from "../utils/BookContext";

// // const Container = styled.div`
// //   width: 90%;
// //   margin: 0 auto;
// //   position: relative;

// //   & h1 {
// //     font-size: 2vw;
// //   }
// // `;

// // const Books = styled.div`
// //   display: flex;
// //   gap: 5%;
// //   height: 45vh;
// //   width: auto;
// //   flex-wrap: wrap;

// //   &::-webkit-scrollbar {
// //     width: 0px;
// //   }
// // `;

// // const BookContainer = styled.div`
// //   position: relative;
// //   height: 100%;
// //   width: 14vw;
// // `;

// // const BooksContent = styled.div`
// //   display: flex;
// //   gap: 2%;
// //   height: 85%;
// //   box-sizing: border-box;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   border-radius: 1rem;
// //   padding: 1rem;
// //   background-color: #e0e0e0;

// //   & img {
// //     width: 60%;
// //     height: 65%;
// //     object-fit: cover;
// //     border-radius: 0.5rem;
// //   }
// // `;

// // const More = styled.div`
// //   font-size: 0.8vw;
// //   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
// //   position: absolute;
// //   bottom: 0%;
// //   width: 100%;
// //   padding: 0.5rem 0;
// //   background-color: #e0e0e0;
// //   opacity: ${(props) => (props.visible ? 1 : 0)};
// //   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
// //   transition: opacity 0.3s, transform 0.3s;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   border-radius: 0.5rem;
// //   cursor: pointer;
// // `;

// // const BuyButton = styled.button`
// //   border-radius: 0.5rem;
// //   box-shadow: none;
// //   border: 1px solid;
// //   padding: 0 1vw;
// //   height: 10%;
// //   width: 40%;
// //   background: transparent;
// // `;

// // const FictionContent = ({ activeGenre ,selectedSortOption }) => {
// //   const [fictionImages, setFictionImages] = useState([]);
// //   const [hoveredBook, setHoveredBook] = useState(null);
// //   const { selectedBooks, setBooks } = useBookContext();
// //   const [displayedBook, setDisplayedBook] = useState(null);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Define isLoggedIn state

// //   const navigate = useNavigate();

// //   const checkLoginStatus = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:5000/checkLoginStatus",
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       setIsLoggedIn(response.data.loggedIn);
// //     } catch (error) {
// //       console.error("Error checking login status:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchFictionImages = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:5000/images/${activeGenre}`,
// //           { withCredentials: true }
// //         );
// //         setFictionImages(response.data);
// //       } catch (error) {
// //         console.error("Error fetching fiction images:", error);
// //       }
// //     };

// //     fetchFictionImages();
// //   }, [activeGenre]);

// //   useEffect(() => {
// //     checkLoginStatus();
// //   }, [selectedBooks]);

// //   const handleBuyClick = async (book) => {
// //     try {
// //       await checkLoginStatus();
// //       if (isLoggedIn) {
// //         // Concatenate the newly selected book with the previously selected books
// //         const newSelectedBooks = [...selectedBooks, book];
// //         const totalPrice = newSelectedBooks.reduce((sum, book) => sum + book.price, 0).toFixed(2);
// //         console.log("new book",newSelectedBooks)
// //         setBooks(newSelectedBooks); // Update the selectedBooks state with the new list of selected books

// //         navigate("/payment", {

// //           state: {
// //             selectedBook: newSelectedBooks,
// //             totalPrice: totalPrice,
// //           },
// //         });
// //       } else {
// //         navigate("/register", { state: { selectedBook: [book] } });
// //       }
// //     } catch (error) {
// //       console.error("Error checking login status:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     checkLoginStatus();
// //   }, [selectedBooks]);

// //   const handleMoreClick = (book) => {
// //     if (!selectedBooks.some(selectedBook => selectedBook._id === book._id)) {
// //       // Add the book to selectedBooks only if it's not already present
// //       setBooks(prevSelectedBook => [...prevSelectedBook, book]);
// //     }
// //     setDisplayedBook(book);
// //   };

// //   const handleMouseEnter = (book) => {
// //     setHoveredBook(book);
// //   };

// //   const handleMouseLeave = () => {
// //     setHoveredBook(null);
// //   };

// //   const handleCloseDetails = () => {
// //     setDisplayedBook(null);
// //     setBooks([]);
// //   };

// //   const BookTitle = styled.div`
// //     font-size: 1vw; /* Adjust as needed */
// //     max-width: 80%;
// //   `;

// //   const BookPrice = styled.div`
// //     font-size: 0.8vw; /* Adjust as needed */
// //   `;

// //   return (
// //     <Container>
// //       <h1>Best Sellers For Fiction Genre</h1>
// //       <Books>
// //         {fictionImages.map((image, index) => (
// //           <BookContainer
// //             key={image._id}
// //             onMouseEnter={() => handleMouseEnter(image)}
// //             onMouseLeave={handleMouseLeave}
// //           >
// //             <BooksContent>
// //               <img
// //                 src={`http://localhost:5000/image/${image._id}`}
// //                 alt="Book Cover"
// //               />
// //               <BookTitle>{image.title}</BookTitle>
// //               <BookPrice>Price: ${image.price.toFixed(2)}</BookPrice>{" "}
// //               {/* Render price */}
// //               <BuyButton onClick={() => handleBuyClick(image)}>Buy</BuyButton>
// //               <More
// //                 visible={hoveredBook === image}
// //                 onClick={() => handleMoreClick(image)}
// //               >
// //                 More Details
// //               </More>
// //             </BooksContent>
// //           </BookContainer>
// //         ))}
// //       </Books>
// //       {displayedBook && (
// //         <BookDetails book={displayedBook} onClose={handleCloseDetails} />
// //       )}
// //     </Container>
// //   );
// // };

// // export default FictionContent;

// // // FictionContent.js
// // import React, { useEffect, useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import styled from "styled-components";
// // import axios from "axios";
// // import BookDetails from "./BookDetails";
// // import { useBookContext } from "../utils/BookContext";

// // const Container = styled.div`
// //   width: 90%;
// //   margin: 0 auto;
// //   position: relative;

// //   & h1 {
// //     font-size: 2vw;
// //   }
// // `;

// // const Books = styled.div`
// //   display: flex;
// //   gap: 5%;
// //   height: 45vh;
// //   width: auto;
// //   flex-wrap: wrap;

// //   &::-webkit-scrollbar {
// //     width: 0px;
// //   }
// // `;

// // const BookContainer = styled.div`
// //   position: relative;
// //   height: 100%;
// //   width: 14vw;
// // `;

// // const BooksContent = styled.div`
// //   display: flex;
// //   gap: 2%;
// //   height: 85%;
// //   box-sizing: border-box;
// //   flex-direction: column;
// //   justify-content: center;
// //   align-items: center;
// //   border-radius: 1rem;
// //   padding: 1rem;
// //   background-color: #e0e0e0;

// //   & img {
// //     width: 60%;
// //     height: 65%;
// //     object-fit: cover;
// //     border-radius: 0.5rem;
// //   }
// // `;

// // const More = styled.div`
// //   font-size: 0.8vw;
// //   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
// //   position: absolute;
// //   bottom: 0%;
// //   width: 100%;
// //   padding: 0.5rem 0;
// //   background-color: #e0e0e0;
// //   opacity: ${(props) => (props.visible ? 1 : 0)};
// //   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
// //   transition: opacity 0.3s, transform 0.3s;
// //   display: flex;
// //   align-items: center;
// //   justify-content: center;
// //   border-radius: 0.5rem;
// //   cursor: pointer;
// // `;

// // const BuyButton = styled.button`
// //   border-radius: 0.5rem;
// //   box-shadow: none;
// //   border: 1px solid;
// //   padding: 0 1vw;
// //   height: 10%;
// //   width: 40%;
// //   background: transparent;
// // `;

// // const FictionContent = ({ activeGenre }) => {
// //   const [fictionImages, setFictionImages] = useState([]);
// //   const [hoveredBook, setHoveredBook] = useState(null);
// //   const { selectedBooks, setBooks } = useBookContext();
// //   const [displayedBook, setDisplayedBook] = useState(null);
// //   const [isLoggedIn, setIsLoggedIn] = useState(false); // Define isLoggedIn state

// //   const navigate = useNavigate();

// //   const checkLoginStatus = async () => {
// //     try {
// //       const response = await axios.get(
// //         "http://localhost:5000/checkLoginStatus",
// //         {
// //           withCredentials: true,
// //         }
// //       );
// //       setIsLoggedIn(response.data.loggedIn);
// //     } catch (error) {
// //       console.error("Error checking login status:", error);
// //     }
// //   };

// //   useEffect(() => {
// //     const fetchFictionImages = async () => {
// //       try {
// //         const response = await axios.get(
// //           `http://localhost:5000/images/${activeGenre}`,
// //           { withCredentials: true }
// //         );
// //         setFictionImages(response.data);
// //       } catch (error) {
// //         console.error("Error fetching fiction images:", error);
// //       }
// //     };

// //     fetchFictionImages();
// //   }, [activeGenre]);

// //   useEffect(() => {
// //     checkLoginStatus();
// //   }, [selectedBooks]);

// //   const handleBuyClick = async (book) => {
// //     try {
// //       await checkLoginStatus();
// //       if (isLoggedIn) {
// //         // Send only the current book to payment
// //         navigate("/payment", {
// //           state: {
// //             selectedBook: [book],
// //             totalPrice: book.price.toFixed(2),
// //           },
// //         });
// //       } else {
// //         navigate("/register", { state: { selectedBook: [book] } });
// //       }
// //     } catch (error) {
// //       console.error("Error checking login status:", error);
// //     }
// //   };

// //   const handleMoreClick = (book) => {
// //     if (!selectedBooks.some(selectedBook => selectedBook._id === book._id)) {
// //       // Add the book to selectedBooks only if it's not already present
// //       setBooks(prevSelectedBook => [...prevSelectedBook, book]);
// //     }
// //     setDisplayedBook(book);
// //   };

// //   const handleMouseEnter = (book) => {
// //     setHoveredBook(book);
// //   };

// //   const handleMouseLeave = () => {
// //     setHoveredBook(null);
// //   };

// //   const handleCloseDetails = () => {
// //     setDisplayedBook(null);
// //     setBooks([]);
// //   };

// //   const BookTitle = styled.div`
// //     font-size: 1vw; /* Adjust as needed */
// //     max-width: 80%;
// //   `;

// //   const BookPrice = styled.div`
// //     font-size: 0.8vw; /* Adjust as needed */
// //   `;

// //   return (
// //     <Container>
// //       <h1>Best Sellers For Fiction Genre</h1>
// //       <Books>
// //         {fictionImages.map((image, index) => (
// //           <BookContainer
// //             key={image._id}
// //             onMouseEnter={() => handleMouseEnter(image)}
// //             onMouseLeave={handleMouseLeave}
// //           >
// //             <BooksContent>
// //               <img
// //                 src={`http://localhost:5000/image/${image._id}`}
// //                 alt="Book Cover"
// //               />
// //               <BookTitle>{image.title}</BookTitle>
// //               <BookPrice>Price: ${image.price.toFixed(2)}</BookPrice>{" "}
// //               {/* Render price */}
// //               <BuyButton onClick={() => handleBuyClick(image)}>Buy</BuyButton>
// //               <More
// //                 visible={hoveredBook === image}
// //                 onClick={() => handleMoreClick(image)}
// //               >
// //                 More Details
// //               </More>
// //             </BooksContent>
// //           </BookContainer>
// //         ))}
// //       </Books>
// //       {displayedBook && (
// //         <BookDetails book={displayedBook} onClose={handleCloseDetails} />
// //       )}
// //     </Container>
// //   );
// // };

// // export default FictionContent;

// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import styled from "styled-components";
// import axios from "axios";
// import BookDetails from "./BookDetails";
// import { useBookContext } from "../utils/BookContext";

// const Container = styled.div`
//   width: 90%;
//   margin: 0 auto;
//   position: relative;

//   & h1 {
//     font-size: 2vw;
//   }
// `;

// const Books = styled.div`
//   display: flex;
//   gap: 5%;
//   height: 45vh;
//   width: auto;
//   flex-wrap: wrap;

//   &::-webkit-scrollbar {
//     width: 0px;
//   }
// `;

// const BookContainer = styled.div`
//   position: relative;
//   height: 100%;
//   width: 14vw;
// `;

// const BooksContent = styled.div`
//   display: flex;
//   gap: 2%;
//   height: 85%;
//   box-sizing: border-box;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 1rem;
//   padding: 1rem;
//   background-color: #e0e0e0;

//   & img {
//     width: 60%;
//     height: 65%;
//     object-fit: cover;
//     border-radius: 0.5rem;
//   }
// `;

// const More = styled.div`
//   font-size: 0.8vw;
//   visibility: ${(props) => (props.visible ? "visible" : "hidden")};
//   position: absolute;
//   bottom: 0%;
//   width: 100%;
//   padding: 0.5rem 0;
//   background-color: #e0e0e0;
//   opacity: ${(props) => (props.visible ? 1 : 0)};
//   transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
//   transition: opacity 0.3s, transform 0.3s;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 0.5rem;
//   cursor: pointer;
// `;

// const BuyButton = styled.button`
//   border-radius: 0.5rem;
//   box-shadow: none;
//   border: 1px solid;
//   padding: 0 1vw;
//   height: 10%;
//   width: 40%;
//   background: transparent;
// `;

// const FictionContent = ({ activeGenre }) => {
//   const [fictionImages, setFictionImages] = useState([]);
//   const [hoveredBook, setHoveredBook] = useState(null);
//   const { selectedBooks, setBooks } = useBookContext();
//   const [displayedBook, setDisplayedBook] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();

//   const checkLoginStatus = async () => {
//     try {
//       const response = await axios.get(
//         "http://localhost:5000/checkLoginStatus",
//         {
//           withCredentials: true,
//         }
//       );
//       setIsLoggedIn(response.data.loggedIn);
//     } catch (error) {
//       console.error("Error checking login status:", error);
//     }
//   };

//   useEffect(() => {
//     const fetchFictionImages = async () => {
//       try {
//         const response = await axios.get(
//           `http://localhost:5000/images/${activeGenre}`,
//           { withCredentials: true }
//         );
//         setFictionImages(response.data);
//       } catch (error) {
//         console.error("Error fetching fiction images:", error);
//       }
//     };

//     fetchFictionImages();
//   }, [activeGenre]);

//   useEffect(() => {
//     checkLoginStatus();
//   }, [selectedBooks]);

//   const handleBuyClick = async (book) => {
//     console.log(isLoggedIn)
//     try {
//       if (!isLoggedIn) {

//         // If user is not logged in, redirect to the register page
//         navigate("/register", { state: { selectedBook: book } });
//       } else {
//         // If user is logged in, redirect to the payment page directly
//         if (selectedBooks.length === 0) {
//           // Save the selected book in local storage or context
//           localStorage.setItem("selectedBook", JSON.stringify(book));
//           navigate("/payment");
//         } else {
//           // Redirect to payment page with the previously selected book data
//           navigate("/payment");
//         }
//       }
//     } catch (error) {
//       console.error("Error handling buy click:", error);
//       // Optionally handle error
//     }
//   };

//   const handleMoreClick = (book) => {
//     setDisplayedBook(book);
//   };

//   const handleMouseEnter = (book) => {
//     setHoveredBook(book);
//   };

//   const handleMouseLeave = () => {
//     setHoveredBook(null);
//   };

//   const handleCloseDetails = () => {
//     setDisplayedBook(null);
//   };

//   const BookTitle = styled.div`
//     font-size: 1vw;
//     max-width: 80%;
//   `;

//   const BookPrice = styled.div`
//     font-size: 0.8vw;
//   `;

//   return (
//     <Container>
//       <h1>Best Sellers For Fiction Genre</h1>
//       <Books>
//         {fictionImages.map((image, index) => (
//           <BookContainer
//             key={image._id}
//             onMouseEnter={() => handleMouseEnter(image)}
//             onMouseLeave={handleMouseLeave}
//           >
//             <BooksContent>
//               <img
//                 src={`http://localhost:5000/image/${image._id}`}
//                 alt="Book Cover"
//               />
//               <BookTitle>{image.title}</BookTitle>
//               <BookPrice>Price: ${image.price.toFixed(2)}</BookPrice>{" "}
//               <BuyButton onClick={() => handleBuyClick(image)}>Buy</BuyButton>
//               <More
//                 visible={hoveredBook === image}
//                 onClick={() => handleMoreClick(image)}
//               >
//                 More Details
//               </More>
//             </BooksContent>
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
import axios from "axios";
import BookDetails from "./BookDetails";
import { useBookContext } from "../utils/BookContext";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;

  & h1 {
    font-size: 2vw;
  }
`;

const Books = styled.div`
  display: flex;
  gap: 5%;
  height: 45vh;
  width: auto;
  flex-wrap: wrap;

  &::-webkit-scrollbar {
    width: 0px;
  }
`;

const BookContainer = styled.div`
  position: relative;
  height: 100%;
  width: 14vw;
`;

const BooksContent = styled.div`
  display: flex;
  gap: 2%;
  height: 85%;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #e0e0e0;

  & img {
    width: 60%;
    height: 65%;
    object-fit: cover;
    border-radius: 0.5rem;
  }
`;

const More = styled.div`
  font-size: 0.8vw;
  visibility: ${(props) => (props.visible ? "visible" : "hidden")};
  position: absolute;
  bottom: 0%;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #e0e0e0;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transform: translateY(${(props) => (props.visible ? "0%" : "-100%")});
  transition: opacity 0.3s, transform 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  cursor: pointer;
`;

const BuyButton = styled.button`
  border-radius: 0.5rem;
  box-shadow: none;
  border: 1px solid;
  padding: 0 1vw;
  height: 10%;
  width: 40%;
  background: transparent;
`;

const FictionContent = ({ activeGenre }) => {
  const [fictionImages, setFictionImages] = useState([]);
  const [hoveredBook, setHoveredBook] = useState(null);
  const { selectedBooks } = useBookContext();
  const [displayedBook, setDisplayedBook] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const checkLoginStatus = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/checkLoginStatus",
        {
          withCredentials: true,
        }
      );
      setIsLoggedIn(response.data.loggedIn);
    } catch (error) {
      console.error("Error checking login status:", error);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  useEffect(() => {
    const fetchFictionImages = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/images/${activeGenre}`,
          { withCredentials: true }
        );
        setFictionImages(response.data);
      } catch (error) {
        console.error("Error fetching fiction images:", error);
      }
    };

    fetchFictionImages();
  }, [activeGenre]);

  useEffect(() => {
    const updateLoginStatus = () => {
      checkLoginStatus();
    };

    // Update login status whenever the user logs in or logs out
    updateLoginStatus();
  }, [selectedBooks]); // You might need to replace `selectedBooks` with an appropriate dependency

  const handleBuyClick = async (book) => {
    try {
      if (!isLoggedIn) {
        // If user is not logged in, redirect to the register page
        navigate("/register", { state: { selectedBook: book } });
      } else {
        // Fetch user data
        const userDataResponse = await axios.get(
          "http://localhost:5000/checkLoginStatus",
          {
            withCredentials: true,
          }
        );
        const userData = userDataResponse.data.user;
  
        
        // Send user ID and book ID to the update route
        const updateResponse = await axios.post(
          "http://localhost:5000/update",
          {
            userId: userData._id,
            bookId: book._id,
          },
          {
            withCredentials: true,
          }
        );
  
        // Ensure the update operation completes successfully
        if (updateResponse.status === 200) {
          // Navigate the user to the payment page
          navigate("/payment", { state: { selectedBook: book } });
        }
      }
    } catch (error) {
      console.error("Error handling buy click:", error);
    }
  };
  

  const handleMoreClick = (book) => {
    setDisplayedBook(book);
  };

  const handleMouseEnter = (book) => {
    setHoveredBook(book);
  };

  const handleMouseLeave = () => {
    setHoveredBook(null);
  };

  const handleCloseDetails = () => {
    setDisplayedBook(null);
  };

  const BookTitle = styled.div`
    font-size: 1vw;
    max-width: 80%;
  `;

  const BookPrice = styled.div`
    font-size: 0.8vw;
  `;

  return (
    <Container>
      <h1>Best Sellers For {activeGenre} Genre</h1>
      <Books>
        {fictionImages.map((image, index) => (
          <BookContainer
            key={image._id}
            onMouseEnter={() => handleMouseEnter(image)}
            onMouseLeave={handleMouseLeave}
          >
            <BooksContent>
              <img
                src={`http://localhost:5000/image/${image._id}`}
                alt="Book Cover"
              />
              <BookTitle>{image.title}</BookTitle>
              <BookPrice>Price: ${image.price.toFixed(2)}</BookPrice>{" "}
              <BuyButton onClick={() => handleBuyClick(image)}>Buy</BuyButton>
              <More
                visible={hoveredBook === image}
                onClick={() => handleMoreClick(image)}
              >
                More Details
              </More>
            </BooksContent>
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
