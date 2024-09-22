import React from "react";
import data from "../data.json";
import CoverSlide from "../components/CoverSlide";
import { Book as BookType } from "../data";
import Social from "../components/Social";

const Home = () => {
  return (
    <section id="hero">
      <div
        className="carousel"
        style={{ "--dynamic-length": data.length } as React.CSSProperties}
      >
        {data.map((data: BookType, index) => (
          <CoverSlide key={index} cover={data.images.bg} />
        ))}
      </div>
      <Social />
    </section>
  );
};

export default Home;
