import clsx from "clsx";
import React from "react";
import BookLink from "./BookLink";
import { Link } from "react-router-dom";

type LogoProps = {
  color: "white" | "black";
  currentAuthor: string;
};

const Logo: React.FC<LogoProps> = ({ color, currentAuthor }: LogoProps) => {
  return (
    <div className="absolute left-7 top-8 z-20 flex flex-col items-start gap-3 text-white 2xl:left-24">
      <h4
        className={clsx("text-2xl font-bold", {
          "text-white": color === "white",
          "text-black": color === "black",
        })}
        style={{ fontFamily: '"Libre Franklin", sans-serif' }}
      >
        .COVER
      </h4>
      {color === "white" ? (
        <span className="text-xl font-bold text-white">
          Home {">"} <BookLink currentAuthor={currentAuthor} />
        </span>
      ) : (
        <span className="text-xl font-bold text-black">
          <Link className="text-2xl italic" to={"/"}>
            Home
          </Link>{" "}
          {">"} <span>{currentAuthor}</span>
        </span>
      )}
    </div>
  );
};

export default Logo;
