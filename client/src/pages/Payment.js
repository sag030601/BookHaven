// PaymentComponent.jsx
import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useBookContext } from "../utils/BookContext";

const PaymentComponent = () => {
  const location = useLocation();
  const { setBooks } = useBookContext();
  const { selectedBook = [], totalPrice } = location.state || {};
  console.log(selectedBook);

  const Container = styled.div`
    display: grid;
  `;

  // Set selectedBook data to context
  useEffect(() => {
    setBooks(selectedBook);
  }, [selectedBook, setBooks]);

  const getImageUrl = (imageId) => `http://localhost:5000/image/${imageId}`;

  return (
    <Container>
      <div>
        <h2>Payment Page</h2>
        {selectedBook.length > 0 && (
          <div>
            <h3>Selected Book Information</h3>
            {selectedBook.map((book, index) => (
              <div key={index}>
                <p>Title: {book.title}</p>
                <p>Author: {book.author}</p>
                <p>Price: ${book.price.toFixed(2)}</p>
                <p>Description: {book.description}</p>
                <img
                  src={getImageUrl(book._id)}
                  alt="Book Cover"
                  style={{
                    width: "200px",
                    height: "200px",
                    borderRadius: "0.5rem",
                  }}
                />
              </div>
            ))}
          </div>
        )}

        <p>Total Price: ${totalPrice}</p>
      </div>
      {/* Add payment form or logic here */}
    </Container>
  );
};

export default PaymentComponent;
