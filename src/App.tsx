import React from "react";
import { Route, Routes } from "react-router-dom";
import Book from "./pages/Book";
import Home from "./pages/Home";
import { useLocalStorage } from "./useLocalStorage";

const App = () => {
  const { currentAuthor, setCurrentAuthor } = useLocalStorage();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              currentAuthor={currentAuthor}
              setCurrentAuthor={setCurrentAuthor}
            />
          }
        />
        <Route
          path="/book/:author"
          element={<Book currentAuthor={currentAuthor} />}
        />
      </Routes>
    </>
  );
};

export default App;
