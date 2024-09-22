import React from "react";

type CoverSlideProps = {
  cover: string;
};

const CoverSlide = ({ cover }: CoverSlideProps) => {
  return (
    <div
      className="carousel-item"
      style={{ "--dynamic-path": `url(${cover})` } as React.CSSProperties}
    />
  );
};

export default CoverSlide;
