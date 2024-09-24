import React from "react";
import type { Book as BookType } from "../../data";
import data from "../../data.json";
import CarouselSlide from "./CarouselSlide";

type CarouselProps = {
  currentAuthor: number;
};

const Carousel: React.FC<CarouselProps> = ({
  currentAuthor,
}: CarouselProps) => {
  return (
    <div
      className="carousel transition-all delay-75 duration-500 ease-linear"
      style={
        {
          "--dynamic-length": data.length,
          transform: `translateX(-${currentAuthor * 100}vw)`,
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
