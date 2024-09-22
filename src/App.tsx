import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Book from "./pages/Book";

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
