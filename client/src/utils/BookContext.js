import { createContext, useContext,useState } from "react";

const BookContext = createContext();

export const useBookContext = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [selectedBook, setSelectedBook] = useState([]);

  const setBooks = (books) => {
    setSelectedBook(books);
  };

  return (
    <BookContext.Provider value={{ selectedBook, setBooks }}>
      {children}
    </BookContext.Provider>
  );
};
