import React from "react";
import { Route, Routes } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import Book from "./pages/Book";
import Home from "./pages/Home";

const App = () => {
  const { data, updateData } = useLocalStorage();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home currentAuthor={data} setCurrentAuthor={updateData} />}
        />
        <Route path="/book/:author" element={<Book currentAuthor={data} />} />
      </Routes>
    </>
  );
};

export default App;
