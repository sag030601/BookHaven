import React, { createContext, useContext, useState } from "react";

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [selectedBooks, setSelectedBooks] = useState([]);

  const setBooks = (books) => {
    setSelectedBooks(books);
    console.log("Selected books updated:", books);
  };

  return (
    <BookContext.Provider value={{ selectedBooks, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};


