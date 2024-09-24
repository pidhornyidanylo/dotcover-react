import React, { useEffect, useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

export const navigationData = [
  { index: "01", author: "kafka" },
  { index: "02", author: "murakami" },
  { index: "03", author: "orwell" },
  { index: "04", author: "rand" },
];

export type NavigationProps = {
  currentAuthor: number;
  setCurrentAuthor: (newAuthor: number) => void;
};

const NavigationSlider: React.FC<NavigationProps> = ({
  currentAuthor,
  setCurrentAuthor,
}: NavigationProps) => {
  const authorsData = navigationData.map((dataItem) => {
    return {
      key: dataItem.index,
      content: (
        <div
          key={dataItem.index}
          className="flex cursor-pointer flex-col items-start justify-end text-white"
        >
          <span
            style={{ fontFamily: '"Lacquer", sans-serif' }}
            className="text-7xl"
          >
            {dataItem.index}.
          </span>
          <div
            style={{ fontFamily: '"League Gothic", sans-serif' }}
            className="uppercase leading-tight sm:text-8xl md:text-9xl lg:text-10xl xl:text-11xl 2xl:text-12xl"
          >
            {dataItem.author}
          </div>
        </div>
      ),
    };
  });

  const table = authorsData.map((el, index) => {
    return {
      ...el,
      onClick: () => {
        setGoToSlide(index);
        setCurrentAuthor(index);
      },
    };
  });

  const [goToSlide, setGoToSlide] = useState<number>(currentAuthor);
  useEffect(() => {
    setGoToSlide(currentAuthor);
  }, [currentAuthor]);
  const [cards] = useState(table);
  return (
    <div className="absolute left-1/2 top-1/2 z-40 h-1/4 w-3/4 -translate-x-1/2 -translate-y-1/2">
      <Carousel
        showNavigation={false}
        animationConfig={config.slow}
        goToSlide={goToSlide}
        goToSlideDelay={200}
        slides={cards}
        offsetRadius={3}
      />
    </div>
  );
};

export default NavigationSlider;
