import clsx from "clsx";
import React, { useEffect, useState } from "react";
import data from "../data.json";

const navigationArray = [
  { index: "01", author: "kafka" },
  { index: "02", author: "murakami" },
  { index: "03", author: "orwell" },
  { index: "04", author: "rand" },
];

type NavigationProps = {
  currentAuthor: number;
  setCurrentAuthor: (newAuthor: number) => void;
};

const Navigation: React.FC<NavigationProps> = ({
  currentAuthor,
  setCurrentAuthor,
}) => {
  const [disableAnimation, setDisableAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setDisableAnimation(window.innerWidth < 1535);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navStyle = !disableAnimation
    ? {
        transform: `translateX(-${(100 / data.length) * (currentAuthor + 1)}%) translateY(-50%)`,
      }
    : {};

  return (
    <nav
      className="navigation transition-all delay-0 duration-100 ease-in"
      style={navStyle}
    >
      <ul className="flex list-none flex-col xl:gap-6 2xl:flex-row 2xl:gap-12">
        {navigationArray.map((authorItem, index) => {
          const isActive = index === currentAuthor;
          return (
            <li
              key={index}
              onClick={() => setCurrentAuthor(index)}
              className={clsx(
                "flex cursor-pointer flex-col items-start justify-end text-white",
                isActive ? "border-b-2 opacity-100" : "opacity-80",
              )}
            >
              <span
                className={clsx({
                  "text-2xl 2xl:text-7xl": isActive,
                  "text-2xl 2xl:text-5xl": !isActive,
                })}
                style={{ fontFamily: '"Lacquer", sans-serif' }}
              >
                {authorItem.index}.
              </span>
              <div
                className={clsx("transition-all", {
                  "text-5xl 2xl:text-10xl": isActive,
                  "text-5xl 2xl:text-7xl": !isActive,
                })}
                style={{ fontFamily: '"League Gothic", sans-serif' }}
              >
                {authorItem.author.toUpperCase()}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
