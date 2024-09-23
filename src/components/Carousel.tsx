import React, { useEffect, useState } from "react";
import CarouselSlide from "./CarouselSlide";
import type { Book as BookType } from "../data";
import data from "../data.json";

type CarouselProps = {
  currentAuthor: number;
};

const Carousel: React.FC<CarouselProps> = ({
  currentAuthor,
}: CarouselProps) => {
  const [disableAnimation, setDisableAnimation] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1535) {
        setDisableAnimation(true);
      } else {
        setDisableAnimation(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="carousel transition-all delay-75 duration-500 ease-linear"
      style={
        {
          "--dynamic-length": data.length,
          transform: !disableAnimation
            ? `translateX(-${currentAuthor * 100}vw)`
            : "",
        } as React.CSSProperties
      }
    >
      {data.map((data: BookType, index) => (
        <CarouselSlide key={index} cover={data.images.bg} />
      ))}
    </div>
  );
};

export default Carousel;
