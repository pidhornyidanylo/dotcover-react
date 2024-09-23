import clsx from "clsx";
import React from "react";

type LogoProps = {
  color: "white" | "black";
};

const Logo: React.FC<LogoProps> = ({ color }: LogoProps) => {
  return (
    <div className="absolute left-7 top-8 z-10 flex flex-col items-start text-white 2xl:left-24">
      <h4
        className={clsx("text-2xl font-bold", {
          "text-white": color === "white",
          "text-black": color === "black",
        })}
        style={{ fontFamily: '"Libre Franklin", sans-serif' }}
      >
        .COVER
      </h4>
      <span
        className={clsx("text-xl font-bold", {
          "text-white": color === "white",
          "text-black": color === "black",
        })}
      >
        Home
      </span>
    </div>
  );
};

export default Logo;
