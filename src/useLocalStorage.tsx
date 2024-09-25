import { useEffect, useState } from "react";

export const useLocalStorage = () => {
  const [currentAuthor, setCurrentAuthor] = useState<number>(() => {
    const storedData = localStorage.getItem("currentAuthor");
    return storedData ? JSON.parse(storedData) : 0;
  });

  useEffect(() => {
    localStorage.setItem("currentAuthor", JSON.stringify(currentAuthor));
  }, [currentAuthor]);

  return {
    currentAuthor,
    setCurrentAuthor,
  };
};
