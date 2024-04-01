// // // // // // // // PaymentComponent.jsx
// // // // // // // import React, { useEffect } from "react";
// // // // // // // import { useLocation } from "react-router-dom";
// // // // // // // import styled from "styled-components";
// // // // // // // import { useBookContext } from "../utils/BookContext";

// // // // // // // const PaymentComponent = () => {
// // // // // // //   const location = useLocation();
// // // // // // //   const { setBooks } = useBookContext();
// // // // // // //   const { selectedBook = [], totalPrice } = location.state || {};
// // // // // // //   console.log(selectedBook);

// // // // // // //   const Container = styled.div`
// // // // // // //     display: grid;
// // // // // // //     grid-template-columns: 50% 50%;
// // // // // // //     width: 90%;
// // // // // // //     margin: 0 auto;
// // // // // // //   `;

// // // // // // //   const Books = styled.div``;

// // // // // // //   const Content = styled.div`
// // // // // // //     display: flex;
// // // // // // //     justify-content: space-between;

// // // // // // //   `;

// // // // // // //   const Text = styled.div``

// // // // // // //   // Set selectedBook data to context
// // // // // // //   useEffect(() => {
// // // // // // //     setBooks(selectedBook);
// // // // // // //   }, [selectedBook, setBooks]);

// // // // // // //   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

// // // // // // //   return (
// // // // // // //     <Container>
// // // // // // //       <Books>
// // // // // // //         {selectedBook.length > 0 && (
// // // // // // //           <div>
// // // // // // //             <h3>Selected Book Information</h3>
// // // // // // //             {selectedBook.map((book, index) => (
// // // // // // //               <Content key={index}>
// // // // // // //                 <Text>
// // // // // // //                   <p>Title: {book.title}</p>
// // // // // // //                   <p>Author: {book.author}</p>
// // // // // // //                   <p>Price: ${book.price.toFixed(2)}</p>
// // // // // // //                 </Text>
// // // // // // //                 <img
// // // // // // //                   src={getImageUrl(book._id)}
// // // // // // //                   alt="Book Cover"
// // // // // // //                   style={{
// // // // // // //                     width: "200px",
// // // // // // //                     height: "200px",
// // // // // // //                     borderRadius: "0.5rem",
// // // // // // //                   }}
// // // // // // //                 />
// // // // // // //               </Content>
// // // // // // //             ))}
// // // // // // //           </div>
// // // // // // //         )}

// // // // // // //       </Books>
// // // // // // //       {/* Add payment form or logic here */}
// // // // // // //     </Container>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default PaymentComponent;

// // // // // // import React, { useEffect } from "react";
// // // // // // import { useLocation } from "react-router-dom";
// // // // // // import styled from "styled-components";
// // // // // // import { useBookContext } from "../utils/BookContext";

// // // // // // const PaymentComponent = () => {
// // // // // //   const location = useLocation();
// // // // // //   const { selectedBooks,setBooks } = useBookContext();
// // // // // //   const { selectedBook = [], totalPrice } = location.state || {};

// // // // // //   useEffect(() => {
// // // // // //     setBooks(prevBooks => [...prevBooks, ...selectedBook]);
// // // // // //   }, [selectedBook, setBooks]);

// // // // // //   console.log("Selected Books:", selectedBook);

// // // // // //   const Container = styled.div`
// // // // // //     display: grid;
// // // // // //     grid-template-columns: 50% 50%;
// // // // // //     width: 90%;
// // // // // //     margin: 0 auto;
// // // // // //   `;

// // // // // //   const Books = styled.div``;

// // // // // //   const Content = styled.div`
// // // // // //     display: flex;
// // // // // //     justify-content: space-between;
// // // // // //   `;

// // // // // //   const Text = styled.div``;

// // // // // //   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

// // // // // //   return (
// // // // // //     <Container>
// // // // // //       <Books>
// // // // // //         {selectedBook.length > 0 && (
// // // // // //           <div>
// // // // // //             <h3>Selected Book Information</h3>
// // // // // //             {selectedBook.map((book, index) => (
// // // // // //               <Content key={index}>
// // // // // //                 <Text>
// // // // // //                   <p>Title: {book.title}</p>
// // // // // //                   <p>Author: {book.author}</p>
// // // // // //                   <p>Price: ${book.price.toFixed(2)}</p>
// // // // // //                 </Text>
// // // // // //                 <img
// // // // // //                   src={getImageUrl(book._id)}
// // // // // //                   alt="Book Cover"
// // // // // //                   style={{
// // // // // //                     width: "200px",
// // // // // //                     height: "200px",
// // // // // //                     borderRadius: "0.5rem",
// // // // // //                   }}
// // // // // //                 />
// // // // // //               </Content>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         )}
// // // // // //       </Books>
// // // // // //       {/* Add payment form or logic here */}
// // // // // //     </Container>
// // // // // //   );
// // // // // // };

// // // // // // export default PaymentComponent;

// // // // // import React, { useEffect } from "react";
// // // // // import styled from "styled-components";
// // // // // import { useLocation } from "react-router-dom";
// // // // // import { useBookContext } from "../utils/BookContext";

// // // // // const Container = styled.div`
// // // // //   display: grid;
// // // // //   grid-template-columns: 50% 50%;
// // // // //   width: 90%;
// // // // //   margin: 0 auto;
// // // // // `;

// // // // // const Books = styled.div``;

// // // // // const Content = styled.div`
// // // // //   display: flex;
// // // // //   justify-content: space-between;
// // // // // `;

// // // // // const Text = styled.div``;

// // // // // const PaymentComponent = () => {
// // // // //   const location = useLocation();
// // // // //   const { selectedBooks } = useBookContext();
// // // // //   const { selectedBook = [] } = location.state || {};

// // // // //   useEffect(() => {
// // // // //     console.log("Selected Books:", selectedBook);
// // // // //   }, [selectedBook]);

// // // // //   return (
// // // // //     <Container>
// // // // //       <Books>
// // // // //         {selectedBooks.length > 0 && (
// // // // //           <div>
// // // // //             <h3>Selected Book Information</h3>
// // // // //             {selectedBooks.map((book, index) => (
// // // // //               <Content key={index}>
// // // // //                 <Text>
// // // // //                   <p>Title: {book.title}</p>
// // // // //                   <p>Author: {book.author}</p>
// // // // //                   <p>Price: ${book.price.toFixed(2)}</p>
// // // // //                 </Text>
// // // // //                 <img
// // // // //                   src={`http://localhost:5000/image/${book._id}`}
// // // // //                   alt="Book Cover"
// // // // //                   style={{
// // // // //                     width: "200px",
// // // // //                     height: "200px",
// // // // //                     borderRadius: "0.5rem",
// // // // //                   }}
// // // // //                 />
// // // // //               </Content>
// // // // //             ))}
// // // // //           </div>
// // // // //         )}
// // // // //       </Books>
// // // // //     </Container>
// // // // //   );
// // // // // };

// // // // // export default PaymentComponent;

// // // // import React from "react";
// // // // import styled from "styled-components";
// // // // import { useLocation } from "react-router-dom";

// // // // const Container = styled.div`
// // // //   display: grid;
// // // //   grid-template-columns: 50% 50%;
// // // //   width: 90%;
// // // //   margin: 0 auto;
// // // // `;

// // // // const Books = styled.div``;

// // // // const Content = styled.div`
// // // //   display: flex;
// // // //   justify-content: space-between;
// // // // `;

// // // // const Text = styled.div``;

// // // // const PaymentComponent = () => {
// // // //   const location = useLocation();
// // // //   const { selectedBook = [] } = location.state || {}; // Access selectedBook from location.state

// // // //   return (
// // // //     <Container>
// // // //       <Books>
// // // //         {selectedBook.length > 0 && (
// // // //           <div>
// // // //             <h3>Selected Book Information</h3>
// // // //             {selectedBook.map((book, index) => (
// // // //               <Content key={index}>
// // // //                 <Text>
// // // //                   <p>Title: {book.title}</p>
// // // //                   <p>Author: {book.author}</p>
// // // //                   <p>Price: ${book.price.toFixed(2)}</p>
// // // //                 </Text>
// // // //                 <img
// // // //                   src={`http://localhost:5000/image/${book._id}`}
// // // //                   alt="Book Cover"
// // // //                   style={{
// // // //                     width: "200px",
// // // //                     height: "200px",
// // // //                     borderRadius: "0.5rem",
// // // //                   }}
// // // //                 />
// // // //               </Content>
// // // //             ))}
// // // //           </div>
// // // //         )}
// // // //       </Books>
// // // //     </Container>
// // // //   );
// // // // };

// // // // export default PaymentComponent;

// // // // PaymentComponent.js
// // // import React, { useState } from "react";
// // // import styled from "styled-components";
// // // import { useLocation } from "react-router-dom";

// // // const Container = styled.div`
// // //   display: grid;
// // //   grid-template-columns: 50% 50%;
// // //   width: 90%;
// // //   margin: 0 auto;
// // // `;

// // // const Books = styled.div``;

// // // const Content = styled.div`
// // //   display: flex;
// // //   justify-content: space-between;
// // // `;

// // // const Button = styled.button`
// // //   background-color: #007bff;
// // //   color: #fff;
// // //   border: none;
// // //   padding: 10px 20px;
// // //   cursor: pointer;
// // // `;

// // // const Text = styled.div``;
// // // const Total = styled.div``;

// // // const PaymentComponent = () => {
// // //   const location = useLocation();
// // //   const { selectedBook = [] } = location.state || {};
// // //   const [orderPlaced, setOrderPlaced] = useState(false);

// // //   const totalPrice = selectedBook.reduce(
// // //     (total, book) => total + book.price,
// // //     0
// // //   );


// // //   const handleBuy = () => {
// // //     setOrderPlaced(true);
// // //   };



// // //   return (
// // //     <Container>
// // //       <Books>
// // //         {selectedBook.length > 0 && (
// // //           <div>
// // //             <h3>Selected Book Information</h3>
// // //             {selectedBook.map((book, index) => (
// // //               <Content key={index}>
// // //                 <Text>
// // //                   <p>Title: {book.title}</p>
// // //                   <p>Author: {book.author}</p>
// // //                   <p>Price: ${book.price.toFixed(2)}</p>
// // //                 </Text>
// // //                 <img
// // //                   src={`http://localhost:5000/image/${book._id}`}
// // //                   alt="Book Cover"
// // //                   style={{
// // //                     width: "200px",
// // //                     height: "200px",
// // //                     borderRadius: "0.5rem",
// // //                   }}
// // //                 />
// // //               </Content>
// // //             ))}
// // //           </div>
// // //         )}
// // //       </Books>
// // //       <Total>
// // //         {" "}
// // //         <p>Total Price: ${totalPrice.toFixed(2)}</p>
// // //          <Button onClick={handleBuy}>Buy</Button>
// // //       </Total>
// // //     </Container>
// // //   );
// // // };

// // // export default PaymentComponent;













// import React, { useState ,useEffect } from "react";
// import styled from "styled-components";
// import { useLocation, useNavigate } from "react-router-dom";

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 50% 50%;
//   width: 90%;
//   margin: 0 auto;
// `;

// const Books = styled.div``;

// const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
// `;

// const Text = styled.div``;
// const Total = styled.div``;
// const Message = styled.div`
//   color: green;
//   font-weight: bold;
// `;

// const PaymentComponent = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { selectedBook = [] } = location.state || {};
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   console.log(selectedBook)
//   const [books, setBooks] = useState(selectedBook); // Define setBooks function

//   const totalPrice = books.reduce((total, book) => total + book.price, 0);

//   const handleBuy = () => {
//     setOrderPlaced(true);
//     // Clear the selectedBook array
//     setBooks([]);
//   };


//   useEffect(() => {
//     console.log("Updated books:", books);
//   }, [books]);
  

//   return (
//     <Container>
//       <Books>
//         {books.length > 0 && (
//           <div>
//             <h3>Selected Book Information</h3>
//             {books.map((book, index) => (
//               <Content key={index}>
//                 <Text>
//                   <p>Title: {book.title}</p>
//                   <p>Author: {book.author}</p>
//                   <p>Price: ${book.price.toFixed(2)}</p>
//                 </Text>
//                 <img
//                   src={`http://localhost:5000/image/${book._id}`}
//                   alt="Book Cover"
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     borderRadius: "0.5rem",
//                   }}
//                 />
//               </Content>
//             ))}
//           </div>
//         )}
//         {orderPlaced && <Message>Order Placed!</Message>}
//       </Books>
//       {!orderPlaced && (
//         <Total>
//           <p>Total Price: ${totalPrice.toFixed(2)}</p>
//           <Button onClick={handleBuy}>Buy</Button>
//         </Total>
//       )}
//     </Container>
//   );
// };

// export default PaymentComponent;







// // PaymentComponent.js
// import React, { useState, useEffect } from "react";
// import styled from "styled-components";
// import { useLocation, useNavigate } from "react-router-dom";

// const Container = styled.div`
//   display: grid;
//   grid-template-columns: 50% 50%;
//   width: 90%;
//   margin: 0 auto;
// `;

// const Books = styled.div``;

// const Content = styled.div`
//   display: flex;
//   justify-content: space-between;
// `;

// const Button = styled.button`
//   background-color: #007bff;
//   color: #fff;
//   border: none;
//   padding: 10px 20px;
//   cursor: pointer;
// `;

// const Text = styled.div``;
// const Total = styled.div``;
// const Message = styled.div`
//   color: green;
//   font-weight: bold;
// `;

// const PaymentComponent = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { selectedBook = [] } = location.state || {};
//   const [orderPlaced, setOrderPlaced] = useState(false);
//   const [books, setBooks] = useState([]); // Initialize state as an empty array

//   useEffect(() => {
//     if (selectedBook.length > 0) {
//       setBooks(prevBooks => [...prevBooks, ...selectedBook]);
//     }
//   }, [selectedBook]);

//   const totalPrice = books.reduce((total, book) => total + book.price, 0);

//   const handleBuy = () => {
//     setOrderPlaced(true);
//     // Clear the array of books
//     setBooks([]);
//     navigate("/");
//   };

//   return (
//     <Container>
//       <Books>
//         {books.length > 0 && (
//           <div>
//             <h3>Selected Book Information</h3>
//             {books.map((book, index) => (
//               <Content key={index}>
//                 <Text>
//                   <p>Title: {book.title}</p>
//                   <p>Author: {book.author}</p>
//                   <p>Price: ${book.price.toFixed(2)}</p>
//                 </Text>
//                 <img
//                   src={`http://localhost:5000/image/${book._id}`}
//                   alt="Book Cover"
//                   style={{
//                     width: "200px",
//                     height: "200px",
//                     borderRadius: "0.5rem",
//                   }}
//                 />
//               </Content>
//             ))}
//           </div>
//         )}
//         {orderPlaced && <Message>Order Placed!</Message>}
//       </Books>
//       {!orderPlaced && (
//         <Total>
//           <p>Total Price: ${totalPrice.toFixed(2)}</p>
//           <Button onClick={handleBuy}>Buy</Button>
//         </Total>
//       )}
//     </Container>
//   );
// };

// export default PaymentComponent;







import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 90%;
  margin: 0 auto;
`;

const BooksContainer = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
`;

const Text = styled.div``;
const Total = styled.div``;
const Message = styled.div`
  color: green;
  font-weight: bold;
`;

const PaymentComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedBook = [] } = location.state || [];
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    if (selectedBook.length > 0) {
      setSelectedBooks(prevSelectedBooks => [...prevSelectedBooks, ...selectedBook]);
    }
  }, [selectedBook]);

  const totalPrice = selectedBooks.reduce((total, book) => total + book.price, 0);

  const handleBuy = () => {
    setOrderPlaced(true);
    // Clear the array of selected books
    setSelectedBooks([]);
    navigate("/");
  };

  return (
    <Container>
      <BooksContainer>
        {selectedBooks.length > 0 && (
          <div>
            <h3>Selected Book Information</h3>
            {selectedBooks.map((book, index) => (
              <Content key={index}>
                <Text>
                  <p>Title: {book.title}</p>
                  <p>Author: {book.author}</p>
                  <p>Price: ${book.price.toFixed(2)}</p>
                </Text>
                <img
                  src={`http://localhost:5000/image/${book._id}`}
                  alt="Book Cover"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "0.5rem",
                  }}
                />
              </Content>
            ))}
          </div>
        )}
        {orderPlaced && <Message>Order Placed!</Message>}
      </BooksContainer>
      {!orderPlaced && (
        <Total>
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <Button onClick={handleBuy}>Buy</Button>
        </Total>
      )}
    </Container>
  );
};

export default PaymentComponent;
