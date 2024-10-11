import clsx from "clsx";
import React from "react";
import { type NavigationProps, navigationData } from "./NavigationSlider";

const NavigationList: React.FC<NavigationProps> = ({
  currentAuthor,
  setCurrentAuthor,
}: NavigationProps) => {
  return (
    <nav className="absolute left-7 top-1/2 z-20 flex -translate-y-1/3 flex-col items-start text-white 2xl:left-24">
      <ul>
        {navigationData.map((dataItem, index) => (
          <li
            onClick={() => setCurrentAuthor(index)}
            key={dataItem.index}
            className={clsx(
              "flex cursor-pointer flex-col items-start justify-start text-white",
              {
                "opacity-70": index !== currentAuthor,
                "opacity-100": index === currentAuthor,
              },
            )}
          >
            <span
              style={{ fontFamily: '"Lacquer", sans-serif' }}
              className="w-1/5 text-2xl"
            >
              {dataItem.index}.
            </span>
            <div
              style={{ fontFamily: '"League Gothic", sans-serif' }}
              className="text-5xl uppercase leading-tight"
            >
              {dataItem.author}
            </div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationList;
