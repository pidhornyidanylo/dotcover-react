import React from "react";

type CarouselSlideProps = {
  cover: string;
};

const CarouselSlide = ({ cover }: CarouselSlideProps) => {
  return (
    <div
      className="carousel-item"
      style={{ "--dynamic-path": `url(${cover})` } as React.CSSProperties}
    />
  );
};

export default CarouselSlide;
