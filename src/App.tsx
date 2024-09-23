import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./pages/Book";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<Book />} />
      </Routes>
    </>
  );
};

export default App;
