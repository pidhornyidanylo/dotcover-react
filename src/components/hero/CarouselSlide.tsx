import React from "react";

type CarouselSlideProps = {
  cover: string;
};

const CarouselSlide = ({ cover }: CarouselSlideProps) => {
  return (
    <div
      className="carousel-item"
      style={{
        backgroundImage: `url(${cover})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
    />
  );
};

export default CarouselSlide;
