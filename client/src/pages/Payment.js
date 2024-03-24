// // // // PaymentComponent.jsx
// // // import React, { useEffect } from "react";
// // // import { useLocation } from "react-router-dom";
// // // import styled from "styled-components";
// // // import { useBookContext } from "../utils/BookContext";

// // // const PaymentComponent = () => {
// // //   const location = useLocation();
// // //   const { setBooks } = useBookContext();
// // //   const { selectedBook = [], totalPrice } = location.state || {};
// // //   console.log(selectedBook);

// // //   const Container = styled.div`
// // //     display: grid;
// // //     grid-template-columns: 50% 50%;
// // //     width: 90%;
// // //     margin: 0 auto;
// // //   `;

// // //   const Books = styled.div``;

// // //   const Content = styled.div`
// // //     display: flex;
// // //     justify-content: space-between;

    
// // //   `;

// // //   const Text = styled.div``

// // //   // Set selectedBook data to context
// // //   useEffect(() => {
// // //     setBooks(selectedBook);
// // //   }, [selectedBook, setBooks]);

// // //   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

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
// // //                   src={getImageUrl(book._id)}
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
// // //       {/* Add payment form or logic here */}
// // //     </Container>
// // //   );
// // // };

// // // export default PaymentComponent;










// // import React, { useEffect } from "react";
// // import { useLocation } from "react-router-dom";
// // import styled from "styled-components";
// // import { useBookContext } from "../utils/BookContext";

// // const PaymentComponent = () => {  
// //   const location = useLocation();
// //   const { selectedBooks,setBooks } = useBookContext();
// //   const { selectedBook = [], totalPrice } = location.state || {};

// //   useEffect(() => {
// //     setBooks(prevBooks => [...prevBooks, ...selectedBook]);
// //   }, [selectedBook, setBooks]);

// //   console.log("Selected Books:", selectedBook);

// //   const Container = styled.div`
// //     display: grid;
// //     grid-template-columns: 50% 50%;
// //     width: 90%;
// //     margin: 0 auto;
// //   `;

// //   const Books = styled.div``;

// //   const Content = styled.div`
// //     display: flex;
// //     justify-content: space-between;
// //   `;

// //   const Text = styled.div``;

// //   const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

// //   return (
// //     <Container>
// //       <Books>
// //         {selectedBook.length > 0 && (
// //           <div>
// //             <h3>Selected Book Information</h3>
// //             {selectedBook.map((book, index) => (
// //               <Content key={index}>
// //                 <Text>
// //                   <p>Title: {book.title}</p>
// //                   <p>Author: {book.author}</p>
// //                   <p>Price: ${book.price.toFixed(2)}</p>
// //                 </Text>
// //                 <img
// //                   src={getImageUrl(book._id)}
// //                   alt="Book Cover"
// //                   style={{
// //                     width: "200px",
// //                     height: "200px",
// //                     borderRadius: "0.5rem",
// //                   }}
// //                 />
// //               </Content>
// //             ))}
// //           </div>
// //         )}
// //       </Books>
// //       {/* Add payment form or logic here */}
// //     </Container>
// //   );
// // };

// // export default PaymentComponent;


// import React, { useEffect } from "react";
// import styled from "styled-components";
// import { useLocation } from "react-router-dom";
// import { useBookContext } from "../utils/BookContext";

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

// const Text = styled.div``;

// const PaymentComponent = () => {
//   const location = useLocation();
//   const { selectedBooks } = useBookContext();
//   const { selectedBook = [] } = location.state || {};

//   useEffect(() => {
//     console.log("Selected Books:", selectedBook);
//   }, [selectedBook]);

//   return (
//     <Container>
//       <Books>
//         {selectedBooks.length > 0 && (
//           <div>
//             <h3>Selected Book Information</h3>
//             {selectedBooks.map((book, index) => (
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
//       </Books>
//     </Container>
//   );
// };

// export default PaymentComponent;













import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 90%;
  margin: 0 auto;
`;

const Books = styled.div``;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.div``;

const PaymentComponent = () => {
  const location = useLocation();
  const { selectedBook = [] } = location.state || {}; // Access selectedBook from location.state

  return (
    <Container>
      <Books>
        {selectedBook.length > 0 && (
          <div>
            <h3>Selected Book Information</h3>
            {selectedBook.map((book, index) => (
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
      </Books>
    </Container>
  );
};

export default PaymentComponent;
