// App.js
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import Books from "./pages/Books";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Payment from "./pages/Payment";
import { BookProvider } from "./utils/BookContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <BookProvider>
      <BrowserRouter>
        <>
          <Header />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/books" element={<Books />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              path="/payment"
              element={<Payment />}
            />
            <Route
              exact
              path="/login"
              element={<Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </>
      </BrowserRouter>
    </BookProvider>
  );
}

export default App;
