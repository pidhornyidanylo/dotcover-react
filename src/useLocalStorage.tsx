import { useState, useEffect } from "react";

export const useLocalStorage = () => {
  const [data, setData] = useState<number>(() => {
    const storedData = localStorage.getItem("currentAuthor");
    return storedData ? JSON.parse(storedData) : 0;
  });
  useEffect(() => {
    localStorage.setItem("currentAuthor", JSON.stringify(data));
  }, [data]);

  const updateData = (nextValue: number) => {
    setData(nextValue);
  };

  return {
    data,
    updateData,
  };
};
